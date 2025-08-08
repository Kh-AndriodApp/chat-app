# Chat System Project Structure

## Root Directory
```
chat-system/
├── backend/
├── frontend/
├── mobile/
├── shared/
├── infrastructure/
├── docs/
├── scripts/
├── docker-compose.yml
├── .env.example
├── .gitignore
├── README.md
└── package.json (workspace config)
```

## Backend Structure (`/backend`)
```
backend/
├── src/
│   ├── config/
│   │   ├── database/
│   │   │   ├── postgres.js
│   │   │   ├── cassandra.js
│   │   │   └── redis.js
│   │   ├── rabbitmq.js
│   │   ├── socketio.js
│   │   ├── auth.js
│   │   └── index.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   │   ├── chat.controller.js
│   │   ├── message.controller.js
│   │   ├── notification.controller.js
│   │   └── file.controller.js
│   │
│   ├── models/
│   │   ├── postgres/
│   │   │   ├── User.js
│   │   │   ├── ChatRoom.js
│   │   │   ├── ChatMember.js
│   │   │   ├── Friendship.js
│   │   │   └── index.js
│   │   └── cassandra/
│   │       ├── Message.js
│   │       ├── MessageReaction.js
│   │       ├── UserPresence.js
│   │       └── index.js
│   │
│   ├── services/
│   │   ├── auth.service.js
│   │   ├── user.service.js
│   │   ├── chat.service.js
│   │   ├── message.service.js
│   │   ├── notification.service.js
│   │   ├── file.service.js
│   │   ├── presence.service.js
│   │   └── queue.service.js
│   │
│   ├── routes/
│   │   ├── api/
│   │   │   ├── v1/
│   │   │   │   ├── auth.routes.js
│   │   │   │   ├── user.routes.js
│   │   │   │   ├── chat.routes.js
│   │   │   │   ├── message.routes.js
│   │   │   │   ├── notification.routes.js
│   │   │   │   └── index.js
│   │   │   └── index.js
│   │   └── socket/
│   │       ├── auth.socket.js
│   │       ├── chat.socket.js
│   │       ├── message.socket.js
│   │       ├── presence.socket.js
│   │       └── index.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── validation.middleware.js
│   │   ├── ratelimit.middleware.js
│   │   ├── error.middleware.js
│   │   ├── cors.middleware.js
│   │   └── upload.middleware.js
│   │
│   ├── utils/
│   │   ├── validators/
│   │   │   ├── auth.validator.js
│   │   │   ├── user.validator.js
│   │   │   ├── chat.validator.js
│   │   │   └── message.validator.js
│   │   ├── helpers/
│   │   │   ├── encryption.js
│   │   │   ├── fileUpload.js
│   │   │   ├── notification.js
│   │   │   └── logger.js
│   │   ├── constants/
│   │   │   ├── errors.js
│   │   │   ├── events.js
│   │   │   └── status.js
│   │   └── types/
│   │       ├── auth.types.js
│   │       ├── chat.types.js
│   │       └── message.types.js
│   │
│   ├── workers/
│   │   ├── notification.worker.js
│   │   ├── message.worker.js
│   │   └── cleanup.worker.js
│   │
│   ├── jobs/
│   │   ├── sendNotification.job.js
│   │   ├── processMessage.job.js
│   │   └── updatePresence.job.js
│   │
│   ├── database/
│   │   ├── migrations/
│   │   │   ├── postgres/
│   │   │   │   ├── 001_create_users_table.sql
│   │   │   │   ├── 002_create_chat_rooms_table.sql
│   │   │   │   ├── 003_create_chat_members_table.sql
│   │   │   │   └── 004_create_friendships_table.sql
│   │   │   └── cassandra/
│   │   │       ├── 001_create_keyspace.cql
│   │   │       ├── 002_create_messages_table.cql
│   │   │       ├── 003_create_message_reactions_table.cql
│   │   │       └── 004_create_user_presence_table.cql
│   │   └── seeds/
│   │       ├── postgres/
│   │       │   └── initial_data.sql
│   │       └── cassandra/
│   │           └── initial_data.cql
│   │
│   ├── tests/
│   │   ├── unit/
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   │   └── utils/
│   │   ├── integration/
│   │   │   ├── auth.test.js
│   │   │   ├── chat.test.js
│   │   │   └── message.test.js
│   │   ├── fixtures/
│   │   └── setup.js
│   │
│   └── app.js
│
├── package.json
├── .env.example
├── .env.test
├── Dockerfile
└── README.md
```

