import { types } from 'cassandra-driver';

export enum UserStatus {
  OFFLINE = 0,
  ONLINE = 1,
  BUSY = 2,
  AWAY = 3,
  DO_NOT_DISTURB = 4,
}

export interface UserPresenceModel {
  userId: types.Uuid;
  status: UserStatus;
  lastSeen: Date;
  deviceType?: string;
  deviceId?: string;
  isTyping: boolean;
  typingInChatRoom?: types.Uuid;
  customStatus?: string;
  updatedAt: Date;
}

export const UserPresenceTable = {
  name: 'user_presence',
  columns: [
    'user_id',
    'status',
    'last_seen',
    'device_type',
    'device_id',
    'is_typing',
    'typing_in_chat_room',
    'custom_status',
    'updated_at',
  ] as const,
  primaryKey: ['user_id'],
  partitionKey: ['user_id'],
};

export const createUserPresenceTableCQL = `
CREATE TABLE IF NOT EXISTS ${UserPresenceTable.name} (
  user_id uuid,
  status int,
  last_seen timestamp,
  device_type text,
  device_id text,
  is_typing boolean,
  typing_in_chat_room uuid,
  custom_status text,
  updated_at timestamp,
  PRIMARY KEY (user_id)
);
`;

// TTL table for temporary typing indicators
export const TypingIndicatorTable = {
  name: 'typing_indicators',
  columns: [
    'chat_room_id',
    'user_id',
    'started_at',
  ] as const,
  primaryKey: ['chat_room_id', 'user_id'],
  partitionKey: ['chat_room_id'],
  clusteringKey: ['user_id'],
};

export const createTypingIndicatorTableCQL = `
CREATE TABLE IF NOT EXISTS ${TypingIndicatorTable.name} (
  chat_room_id uuid,
  user_id uuid,
  started_at timestamp,
  PRIMARY KEY (chat_room_id, user_id)
) WITH default_time_to_live = 10;
`;