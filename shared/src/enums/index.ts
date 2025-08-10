export enum UserStatus {
  OFFLINE = 0,
  ONLINE = 1,
  BUSY = 2,
  AWAY = 3,
  DO_NOT_DISTURB = 4,
}

export enum DeviceType {
  IOS = 1,
  ANDROID = 2,
  WEB = 3,
  DESKTOP = 4,
}

export enum ThemePreference {
  LIGHT = 1,
  DARK = 2,
  SYSTEM_DEFAULT = 3,
}

export enum ChatRoomType {
  PRIVATE = 1,
  GROUP = 2,
  CHANNEL = 3,
  PUBLIC = 4,
  DIRECT_MESSAGE = 5,
  ANNOUNCEMENT = 6,
}

export enum ChatRoomRole {
  USER = 1,
  MODERATOR = 2,
  ADMIN = 3,
  SUPER_ADMIN = 4,
  GUEST = 5,
}

export enum RelationshipStatus {
  PENDING = 1,
  ACCEPTED = 2,
  REJECTED = 3,
  BLOCKED = 4,
}

export enum VirusScanStatus {
  PENDING = 1,
  CLEAN = 2,
  INFECTED = 3,
  ERROR = 4,
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