import Fastify from 'fastify'
import fastifyCors from '@fastify/cors'

import dotenv from 'dotenv'
import {
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod';
import registerSwagger from '@utils/swagger';
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
    const fastify = await build()
    await fastify.listen({ port: 5000 })
    fastify.log.info(`Server listening on http://localhost:5000`)
    fastify.log.info(`Swagger documentation available at http://localhost:5000/docs`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()
