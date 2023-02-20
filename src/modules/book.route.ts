import { FastifyInstance } from "fastify";
import { testingHandler } from "./books.controller";

export const bookRoutes = async (server: FastifyInstance)=>{
    server.get("/", {
    }, testingHandler)
}