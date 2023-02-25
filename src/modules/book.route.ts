import { FastifyInstance } from "fastify";
import { getBooksHandler, deleteBookHandler, registerBookHandler, updateBookHandler } from "./books.controller";
import { $ref } from "./book.schema";

export const bookRoutes = async (server: FastifyInstance)=>{
    server.get("/", {
    }, getBooksHandler)

    server.post("/register", {
        schema: {
            body: $ref('createBookSchema'),
            response: {
                201: $ref('BookSchemaResponse')
            }
        }
    }, registerBookHandler)

    server.delete("/:id", {
        schema: {
            response: {
                201: $ref('BookSchemaResponse')
            }
        }
    }, deleteBookHandler)

    server.put("/update",{
        schema: {
            body: $ref('updateBookSchema'),
            response: {
                201: $ref('BookSchemaResponse')
            }
        }
    }, updateBookHandler)
}