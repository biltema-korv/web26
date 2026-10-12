import { redirect } from "@sveltejs/kit"
import type { LayoutServerLoad } from "./$types"

export const load = (async ({ cookies, url }) => {
        let logged_in = cookies.get("logged_in");
    if (!logged_in && (url.pathname != "/login" && url.pathname != "/register")) redirect(303, "/login");
}) satisfies LayoutServerLoad;