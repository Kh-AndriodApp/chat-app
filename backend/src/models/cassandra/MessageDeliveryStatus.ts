import { types } from 'cassandra-driver';

export enum MessageDeliveryStatusType {
  SENT = 1,      // Message is sent but not yet delivered
  DELIVERED = 2, // Message has been delivered to the recipient's device
  READ = 3,      // Message has been read by the recipient
  FAILED = 4,    // Message delivery failed
  CANCELLED = 5  // Message delivery was cancelled by the sender
}

export interface MessageDeliveryStatusModel {
  id: types.Long;
  messageId: types.Long;
  userId: number;
  userDocumentId: types.Uuid;
  chatRoomId: types.Long;
  chatRoomDocumentId: types.Uuid;
  status: MessageDeliveryStatusType;
  timestamp: Date;
}

export const MessageDeliveryStatusTable = {
  name: 'message_delivery_status',
  columns: [
    'id',
    'message_id',
    'user_id',
    'user_document_id',
    'chat_room_id',
    'chat_room_document_id',
    'status',
    'timestamp',
  ] as const,
  primaryKey: ['message_id', 'user_id'],
  partitionKey: ['message_id'],
  clusteringKey: ['user_id'],
};

export const createMessageDeliveryStatusTableCQL = `
CREATE TABLE IF NOT EXISTS ${MessageDeliveryStatusTable.name} (
  id bigint,
  message_id bigint,
  user_id int,
  user_document_id uuid,
  chat_room_id bigint,
  chat_room_document_id uuid,
  status int,
  timestamp timestamp,
  PRIMARY KEY (message_id, user_id)
);
`;

// Secondary index for querying delivery status by chat room
export const createMessageDeliveryStatusByChatRoomIndexCQL = `
CREATE INDEX IF NOT EXISTS message_delivery_status_by_chat_room 
ON ${MessageDeliveryStatusTable.name} (chat_room_id);
`;

// Secondary index for querying delivery status by user
export const createMessageDeliveryStatusByUserIndexCQL = `
CREATE INDEX IF NOT EXISTS message_delivery_status_by_user 
ON ${MessageDeliveryStatusTable.name} (user_document_id);
`;