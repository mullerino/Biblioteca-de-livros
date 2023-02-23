import { FastifyRequest } from "fastify"
import { ICreateBookInput, IDeleteBook } from "./book.schema"
import { createBook, getBooks, deleteBook } from "./books.service"

export const allBooksHandler = async()=>{
    const books = await getBooks()

    return books
}

export const registerBookHandler = async (req: FastifyRequest <{Body: ICreateBookInput}>)=>{
    const book = await createBook({
        ...req.body,
    })

    return book;
}

export const deleteBookHandler = async(req: FastifyRequest <{Body: IDeleteBook}>) =>{
    const deleteOneBook = await deleteBook(req.body.id)

    return deleteOneBook
}