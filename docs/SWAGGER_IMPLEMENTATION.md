# Swagger API Documentation Implementation

This document describes the Swagger/OpenAPI implementation for the Chat App backend using `@fastify/swagger` and `@fastify/swagger-ui`.

## Overview

The Swagger documentation is now available at: **http://localhost:5000/docs**

## Implementation Details

### 1. Installed Packages
- `@fastify/swagger`: Generates OpenAPI specification from route schemas
- `@fastify/swagger-ui`: Provides the Swagger UI interface

### 2. Configuration

The Swagger setup is configured in `src/app.ts`:

```typescript
// Register Swagger
await fastify.register(swagger, {
  swagger: {
    info: {
      title: 'Chat App API',
      description: 'API documentation for the Chat Application',
      version: '0.1.0',
    },
    host: 'localhost:5000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
      bearerAuth: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
        description: 'Enter your bearer token in the format: Bearer {your-token}'
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  }
})

// Register Swagger UI
await fastify.register(swaggerUi, {
  routePrefix: '/docs'
})
```

### 3. Route Schemas

#### Health Check Route
- **GET /health**: Simple health check endpoint for monitoring

#### Authentication Routes
- **POST /auth/register**: User registration
- **POST /auth/login**: User login (email/phone/username)
- **POST /auth/refresh**: Refresh access token
- **GET /auth/me**: Get current user information (protected)

### 4. Schema Structure

All route schemas follow this structure:
- `summary`: Brief description of the endpoint
- `description`: Detailed description
- `tags`: Categorization for grouping in Swagger UI
- `body`: Request body schema (for POST/PUT requests)
- `response`: Response schemas for different status codes
- `security`: Authentication requirements (for protected routes)

### 5. Authentication

Protected routes use Bearer token authentication:
- Header: `Authorization: Bearer <your-jwt-token>`
- Security scheme: `bearerAuth`

## Available Endpoints

### Public Endpoints
1. `GET /health` - Health check
2. `POST /auth/register` - User registration
3. `POST /auth/login` - User authentication
4. `POST /auth/refresh` - Token refresh

### Protected Endpoints (Require Authentication)
1. `GET /auth/me` - Get current user profile

## Usage

1. **Start the server**: `npm run dev`
2. **Access Swagger UI**: http://localhost:5000/docs
3. **View API specification**: http://localhost:5000/documentation/json

## Authentication in Swagger UI

To test protected endpoints:
1. Use the `/auth/login` endpoint to get an access token
2. Click the "Authorize" button in Swagger UI
3. Enter: `Bearer <your-access-token>`
4. Now you can test protected endpoints

## Future Enhancements

### Planned Routes to Add:
- Password reset endpoints
- User profile management
- User settings management
- Logout endpoints
- Chat-related endpoints
- File upload endpoints

### Schema Improvements:
- Add more detailed response examples
- Include error response schemas
- Add request/response examples for better documentation
- Implement OpenAPI 3.0 format for better features

## Development Notes

- Schemas are defined using JSON Schema format for better Fastify compatibility
- Complex Zod validations were simplified to work with Swagger generation
- Authentication middleware is properly documented in schemas
- Error responses follow consistent format across all endpoints

## Troubleshooting

If you encounter schema validation errors:
1. Ensure all required properties are defined in schemas
2. Check that response schemas match actual controller responses
3. Verify that authentication middleware is properly configured
4. Use simple JSON Schema format instead of complex Zod validations for Swagger compatibility