## Frontend Structure (`/frontend`)
```
frontend/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── icons/
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Button.module.css
│   │   │   │   └── index.js
│   │   │   ├── Input/
│   │   │   ├── Modal/
│   │   │   ├── Avatar/
│   │   │   └── Loading/
│   │   │
│   │   ├── layout/
│   │   │   ├── Header/
│   │   │   ├── Sidebar/
│   │   │   ├── Navigation/
│   │   │   └── Layout/
│   │   │
│   │   ├── auth/
│   │   │   ├── LoginForm/
│   │   │   ├── RegisterForm/
│   │   │   └── ForgotPassword/
│   │   │
│   │   ├── chat/
│   │   │   ├── ChatList/
│   │   │   ├── ChatRoom/
│   │   │   ├── MessageInput/
│   │   │   ├── MessageBubble/
│   │   │   ├── TypingIndicator/
│   │   │   └── FileUpload/
│   │   │
│   │   ├── user/
│   │   │   ├── Profile/
│   │   │   ├── UserList/
│   │   │   ├── UserSearch/
│   │   │   └── Settings/
│   │   │
│   │   └── notification/
│   │       ├── NotificationList/
│   │       └── Toast/
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useSocket.js
│   │   ├── useChat.js
│   │   ├── useMessages.js
│   │   ├── usePresence.js
│   │   └── useNotifications.js
│   │
│   ├── services/
│   │   ├── api/
│   │   │   ├── auth.api.js
│   │   │   ├── user.api.js
│   │   │   ├── chat.api.js
│   │   │   ├── message.api.js
│   │   │   └── notification.api.js
│   │   ├── socket.service.js
│   │   ├── notification.service.js
│   │   └── storage.service.js
│   │
│   ├── store/
│   │   ├── slices/
│   │   │   ├── authSlice.js
│   │   │   ├── chatSlice.js
│   │   │   ├── messageSlice.js
│   │   │   ├── userSlice.js
│   │   │   └── notificationSlice.js
│   │   ├── middleware/
│   │   │   └── socketMiddleware.js
│   │   └── store.js
│   │
│   ├── pages/
│   │   ├── Login/
│   │   ├── Register/
│   │   ├── Dashboard/
│   │   ├── Chat/
│   │   ├── Profile/
│   │   └── Settings/
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css
│   │   ├── components/
│   │   └── pages/
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   ├── formatters.js
│   │   └── validators.js
│   │
│   ├── contexts/
│   │   ├── AuthContext.js
│   │   ├── SocketContext.js
│   │   └── ThemeContext.js
│   │
│   ├── App.js
│   └── index.js
│
├── package.json
├── Dockerfile
└── README.md
```

## Mobile Structure (`/mobile`)
```
mobile/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── auth/
│   │   ├── chat/
│   │   ├── user/
│   │   └── navigation/
│   │
│   ├── screens/
│   │   ├── Auth/
│   │   │   ├── LoginScreen.js
│   │   │   ├── RegisterScreen.js
│   │   │   └── ForgotPasswordScreen.js
│   │   ├── Chat/
│   │   │   ├── ChatListScreen.js
│   │   │   ├── ChatRoomScreen.js
│   │   │   └── CreateChatScreen.js
│   │   ├── Profile/
│   │   └── Settings/
│   │
│   ├── navigation/
│   │   ├── AppNavigator.js
│   │   ├── AuthNavigator.js
│   │   └── TabNavigator.js
│   │
│   ├── services/
│   │   ├── api/
│   │   ├── socket.service.js
│   │   ├── notification.service.js
│   │   └── storage.service.js
│   │
│   ├── store/
│   │   ├── slices/
│   │   └── store.js
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   └── permissions.js
│   │
│   └── styles/
│       ├── colors.js
│       ├── fonts.js
│       └── spacing.js
│
├── android/
├── ios/
├── package.json
└── README.md
```

## Shared Directory (`/shared`)
```
shared/
├── types/
│   ├── auth.types.js
│   ├── user.types.js
│   ├── chat.types.js
│   ├── message.types.js
│   └── notification.types.js
│
├── constants/
│   ├── errors.js
│   ├── events.js
│   ├── status.js
│   └── config.js
│
├── utils/
│   ├── validation.js
│   ├── formatters.js
│   └── helpers.js
│
└── package.json
```

## Infrastructure Directory (`/infrastructure`)
```
infrastructure/
├── docker/
│   ├── backend.Dockerfile
│   ├── frontend.Dockerfile
│   ├── postgres.Dockerfile
│   └── cassandra.Dockerfile
│
├── k8s/ (if using Kubernetes)
│   ├── deployments/
│   ├── services/
│   ├── configmaps/
│   └── secrets/
│
├── terraform/ (if using Terraform)
│   ├── modules/
│   ├── environments/
│   └── main.tf
│
└── monitoring/
    ├── prometheus/
    ├── grafana/
    └── elk/
```

## Key Features of This Structure:

### **Separation of Concerns**
- Clear separation between frontend, backend, and mobile
- Database models split by database type
- Shared code for common utilities and types

### **Scalability**
- Microservice-ready structure
- Separate workers for heavy operations
- Queue-based job processing

### **Testing**
- Dedicated test directories
- Unit and integration test separation
- Test fixtures and setup files

### **Configuration Management**
- Environment-specific configurations
- Database connection management
- Service configurations

### **Real-time Features**
- Socket.IO handlers organized by feature
- Real-time middleware
- Presence management

### **Development Experience**
- Hot reloading support
- Docker development environment
- Shared types and constants
- Consistent naming conventions

This structure provides a solid foundation that can scale from a small team to enterprise-level development while maintaining clean separation of concerns and code organization.