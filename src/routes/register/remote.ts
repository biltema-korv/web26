import { form } from "$app/server";
import { invalid, redirect } from "@sveltejs/kit";
import * as v from "valibot";
import { getRequestEvent } from '$app/server';
import { db } from "../../prisma/db"
import { hashPassword } from "#lib/server/password.ts";

export const register = form(
    v.object({
        username: v.string(),
        _password: v.pipe(v.string(), v.minLength(8, "Minst 8 tecken"))
    }),
    async ({username, _password}, issue) => {
        const { cookies } = getRequestEvent();
        const taken = await db.orm.public.User.where({ username }).first();

        if (taken) {
            invalid(issue.username("Användarnam upptaget"));
        }
        
        await db.orm.public.User.create({ username: username, passwordHash: await hashPassword(_password) });
        cookies.set("logged_in", "yep", { path: "/", httpOnly: true });
        redirect(303, "/login")
    },
);