import { z } from "zod";
import { postSchema,responseSchema } from "../types";
import { Axios } from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";

export type GetPostTypes = z.infer<typeof postSchema>
type GetResponseType = z.infer<typeof responseSchema>

const getPost = async ()=>{
    try {
        const {data} = await Axios.get('/posts')
        console.log(data)
        return data
    } catch (error) {
         throw error       
    }
}

export const usePosts = ()=>{
    return useQuery<GetResponseType>({
        queryKey : ['posts'],
        queryFn : ()=> getPost(),
        throwOnError : true
    })
}
