import Fastify from 'fastify'
import fastifyCors from '@fastify/cors'

import dotenv from 'dotenv'
import {
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod';
import registerSwagger from '@utils/swagger';
import CassandraConnection from './config/database/cassandra';
import { CassandraService } from './services/message.service';
dotenv.config();


async function build() {
  const fastify = Fastify({
    logger: true
  })

  fastify.setValidatorCompiler(validatorCompiler);
  fastify.setSerializerCompiler(serializerCompiler);
  fastify.withTypeProvider<ZodTypeProvider>()

  // Register Swagger
  await registerSwagger(fastify)

  fastify.register(fastifyCors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Authorization'],
    credentials: true
  })

  fastify.register(import('./routes/api/index'))

  return fastify
}

async function start() {
  try {
    // Initialize Cassandra connection and run migrations
    console.log('Initializing Cassandra connection...')
    const cassandraService = CassandraService.getInstance()
    await cassandraService.runMigrations()
    console.log('Cassandra migrations completed')

    const fastify = await build()
    
    // Graceful shutdown handlers
    const shutdown = async () => {
      console.log('Shutting down server...')
      await fastify.close()
      await CassandraConnection.shutdown()
      process.exit(0)
    }

    process.on('SIGTERM', shutdown)
    process.on('SIGINT', shutdown)

    await fastify.listen({ port: 5000 })
    fastify.log.info(`Server listening on http://localhost:5000`)
    fastify.log.info(`Swagger documentation available at http://localhost:5000/docs`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()
