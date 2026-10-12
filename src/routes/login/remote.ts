import * as v from 'valibot';
import {form} from '$app/server'
import { getRequestEvent } from '$app/server';
import { redirect } from '@sveltejs/kit';

export const login = form(
    v.object({
        username: v.string(),
        password: v.string(),
    }),
    async ({username, password}) => {
        const { cookies } = getRequestEvent();
        if (username=="arne" && password=="1965"){
            cookies.set("logged_in", "yep", { path: "/", httpOnly: true });
            redirect(303, "/");
        }
        return;
    }, 
);