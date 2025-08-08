import { types } from 'cassandra-driver';

export interface MessageThreadModel {
  id: types.Long;
  chatRoomId: types.Long;
  chatRoomDocumentId: types.Uuid;
  parentMessageId?: types.Long;
  createdBy: types.Long;
  createdByDocumentId: types.Uuid;
  title: string;
  lastMessageId: types.Long;
  lastActivity: Date;
  messageCount: number;
  isArchived: boolean;
  createdAt: Date;
}

export const MessageThreadTable = {
  name: 'message_threads',
  columns: [
    'id',
    'chat_room_id',
    'chat_room_document_id',
    'parent_message_id',
    'created_by',
    'created_by_document_id',
    'title',
    'last_message_id',
    'last_activity',
    'message_count',
    'is_archived',
    'created_at',
  ] as const,
  primaryKey: ['chat_room_id', 'id'],
  partitionKey: ['chat_room_id'],
  clusteringKey: ['id'],
  clusteringOrder: 'DESC',
};

export const createMessageThreadTableCQL = `
CREATE TABLE IF NOT EXISTS ${MessageThreadTable.name} (
  id bigint,
  chat_room_id bigint,
  chat_room_document_id uuid,
  parent_message_id bigint,
  created_by bigint,
  created_by_document_id uuid,
  title text,
  last_message_id bigint,
  last_activity timestamp,
  message_count int,
  is_archived boolean,
  created_at timestamp,
  PRIMARY KEY (chat_room_id, id)
) WITH CLUSTERING ORDER BY (id DESC);
`;

// Secondary index for querying threads by parent message
export const createMessageThreadByParentMessageIndexCQL = `
CREATE INDEX IF NOT EXISTS message_threads_by_parent_message 
ON ${MessageThreadTable.name} (parent_message_id);
`;

// Secondary index for querying threads by creator
export const createMessageThreadByCreatorIndexCQL = `
CREATE INDEX IF NOT EXISTS message_threads_by_creator 
ON ${MessageThreadTable.name} (created_by_document_id);
`;