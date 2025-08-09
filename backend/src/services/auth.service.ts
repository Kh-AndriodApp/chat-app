import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { prisma } from '../models/postgres';
import { User, UserSession } from '../models/postgres';
import { DeviceInfoModel } from '../utils/types';

export interface LoginCredentials {
  identifier: string; // can be email, phone, or username
  password: string;
  deviceInfo?: DeviceInfoModel;
  userAgent?: string;
  ipAddress?: string;
}

export interface RegisterData {
  name: string;
  email?: string;
  username: string;
  password: string;
  phoneNumber?: string;
  bio?: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresAt: Date;
}

export interface AuthResult {
  user: Omit<User, 'password'>;
  tokens: AuthTokens;
  session: UserSession;
}

class AuthService {
  private readonly saltRounds = 12;
  private readonly accessTokenExpiry = '1h';
  private readonly refreshTokenExpiry = '7d';

  async register(data: RegisterData): Promise<AuthResult> {
    // Validate that at least email or phone is provided
    if (!data.email && !data.phoneNumber) {
      throw new Error('Either email or phone number is required');
    }

    // Check if user already exists
    const existingUser = await this.findUserByIdentifier(
      data.email || data.phoneNumber || data.username
    );

    if (existingUser) {
      throw new Error('User already exists with this email, phone, or username');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, this.saltRounds);

    // Create user
    const user = await prisma.user.create({
      data: {
        documentId: uuidv4(),
        name: data.name,
        email: data.email || '',
        username: data.username,
        password: hashedPassword,
        phoneNumber: data.phoneNumber || '',
        bio: data.bio,
        createdBy: 0, // System created
        updatedBy: 0,
      },
    });

    // Create session and tokens
    const tokens = await this.generateTokens(user.documentId);
    const session = await this.createSession(user.documentId, tokens, {
      userAgent: 'Registration',
      ipAddress: '0.0.0.0',
    });

    return {
      user: this.sanitizeUser(user),
      tokens,
      session,
    };
  }

