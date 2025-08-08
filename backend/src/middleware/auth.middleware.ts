import { FastifyRequest, FastifyReply } from 'fastify';
import { authService } from '../services/auth.service';
import { User } from '../models/postgres';

// Extend FastifyRequest to include user property
declare module 'fastify' {
  interface FastifyRequest {
    user?: Omit<User, 'password'>;
    deviceInfo?: any;
  }
}

export interface AuthenticatedRequest extends FastifyRequest {
  user: Omit<User, 'password'>;
}

// Authentication middleware for protected routes
export async function authenticateToken(request: FastifyRequest, reply: FastifyReply) {
  try {
    const authHeader = request.headers.authorization;
    
    if (!authHeader) {
      return reply.status(401).send({
        success: false,
        message: 'Authorization header is required',
      });
    }

    // Check if the header follows Bearer token format
    if (!authHeader.startsWith('Bearer ')) {
      return reply.status(401).send({
        success: false,
        message: 'Authorization header must be in Bearer token format',
      });
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    
    if (!token) {
      return reply.status(401).send({
        success: false,
        message: 'Access token is required',
      });
    }

    // Verify the token and get user information
    const user = await authService.verifyToken(token);
    
    if (!user) {
      return reply.status(401).send({
        success: false,
        message: 'Invalid or expired access token',
      });
    }

    // Check if user is active
    if (!user.isActive) {
      return reply.status(403).send({
        success: false,
        message: 'Account is deactivated',
      });
    }

    // Attach user to request object
    request.user = user;
  } catch (error) {
    return reply.status(401).send({
      success: false,
      message: 'Token verification failed',
    });
  }
}

// Optional authentication middleware (doesn't throw error if no token)
export async function optionalAuthentication(request: FastifyRequest, reply: FastifyReply) {
  try {
    const authHeader = request.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      // No token provided, continue without authentication
      return;
    }

    const token = authHeader.substring(7);
    
    if (token) {
      const user = await authService.verifyToken(token);
      
      if (user && user.isActive) {
        request.user = user;
      }
    }
  } catch {
    // Silently ignore authentication errors for optional auth
  }
}

// Middleware to check if user has specific permissions
export function requirePermission(permission: string) {
  return async function (request: FastifyRequest, reply: FastifyReply) {
    if (!request.user) {
      return reply.status(401).send({
        success: false,
        message: 'Authentication required',
      });
    }

    // Basic permission check (can be extended based on your permission system)
    const userPermissions = request.user.permissions || [];
    
    if (!userPermissions.includes(permission)) {
      return reply.status(403).send({
        success: false,
        message: `Permission denied. Required permission: ${permission}`,
      });
    }
  };
}

// Middleware to check if user is verified
export async function requireVerification(request: FastifyRequest, reply: FastifyReply) {
  if (!request.user) {
    return reply.status(401).send({
      success: false,
      message: 'Authentication required',
    });
  }

  if (!request.user.isVerified) {
    return reply.status(403).send({
      success: false,
      message: 'Email/phone verification required',
    });
  }
}

// Middleware to check if user is admin
export async function requireAdmin(request: FastifyRequest, reply: FastifyReply) {
  if (!request.user) {
    return reply.status(401).send({
      success: false,
      message: 'Authentication required',
    });
  }

  // Check if user has admin role (you can customize this logic)
  const isAdmin = request.user.email === 'admin@example.com' || 
                 request.user.username === 'admin' ||
                 (request.user.roles && request.user.roles.includes('admin'));

  if (!isAdmin) {
    return reply.status(403).send({
      success: false,
      message: 'Admin access required',
    });
  }
}

// Rate limiting middleware for authentication endpoints
export function authRateLimit(maxAttempts: number = 5, windowMs: number = 15 * 60 * 1000) {
  const attempts = new Map<string, { count: number; resetTime: number }>();

  return async function (request: FastifyRequest, reply: FastifyReply) {
    const clientId = request.ip || 'unknown';
    const now = Date.now();
    
    // Clean up expired entries
    for (const [key, value] of attempts.entries()) {
      if (now > value.resetTime) {
        attempts.delete(key);
      }
    }

    // Check current attempts for this client
    const clientAttempts = attempts.get(clientId);
    
    if (clientAttempts) {
      if (clientAttempts.count >= maxAttempts) {
        const remainingTime = Math.ceil((clientAttempts.resetTime - now) / 1000);
        return reply.status(429).send({
          success: false,
          message: `Too many authentication attempts. Try again in ${remainingTime} seconds.`,
          retryAfter: remainingTime,
        });
      }
      
      clientAttempts.count++;
    } else {
      attempts.set(clientId, {
        count: 1,
        resetTime: now + windowMs,
      });
    }
  };
}

// Middleware to extract and validate device information
export async function deviceInfo(request: FastifyRequest, reply: FastifyReply) {
  const userAgent = request.headers['user-agent'];
  const deviceHeader = request.headers['x-device-info'];
  
  let deviceInfo: any = {};
  
  if (deviceHeader && typeof deviceHeader === 'string') {
    try {
      deviceInfo = JSON.parse(deviceHeader);
    } catch {
      // Ignore invalid device info JSON
    }
  }

  // Add user agent and IP to device info
  deviceInfo.userAgent = userAgent;
  deviceInfo.ipAddress = request.ip;

  // Attach device info to request
  request.deviceInfo = deviceInfo;
}