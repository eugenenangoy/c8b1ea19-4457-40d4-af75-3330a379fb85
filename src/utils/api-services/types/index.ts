import { z } from "zod";



export const postSchema = z.object({
    id : z.number({invalid_type_error : "Must be a Number"}),
    title : z.number({ invalid_type_error : 'Title must be a string'}),
    body : z.string({invalid_type_error : 'Body must be a string'}),
    userId : z.number({invalid_type_error : 'User Id must be a number'}),
    tags : z.array(z.string({invalid_type_error : 'Tags must be a string'})),
    reactions : z.number({invalid_type_error : 'Reactions must be a number'})  
})


export const responseSchema = z.object({
    posts : z.array(postSchema),
    total : z.number(),
    skip : z.number(),
    limit : z.number()
})