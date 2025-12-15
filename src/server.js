import { configDotenv } from "dotenv";
configDotenv()

import cors from "@fastify/cors";
import Fastify from 'fastify';
import { RotasClientes } from "./routes/clientes-rotas.js";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastifySwagger from "@fastify/swagger";



const fastify = Fastify({ logger: true })

fastify.register(cors, { origin: '*' , methods:['GET','POST', 'PUT','DELETE']})


fastify.register(fastifySwagger, {
  swagger: {
    info: {
      title: 'Clientes API',
      description: 'Documentação da API de Clientes',
      version: '1.0.0'
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
     produces: ['application/json']
  }
})

fastify.register(fastifySwaggerUi, { routePrefix: '/docs', exposeRoute: true })


fastify.register(RotasClientes, { prefix: '/clientes' })

fastify.listen({ port: process.env.PORT ?? 3000, host: "0.0.0.0" }, (err, addr) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

  console.log(` servidor rodando em: ${addr}/clientes`)
  console.log(`📄 Documentation em: ${addr}/docs`)
})
