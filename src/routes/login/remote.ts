import * as v from 'valibot';
import {form} from '$app/server'
import { getRequestEvent } from '$app/server';
import { redirect } from '@sveltejs/kit';
import { db } from '#lib';
import { verifyPassword } from '#lib/server/password.ts';

export const login = form(
    v.object({
        username: v.string(),
        _password: v.string(),
    }),
    async ({username, _password}) => {
        const { cookies } = getRequestEvent();
        const user = await db.orm.public.User.where({username}).first();

        if (!user || !verifyPassword(_password, user.passwordHash)) {
            return { error: "BYE BYE"}
        }
        cookies.set("user_id", user.id, { path: "/", httpOnly: true });
        redirect(303, "/");
    }, 
);

export const logout = form(
    v.object({
    }),
    async ({}) => {
        const { cookies } = getRequestEvent();
        cookies.delete("user_id", { path: "/" });
        redirect(303, "/");
    }, 
)