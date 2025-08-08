export * from './Message';
export * from './MessageReaction';
export * from './MessageDeliveryStatus';
export * from './MessageThread';
export * from './UserPresence';

// Export all CQL creation statements for migrations
import { createMessageTableCQL } from './Message';
import { 
  createMessageReactionTableCQL, 
  createMessageReactionByChatRoomIndexCQL 
} from './MessageReaction';
import { 
  createMessageDeliveryStatusTableCQL,
  createMessageDeliveryStatusByChatRoomIndexCQL,
  createMessageDeliveryStatusByUserIndexCQL
} from './MessageDeliveryStatus';
import { 
  createMessageThreadTableCQL,
  createMessageThreadByParentMessageIndexCQL,
  createMessageThreadByCreatorIndexCQL
} from './MessageThread';
import { 
  createUserPresenceTableCQL,
  createTypingIndicatorTableCQL
} from './UserPresence';

export const allCassandraMigrations = [
  createMessageTableCQL,
  createMessageReactionTableCQL,
  createMessageReactionByChatRoomIndexCQL,
  createMessageDeliveryStatusTableCQL,
  createMessageDeliveryStatusByChatRoomIndexCQL,
  createMessageDeliveryStatusByUserIndexCQL,
  createMessageThreadTableCQL,
  createMessageThreadByParentMessageIndexCQL,
  createMessageThreadByCreatorIndexCQL,
  createUserPresenceTableCQL,
  createTypingIndicatorTableCQL,
];

export const createKeyspaceCQL = `
CREATE KEYSPACE IF NOT EXISTS chat_messages
WITH REPLICATION = {
  'class': 'SimpleStrategy',
  'replication_factor': 3
};
`;