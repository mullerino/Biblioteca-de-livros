import Fastify from 'fastify'
import { bookRoutes } from './modules/book.route'

const server = Fastify()

const main = async ()=>{
    server.register(bookRoutes, {prefix: "api/book"})

    try{
        await server.listen({port: 5000})
        console.log('server on na porta 5000')
    } catch (e){
        console.error(e)
        process.exit(1)
    }
}

main()