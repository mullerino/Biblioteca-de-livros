import {prisma} from '../utils/prisma'
import { ICreateBookInput, IDeleteBook, IUpdateBook } from './book.schema'

export const createBook = async(data: ICreateBookInput) =>{
    return await prisma.book.create({
        data,
    })
}

export const getBooks = async ()=>{
    return await prisma.book.findMany({
        select: {
            title: true,
            description: true,
            authors: true,
            releaseYear: true
        }
    })
}

export const deleteBook = async(idBook: number)=>{
    return await prisma.book.delete({
        where:{
            id: idBook
        }
    })
}

export const updateBook = async(data: IUpdateBook)=>{
    return await prisma.book.update({
        where: {
            id: Number(data.id)
        },
        data: {
            ...data
        }
    })
    
}