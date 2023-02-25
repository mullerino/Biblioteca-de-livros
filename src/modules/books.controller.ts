import { FastifyRequest } from "fastify"
import { ICreateBookInput, IDeleteBook, IUpdateBook } from "./book.schema"
import { createBook, getBooks, deleteBook, updateBook } from "./books.service"

export const getBooksHandler = async()=>{
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

export const updateBookHandler = async(req: FastifyRequest <{Body: IUpdateBook & IDeleteBook}>) =>{
    const updateOneBook = await updateBook(req.body)

    return updateOneBook
}