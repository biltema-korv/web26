import { redirect } from "@sveltejs/kit"
import type { LayoutServerLoad } from "./$types"
import { db } from "#lib";

export const load = (async ({ cookies, url }) => {
    const user_id = cookies.get("user_id");
    const user = await db.orm.public.User.where({ id: user_id }).first()
    if (!user_id && (url.pathname != "/login" && url.pathname != "/register")) redirect(303, "/login");
    else {
        return { username: user?.username };
    }
}) satisfies LayoutServerLoad;