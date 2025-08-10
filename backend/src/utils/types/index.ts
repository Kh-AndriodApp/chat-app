import { MessageType, MessageDeliveryStatusType } from "@models/cassandra";
import type { UserStatus, ThemePreference, DeviceType, RelationshipStatus, ChatRoomType, ChatRoomRole, VirusScanStatus } from "@chat-app/enums";

// JSON Models for JSONB fields
export interface NotificationSettingsModel {
  pushEnabled: boolean;
  emailEnabled: boolean;
  soundEnabled: boolean;
  badgeEnabled: boolean;
  messagePreview: boolean;
  chatSpecific: Record<string, boolean>;
}

export interface PrivacySettingsModel {
  showOnlineStatus: boolean;
  showLastSeen: boolean;
  allowDirectMessages: boolean;
  showReadReceipts: boolean;
  whoCanAddToGroups: 'everyone' | 'contacts' | 'nobody';
  whoCanSeeProfile: 'everyone' | 'contacts' | 'nobody';
}

export interface ChatRoomPermissionsModel {
  canSendMessages: boolean;
  canUploadFiles: boolean;
  canInviteUsers: boolean;
  canKickUsers: boolean;
  canBanUsers: boolean;
  canEditRoomInfo: boolean;
  canDeleteMessages: boolean;
  canPinMessages: boolean;
}

export interface DeviceInfoModel {
  deviceName?: string;
  deviceModel?: string;
  osName?: string;
  osVersion?: string;
  appVersion?: string;
  browser?: string;
  browserVersion?: string;
}

export interface FileMetadataModel {
  width?: number;
  height?: number;
  duration?: number;
  bitrate?: number;
  codec?: string;
  resolution?: string;
  fps?: number;
  channels?: number;
  sampleRate?: number;
  location?: {
    latitude: number;
    longitude: number;
    altitude?: number;
  };
  exif?: Record<string, any>;
}

export interface VirusScanResultModel {
  scanEngine: string;
  scanResult: string;
  threatName?: string;
  scanDate: Date;
  scanDuration: number;
}

