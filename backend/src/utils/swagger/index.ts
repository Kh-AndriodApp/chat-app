import { FastifyInstance } from "fastify"
import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'
import { jsonSchemaTransform } from 'fastify-type-provider-zod'

export default async function registerSwagger(fastify: FastifyInstance) {
  await fastify.register(swagger, {
    openapi: {
      openapi: '3.0.0',
      info: {
        title: 'Chat App API',
        description: 'API documentation for the Chat Application',
        version: '0.1.0',
      },
      servers: [
        {
          url: 'http://localhost:5000',
          description: 'Development server'
        }
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          }
        }
      },
      security: [
        {
          bearerAuth: []
        }
      ]
    },
    transform: jsonSchemaTransform,
  })

  await fastify.register(swaggerUi, {
    routePrefix: '/docs'
  })
}
