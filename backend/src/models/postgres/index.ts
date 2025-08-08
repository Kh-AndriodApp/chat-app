import { PrismaClient } from '@prisma-sys-client';

export const prisma = new PrismaClient();

export type {
  User,
  UserSession,
  UserDevice,
  UserRelationship,
  ChatRoom,
  ChatRoomMember,
  Attachment,
  UserStatus,
  DeviceType,
  ThemePreference,
  ChatRoomType,
  ChatRoomRole,
  RelationshipStatus,
  VirusScanStatus,
} from '@prisma-sys-client';

export async function connectPostgres(): Promise<void> {
  try {
    await prisma.$connect();
    console.log('Connected to PostgreSQL database');
  } catch (error) {
    console.error('Failed to connect to PostgreSQL database:', error);
    process.exit(1);
  }
}

export async function disconnectPostgres(): Promise<void> {
  await prisma.$disconnect();
  console.log('Disconnected from PostgreSQL database');
}

export async function healthCheckPostgres(): Promise<boolean> {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return true;
  } catch {
    return false;
  }
}