// Base entity interfaces
export interface BaseEntity {
  documentId: string;
  createdBy: number;
  updatedBy: number;
  deletedBy: number;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface BaseEntityWithIntId extends BaseEntity {
  id: number;
}

export interface BaseEntityWithLongId extends BaseEntity {
  id: bigint;
}

// PostgreSQL Entity Interfaces
export interface User extends BaseEntityWithIntId {
  name: string;
  email: string;
  username: string;
  password: string;
  profilePictureUrl?: string;
  bio?: string;
  phoneNumber: string;
  lastActivityDate: Date;
  status: UserStatus;
  isActive: boolean;
  isVerified: boolean;
  themePreference: ThemePreference;
  notificationSettings: NotificationSettingsModel;
  privacySettings: PrivacySettingsModel;
}

export interface UserSession extends BaseEntityWithIntId {
  userId: string;
  sessionToken: string;
  refreshToken: string;
  deviceInfo?: DeviceInfoModel;
  ipAddress?: string;
  userAgent?: string;
  isActive: boolean;
  expiresAt: Date;
  lastActivityAt: Date;
}

export interface UserDevice extends BaseEntityWithIntId {
  userId: string;
  deviceToken: string;
  deviceType: DeviceType;
  deviceName?: string;
  appVersion?: string;
  osVersion?: string;
  isActive: boolean;
  lastUsedAt: Date;
}

export interface UserRelationship extends BaseEntityWithIntId {
  requesterId: string;
  addresseeId: string;
  status: RelationshipStatus;
}

export interface ChatRoom extends BaseEntityWithLongId {
  name: string;
  type: ChatRoomType;
  description?: string;
  lastMessageDate: Date;
}

export interface ChatRoomMember extends BaseEntityWithLongId {
  chatRoomId: string;
  userId: string;
  isMuted: boolean;
  isArchived: boolean;
  isBanned: boolean;
  lastReadMessageId: string;
  role: ChatRoomRole;
  leftAt?: Date;
  unreadMessagesCount: number;
  permissions: ChatRoomPermissionsModel;
}

export interface Attachment extends BaseEntityWithIntId {
  originalName: string;
  fileName: string;
  mimeType: string;
  fileSize: bigint;
  filePath: string;
  thumbnailPath?: string;
  uploadedBy: string;
  isPublic: boolean;
  metadata: FileMetadataModel;
  virusScanStatus: VirusScanStatus;
  virusScanResult?: VirusScanResultModel;
  expiresAt?: Date;
}

// Cassandra Entity Interfaces
export interface Message extends BaseEntityWithLongId {
  chatRoomId: bigint;
  chatRoomDocumentId: string;
  senderId: string;
  content: string;
  messageType: MessageType;
  replyToMessageId?: bigint;
  threadId?: bigint;
  reactionSummary: Record<string, number>;
  metadata: Record<string, string>;
  isEdited: boolean;
  attachmentIds: string[];
}

export interface MessageReaction {
  id: bigint;
  messageId: bigint;
  chatRoomId: bigint;
  reactionType: string;
  userId: number;
  userDocumentId: string;
  createdAt: Date;
}

export interface MessageDeliveryStatus {
  id: bigint;
  messageId: bigint;
  userId: number;
  userDocumentId: string;
  chatRoomId: bigint;
  chatRoomDocumentId: string;
  status: MessageDeliveryStatusType;
  timestamp: Date;
}

export interface MessageThread {
  id: bigint;
  chatRoomId: bigint;
  chatRoomDocumentId: string;
  parentMessageId?: bigint;
  createdBy: bigint;
  createdByDocumentId: string;
  title: string;
  lastMessageId: bigint;
  lastActivity: Date;
  messageCount: number;
  isArchived: boolean;
  createdAt: Date;
}

export interface UserPresence {
  userId: string;
  status: UserStatus;
  lastSeen: Date;
  deviceType?: string;
  deviceId?: string;
  isTyping: boolean;
  typingInChatRoom?: string;
  customStatus?: string;
  updatedAt: Date;
}

export interface TypingIndicator {
  chatRoomId: string;
  userId: string;
  startedAt: Date;
}

// API Request/Response Types
export interface CreateUserRequest {
  name: string;
  email: string;
  username: string;
  password: string;
  phoneNumber: string;
}

export interface LoginRequest {
  email: string;
  password: string;
  deviceInfo?: DeviceInfoModel;
}

export interface CreateChatRoomRequest {
  name: string;
  type: ChatRoomType;
  description?: string;
  memberIds: string[];
}

export interface SendMessageRequest {
  chatRoomId: string;
  content: string;
  messageType: MessageType;
  replyToMessageId?: string;
  threadId?: string;
  attachmentIds?: string[];
  metadata?: Record<string, string>;
}

export interface MessageResponse {
  id: string;
  documentId: string;
  chatRoomId: string;
  sender: {
    id: string;
    username: string;
    profilePictureUrl?: string;
  };
  content: string;
  messageType: MessageType;
  replyToMessageId?: string;
  threadId?: string;
  reactions: Record<string, number>;
  attachments: Attachment[];
  isEdited: boolean;
  createdAt: Date;
  updatedAt?: Date;
}

// Socket Event Types
export interface SocketEvents {
  // User events
  'user:online': { userId: string; status: UserStatus };
  'user:typing': { chatRoomId: string; userId: string; isTyping: boolean };
  
  // Message events  
  'message:new': MessageResponse;
  'message:edit': MessageResponse;
  'message:delete': { messageId: string; chatRoomId: string };
  'message:reaction': { messageId: string; reaction: string; userId: string; add: boolean };
  
  // Chat room events
  'chatroom:member_joined': { chatRoomId: string; member: ChatRoomMember };
  'chatroom:member_left': { chatRoomId: string; userId: string };
  'chatroom:updated': { chatRoomId: string; changes: Partial<ChatRoom> };
  
  // Delivery status events
  'message:delivered': { messageId: string; userId: string };
  'message:read': { messageId: string; userId: string };
}

export type SocketEventName = keyof SocketEvents;
export type SocketEventData<T extends SocketEventName> = SocketEvents[T];