import * as v from 'valibot';
import { query, form } from "$app/server";
import { db } from '#lib';

export const getPosts = query(async() => await db.orm.public.Todo.all());

export const getPost = query(v.string(), async (clicks) => { clicks });

export const addName = form(
    v.object({
        text:v.pipe(v.string(),v.nonEmpty()),
    }),
    async ({text})=> {
        await db.orm.public.Todo.create({ text, completed: false });
    }
)
export const deleteName = form(
    v.object({
        id:v.pipe(v.number()),
    }),
    async ({id})=>{
        await db.orm.public.Todo.where({ id: id }).delete();
    }
)