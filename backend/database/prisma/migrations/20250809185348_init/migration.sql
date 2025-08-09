-- CreateEnum
CREATE TYPE "public"."UserStatus" AS ENUM ('OFFLINE', 'ONLINE', 'BUSY', 'AWAY', 'DO_NOT_DISTURB');

-- CreateEnum
CREATE TYPE "public"."DeviceType" AS ENUM ('IOS', 'ANDROID', 'WEB', 'DESKTOP');

-- CreateEnum
CREATE TYPE "public"."ThemePreference" AS ENUM ('LIGHT', 'DARK', 'SYSTEM_DEFAULT');

-- CreateEnum
CREATE TYPE "public"."ChatRoomType" AS ENUM ('PRIVATE', 'GROUP', 'CHANNEL', 'PUBLIC', 'DIRECT_MESSAGE', 'ANNOUNCEMENT');

-- CreateEnum
CREATE TYPE "public"."ChatRoomRole" AS ENUM ('USER', 'MODERATOR', 'ADMIN', 'SUPER_ADMIN', 'GUEST');

-- CreateEnum
CREATE TYPE "public"."RelationshipStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED', 'BLOCKED');

-- CreateEnum
CREATE TYPE "public"."VirusScanStatus" AS ENUM ('PENDING', 'CLEAN', 'INFECTED', 'ERROR');

-- CreateTable
CREATE TABLE "public"."users" (
    "id" SERIAL NOT NULL,
    "documentId" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255),
    "username" VARCHAR(50) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "profilePictureUrl" VARCHAR(200),
    "bio" VARCHAR(500),
    "phoneNumber" VARCHAR(15),
    "lastActivityDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "public"."UserStatus" NOT NULL DEFAULT 'ONLINE',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "themePreference" "public"."ThemePreference" NOT NULL DEFAULT 'LIGHT',
    "notificationSettings" JSONB NOT NULL DEFAULT '{}',
    "privacySettings" JSONB NOT NULL DEFAULT '{}',
    "createdBy" INTEGER NOT NULL,
    "updatedBy" INTEGER NOT NULL,
    "deletedBy" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_sessions" (
    "id" SERIAL NOT NULL,
    "documentId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "sessionToken" VARCHAR(255) NOT NULL,
    "refreshToken" VARCHAR(255) NOT NULL,
    "deviceInfo" JSONB,
    "ipAddress" INET,
    "userAgent" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "lastActivityAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" INTEGER NOT NULL,
    "updatedBy" INTEGER NOT NULL,
    "deletedBy" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "user_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_devices" (
    "id" SERIAL NOT NULL,
    "documentId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "deviceToken" VARCHAR(500) NOT NULL,
    "deviceType" "public"."DeviceType" NOT NULL,
    "deviceName" VARCHAR(100),
    "appVersion" VARCHAR(20),
    "osVersion" VARCHAR(50),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastUsedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" INTEGER NOT NULL,
    "updatedBy" INTEGER NOT NULL,
    "deletedBy" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "user_devices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_relationships" (
    "id" SERIAL NOT NULL,
    "documentId" UUID NOT NULL,
    "requesterId" UUID NOT NULL,
    "addresseeId" UUID NOT NULL,
    "status" "public"."RelationshipStatus" NOT NULL DEFAULT 'PENDING',
    "createdBy" INTEGER NOT NULL,
    "updatedBy" INTEGER NOT NULL,
    "deletedBy" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "user_relationships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."chat_rooms" (
    "id" BIGSERIAL NOT NULL,
    "documentId" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "type" "public"."ChatRoomType" NOT NULL,
    "description" VARCHAR(500),
    "lastMessageDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" INTEGER NOT NULL,
    "updatedBy" INTEGER NOT NULL,
    "deletedBy" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "chat_rooms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."chat_room_members" (
    "id" BIGSERIAL NOT NULL,
    "documentId" UUID NOT NULL,
    "chatRoomId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "isMuted" BOOLEAN NOT NULL DEFAULT false,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "isBanned" BOOLEAN NOT NULL DEFAULT false,
    "lastReadMessageId" UUID NOT NULL DEFAULT '00000000-0000-0000-0000-000000000000',
    "role" "public"."ChatRoomRole" NOT NULL DEFAULT 'USER',
    "leftAt" TIMESTAMP(3),
    "unreadMessagesCount" INTEGER NOT NULL DEFAULT 0,
    "permissions" JSONB NOT NULL DEFAULT '{}',
    "createdBy" INTEGER NOT NULL,
    "updatedBy" INTEGER NOT NULL,
    "deletedBy" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "chat_room_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."attachments" (
    "id" SERIAL NOT NULL,
    "documentId" UUID NOT NULL,
    "originalName" VARCHAR(255) NOT NULL,
    "fileName" VARCHAR(255) NOT NULL,
    "mimeType" VARCHAR(100) NOT NULL,
    "fileSize" BIGINT NOT NULL,
    "filePath" TEXT NOT NULL,
    "thumbnailPath" TEXT,
    "uploadedBy" UUID NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "metadata" JSONB NOT NULL DEFAULT '{}',
    "virusScanStatus" "public"."VirusScanStatus" NOT NULL DEFAULT 'PENDING',
    "virusScanResult" JSONB,
    "expiresAt" TIMESTAMP(3),
    "createdBy" INTEGER NOT NULL,
    "updatedBy" INTEGER NOT NULL,
    "deletedBy" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "attachments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_documentId_key" ON "public"."users"("documentId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "public"."users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_sessions_documentId_key" ON "public"."user_sessions"("documentId");

-- CreateIndex
CREATE UNIQUE INDEX "user_devices_documentId_key" ON "public"."user_devices"("documentId");

-- CreateIndex
CREATE UNIQUE INDEX "user_relationships_documentId_key" ON "public"."user_relationships"("documentId");

-- CreateIndex
CREATE UNIQUE INDEX "user_relationships_requesterId_addresseeId_key" ON "public"."user_relationships"("requesterId", "addresseeId");

-- CreateIndex
CREATE UNIQUE INDEX "chat_rooms_documentId_key" ON "public"."chat_rooms"("documentId");

-- CreateIndex
CREATE UNIQUE INDEX "chat_room_members_documentId_key" ON "public"."chat_room_members"("documentId");

-- CreateIndex
CREATE UNIQUE INDEX "chat_room_members_chatRoomId_userId_key" ON "public"."chat_room_members"("chatRoomId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "attachments_documentId_key" ON "public"."attachments"("documentId");

-- AddForeignKey
ALTER TABLE "public"."user_sessions" ADD CONSTRAINT "user_sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("documentId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_devices" ADD CONSTRAINT "user_devices_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("documentId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_relationships" ADD CONSTRAINT "user_relationships_requesterId_fkey" FOREIGN KEY ("requesterId") REFERENCES "public"."users"("documentId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_relationships" ADD CONSTRAINT "user_relationships_addresseeId_fkey" FOREIGN KEY ("addresseeId") REFERENCES "public"."users"("documentId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."chat_rooms" ADD CONSTRAINT "chat_rooms_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."chat_room_members" ADD CONSTRAINT "chat_room_members_chatRoomId_fkey" FOREIGN KEY ("chatRoomId") REFERENCES "public"."chat_rooms"("documentId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."chat_room_members" ADD CONSTRAINT "chat_room_members_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("documentId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."attachments" ADD CONSTRAINT "attachments_uploadedBy_fkey" FOREIGN KEY ("uploadedBy") REFERENCES "public"."users"("documentId") ON DELETE CASCADE ON UPDATE CASCADE;
