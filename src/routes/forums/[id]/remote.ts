import * as v from 'valibot';
import { query, form } from '$app/server';
import { db } from '#lib';

export const getMessages = query(v.string(), async (id) => {
        return await db.orm.public.Message.where({ forumid: id }).all();
});

export const createMessage = form(
    v.object({
        message: v.string(),
        id: v.string(),
    }),
    async ({ id, message }) => {
        await db.orm.public.Message.create({ text: message, forumid: id });
    },
);  