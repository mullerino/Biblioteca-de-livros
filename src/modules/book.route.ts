import { FastifyInstance } from "fastify";
import { allBooksHandler, deleteBookHandler, registerBookHandler } from "./books.controller";
import { $ref } from "./book.schema";

export const bookRoutes = async (server: FastifyInstance)=>{
    server.get("/", {
    }, allBooksHandler)

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
}