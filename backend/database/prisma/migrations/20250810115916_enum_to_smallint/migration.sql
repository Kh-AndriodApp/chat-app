/*
  Warnings:

  - The `virusScanStatus` column on the `attachments` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `role` column on the `chat_room_members` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `user_relationships` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `themePreference` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `type` on the `chat_rooms` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `deviceType` on the `user_devices` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."attachments" DROP COLUMN "virusScanStatus",
ADD COLUMN     "virusScanStatus" SMALLINT NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "public"."chat_room_members" ALTER COLUMN "lastReadMessageId" SET DEFAULT '00000000-0000-0000-0000-000000000000',
DROP COLUMN "role",
ADD COLUMN     "role" SMALLINT NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "public"."chat_rooms" DROP COLUMN "type",
ADD COLUMN     "type" SMALLINT NOT NULL;

-- AlterTable
ALTER TABLE "public"."user_devices" DROP COLUMN "deviceType",
ADD COLUMN     "deviceType" SMALLINT NOT NULL;

-- AlterTable
ALTER TABLE "public"."user_relationships" DROP COLUMN "status",
ADD COLUMN     "status" SMALLINT NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "public"."users" ALTER COLUMN "phoneNumber" SET DATA TYPE VARCHAR(20),
DROP COLUMN "status",
ADD COLUMN     "status" SMALLINT NOT NULL DEFAULT 1,
DROP COLUMN "themePreference",
ADD COLUMN     "themePreference" SMALLINT NOT NULL DEFAULT 1;