  async login(credentials: LoginCredentials): Promise<AuthResult> {
    // Find user by identifier (email, phone, or username)
    const user = await this.findUserByIdentifier(credentials.identifier);

    if (!user) {
      throw new Error('Invalid credentials');
    }

    if (!user.isActive) {
      throw new Error('Account is deactivated');
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    // Generate tokens
    const tokens = await this.generateTokens(user.documentId);

    // Create session
    const session = await this.createSession(user.documentId, tokens, {
      deviceInfo: credentials.deviceInfo,
      userAgent: credentials.userAgent,
      ipAddress: credentials.ipAddress,
    });

    // Update last activity
    await prisma.user.update({
      where: { id: user.id },
      data: {
        lastActivityDate: new Date(),
        status: 'ONLINE',
        updatedAt: new Date(),
        updatedBy: user.id,
      },
    });

    return {
      user: this.sanitizeUser(user),
      tokens,
      session,
    };
  }

  async refreshTokens(refreshToken: string): Promise<AuthResult> {
    // Find session by refresh token
    const session = await prisma.userSession.findFirst({
      where: {
        refreshToken,
        isActive: true,
        expiresAt: {
          gt: new Date(),
        },
      },
      include: {
        user: true,
      },
    });

    if (!session || !session.user) {
      throw new Error('Invalid refresh token');
    }

    if (!session.user.isActive) {
      throw new Error('Account is deactivated');
    }

    // Generate new tokens
    const tokens = await this.generateTokens(session.userId);

    // Update session
    const updatedSession = await prisma.userSession.update({
      where: { id: session.id },
      data: {
        sessionToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
        expiresAt: tokens.expiresAt,
        lastActivityAt: new Date(),
        updatedAt: new Date(),
        updatedBy: session.user.id,
      },
    });

    return {
      user: this.sanitizeUser(session.user),
      tokens,
      session: updatedSession,
    };
  }

  async logout(sessionToken: string): Promise<void> {
    await prisma.userSession.updateMany({
      where: {
        sessionToken,
        isActive: true,
      },
      data: {
        isActive: false,
        updatedAt: new Date(),
      },
    });
  }

  async logoutAll(userId: string): Promise<void> {
    await prisma.userSession.updateMany({
      where: {
        userId,
        isActive: true,
      },
      data: {
        isActive: false,
        updatedAt: new Date(),
      },
    });
  }

  async verifyToken(token: string): Promise<User | null> {
    try {
      const decoded = jwt.verify(token, this.getJwtSecret()) as { userId: string };
      
      const session = await prisma.userSession.findFirst({
        where: {
          sessionToken: token,
          isActive: true,
          expiresAt: {
            gt: new Date(),
          },
        },
        include: {
          user: true,
        },
      });

      if (!session || !session.user || session.user.documentId !== decoded.userId) {
        return null;
      }

      // Update last activity
      await prisma.userSession.update({
        where: { id: session.id },
        data: {
          lastActivityAt: new Date(),
        },
      });

      return session.user;
    } catch {
      return null;
    }
  }

  private async findUserByIdentifier(identifier: string): Promise<User | null> {
    return await prisma.user.findFirst({
      where: {
        OR: [
          { email: identifier },
          { phoneNumber: identifier },
          { username: identifier },
        ],
        deletedAt: null,
      },
    });
  }

  private async generateTokens(userId: string): Promise<AuthTokens> {
    const accessToken = jwt.sign(
      { userId },
      this.getJwtSecret(),
      { expiresIn: this.accessTokenExpiry }
    );

    const refreshToken = jwt.sign(
      { userId, type: 'refresh' },
      this.getJwtSecret(),
      { expiresIn: this.refreshTokenExpiry }
    );

    // Calculate expiry date
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // 7 days for refresh token

    return {
      accessToken,
      refreshToken,
      expiresAt,
    };
  }

  private async createSession(
    userId: string,
    tokens: AuthTokens,
    sessionInfo: {
      deviceInfo?: DeviceInfoModel;
      userAgent?: string;
      ipAddress?: string;
    }
  ): Promise<UserSession> {
    return await prisma.userSession.create({
      data: {
        documentId: uuidv4(),
        userId,
        sessionToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
        //deviceInfo: sessionInfo.deviceInfo || null,
        userAgent: sessionInfo.userAgent,
        ipAddress: sessionInfo.ipAddress,
        expiresAt: tokens.expiresAt,
        createdBy: 0,
        updatedBy: 0,
      },
    });
  }

  private sanitizeUser(user: User): Omit<User, 'password'> {
    const { password, ...sanitizedUser } = user;
    return sanitizedUser;
  }

  private getJwtSecret(): string {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error('JWT_SECRET environment variable is required');
    }
    return secret;
  }

  // Utility methods
  async changePassword(userId: string, oldPassword: string, newPassword: string): Promise<void> {
    const user = await prisma.user.findUnique({
      where: { documentId: userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    const isOldPasswordValid = await bcrypt.compare(oldPassword, user.password);
    if (!isOldPasswordValid) {
      throw new Error('Current password is incorrect');
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, this.saltRounds);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedNewPassword,
        updatedAt: new Date(),
        updatedBy: user.id,
      },
    });

    // Logout from all other sessions
    await this.logoutAll(userId);
  }

  async requestPasswordReset(identifier: string): Promise<string> {
    const user = await this.findUserByIdentifier(identifier);
    if (!user) {
      // Don't reveal if user exists or not for security
      return 'If an account with this identifier exists, a password reset link will be sent.';
    }

    // Generate reset token (in real app, store this in database with expiry)
    const resetToken = jwt.sign(
      { userId: user.documentId, type: 'password_reset' },
      this.getJwtSecret(),
      { expiresIn: '15m' }
    );

    // TODO: Send email/SMS with reset token
    console.log(`Password reset token for ${user.email || user.phoneNumber}: ${resetToken}`);

    return 'If an account with this identifier exists, a password reset link will be sent.';
  }

  async resetPassword(resetToken: string, newPassword: string): Promise<void> {
    try {
      const decoded = jwt.verify(resetToken, this.getJwtSecret()) as {
        userId: string;
        type: string;
      };

      if (decoded.type !== 'password_reset') {
        throw new Error('Invalid reset token');
      }

      const hashedPassword = await bcrypt.hash(newPassword, this.saltRounds);

      await prisma.user.update({
        where: { documentId: decoded.userId },
        data: {
          password: hashedPassword,
          updatedAt: new Date(),
        },
      });

      // Logout from all sessions
      await this.logoutAll(decoded.userId);
    } catch {
      throw new Error('Invalid or expired reset token');
    }
  }
}

export const authService = new AuthService();