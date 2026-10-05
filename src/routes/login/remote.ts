import * as v from 'valibot';
import {query, form} from '$app/server'

export const login = form(
    v.object({
        username: v.string(),
        password: v.string(),
    }),
    ({username, password}) => {
        if (username=="arne" && password=="1965")
            return "sigma"
        else
            return "NO"
    }, 
);