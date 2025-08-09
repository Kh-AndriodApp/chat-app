import Fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import dotenv  from 'dotenv'
dotenv.config();

const fastify = Fastify({
   logger: true
})

fastify.register(fastifyCors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Authorization'],
    credentials: true
})

fastify.register(import('./routes/api/index'))

fastify.listen({ port: 5000 }, (err) => {

    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`Server listening on http://localhost:5000`)
})
