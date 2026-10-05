import * as v from 'valibot';
import { query, form } from "$app/server";

let clicks: string[] = [];

export const getPosts = query(async() => clicks);

export const getPost = query(v.string(), async (clicks) => { clicks });

export const addName = form(
    v.object({
        text:v.pipe(v.string(),v.nonEmpty())
    }),
    async ({text})=> {
        clicks.push(text);
    }
)
export const deleteName = form(
    v.object({
        index: v.number(),
    }),
    async ({index})=>{
        clicks.splice(index,1)
    }
)