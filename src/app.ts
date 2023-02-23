import Fastify from 'fastify'
import { bookRoutes } from './modules/book.route'
import { bookSchemas } from './modules/book.schema';

const server = Fastify()

const main = async ()=>{

    for(const schema of [...bookSchemas]){
        server.addSchema(schema);
    }

    server.register(bookRoutes, {prefix: "api/books"})

    try{
        await server.listen({port: 5000})
        console.log('server on na porta 5000')
    } catch (e){
        console.error(e)
        process.exit(1)
    }
}

main()