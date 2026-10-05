import * as v from 'valibot';
import { query, form } from "$app/server";
import { db } from '#lib';

export const getPosts = query(async() => await db.orm.public.Forum.all());

export const getPost = query(v.string(), async (forums) => { forums });

export const addName = form(
    v.object({
        text:v.pipe(v.string(),v.nonEmpty()),
    }),
    async ({text})=> {
        await db.orm.public.Forum.create({ name: text });
    }
)
export const deleteName = form(
    v.object({
        id:v.pipe(v.string(),v.nonEmpty()),
    }),
    async ({id})=>{
        await db.orm.public.Forum.where({ id }).delete();
    }
)