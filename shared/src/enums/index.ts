export enum UserStatus {
  OFFLINE = 'OFFLINE',
  ONLINE = 'ONLINE', 
  BUSY = 'BUSY',
  AWAY = 'AWAY',
  DO_NOT_DISTURB = 'DO_NOT_DISTURB',
}

export enum DeviceType {
  IOS = 'IOS',
  ANDROID = 'ANDROID',
  WEB = 'WEB',
  DESKTOP = 'DESKTOP',
}

export enum ThemePreference {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
  SYSTEM_DEFAULT = 'SYSTEM_DEFAULT',
}

export enum ChatRoomType {
  PRIVATE = 'PRIVATE',
  GROUP = 'GROUP',
  CHANNEL = 'CHANNEL',
  PUBLIC = 'PUBLIC',
  DIRECT_MESSAGE = 'DIRECT_MESSAGE',
  ANNOUNCEMENT = 'ANNOUNCEMENT',
}

export enum ChatRoomRole {
  USER = 'USER',
  MODERATOR = 'MODERATOR',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
  GUEST = 'GUEST',
}

export enum RelationshipStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  BLOCKED = 'BLOCKED',
}

export enum VirusScanStatus {
  PENDING = 'PENDING',
  CLEAN = 'CLEAN',
  INFECTED = 'INFECTED',
  ERROR = 'ERROR',
}

export enum MessageType {
  TEXT = 1,
  IMAGE = 2,
  VIDEO = 3,
  AUDIO = 4,
  FILE = 5,
  LOCATION = 6,
  SYSTEM = 7,
}

export enum MessageDeliveryStatusType {
  SENT = 1,
  DELIVERED = 2,
  READ = 3,
  FAILED = 4,
  CANCELLED = 5,
}