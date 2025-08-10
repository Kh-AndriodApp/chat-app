import { types } from 'cassandra-driver';

export interface MessageReactionModel {
  id: types.Long;
  messageId: types.Long;
  chatRoomId: types.Long;
  reactionType: string; // emoji or reaction identifier
  userId: number;
  userDocumentId: types.Uuid;
  createdAt: Date;
}

export const MessageReactionTable = {
  name: 'message_reactions',
  columns: [
    'id',
    'message_id',
    'chat_room_id',
    'reaction_type',
    'user_id',
    'user_document_id',
    'created_at',
  ] as const,
  primaryKey: ['message_id', 'user_id', 'reaction_type'],
  partitionKey: ['message_id'],
  clusteringKey: ['user_id', 'reaction_type'],
};

export const createMessageReactionTableCQL = `
CREATE TABLE IF NOT EXISTS ${MessageReactionTable.name} (
  id bigint,
  message_id bigint,
  chat_room_id bigint,
  reaction_type text,
  user_id int,
  user_document_id uuid,
  created_at timestamp,
  PRIMARY KEY (message_id, user_id, reaction_type)
);
`;

// Secondary index for querying reactions by chat room
export const createMessageReactionByChatRoomIndexCQL = `
CREATE INDEX IF NOT EXISTS message_reactions_by_chat_room 
ON ${MessageReactionTable.name} (chat_room_id);
`;