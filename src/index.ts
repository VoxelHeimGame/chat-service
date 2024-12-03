import { Elysia } from 'elysia'

const app = new Elysia().get('/', () => 'Chat Service is running').listen(3006)

console.log(`💬 Chat Service is running at ${app.server?.hostname}:${app.server?.port}`)
