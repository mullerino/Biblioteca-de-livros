import z from 'zod'
import {buildJsonSchemas} from 'fastify-zod'

const bookInput = {
    title: z.string(),
    releaseYear: z.string({invalid_type_error: 'releaseYear must be a string'}),
    description: z.string(),
    authors: z.string().array()
}

const createBookSchema = z.object({
    ...bookInput,
})

const BookSchemaResponse = z.object({
    ...bookInput,
    id: z.number()
})

const deleteBookSchema = z.object({
    id: z.number()
})

export type ICreateBookInput = z.infer<typeof createBookSchema>
export type IDeleteBook = z.infer<typeof deleteBookSchema>

export const { schemas: bookSchemas, $ref } = buildJsonSchemas({
    createBookSchema,
    BookSchemaResponse,
    deleteBookSchema
})


