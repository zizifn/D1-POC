/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import { D1Database, ExecutionContext } from '@cloudflare/workers-types';
import { drizzle } from 'drizzle-orm/d1';
import {customers} from './schema'

export interface Env {
	DB: D1Database;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const { pathname } = new URL(request.url);

		if (pathname === "/api/beverages") {
		  // If you did not use `DB` as your binding name, change it here
		//   const { results } = await env.DB.prepare(
		// 	"SELECT * FROM Customers WHERE CompanyName = ?"
		//   )
		// 	.bind("Bs Beverages")
		// 	.all();
		//   return Response.json(results);

		const db = drizzle(env.DB);
		const result = await db.select().from(customers).all();
		return Response.json(result);
		}
	
		return new Response(
		  "Call /api/beverages to see everyone who works at Bs Beverages"
		);
	},
};
