/*/import * as v from 'valibot';
import { query, form } from "$app/server";
import { error, redirect } from "@sveltejs/kit"
import type { PageServerLoad } from './$types';

export const cookiecookie = form(
    v.object({
        username: v.pipe(v.string(), v.nonEmpty()),
        password: v.pipe(v.string(), v.nonEmpty())
    }),
    async ({ username, password }) => {
		// Check the user is logged in
		const user = await auth.getUser();
		if (!user) error(401, 'Unauthorized');

		const slug = username.toLowerCase().replace(/ /g, '-');

		// Insert into the database
		await db.sql`
			INSERT INTO post (slug, username, password)
			VALUES (${slug}, ${username}, ${password})
		`;

		// Redirect to the newly created page
		redirect(303, `/blog/${slug}`);
	}
)

export const load: PageServerLoad = async ({ cookies }) => {
    const shouldBlock = /* ditt eget villkor, t.ex. cookies.get(...) */ false;
/*/    if (shouldBlock) {
        redirect(303, '/');
    }
};/*/