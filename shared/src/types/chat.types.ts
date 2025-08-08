export interface User {
  id: string;
  username: string;
  avatarUrl?: string;
}

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  content: string;
  createdAt: string;
}
