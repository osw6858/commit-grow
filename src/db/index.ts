import {drizzle} from "drizzle-orm/node-postgres";
import {Pool} from "pg";
import * as schema from "./schema";

const pool = new Pool({
    host: process.env.NEXT_PUBLIC_DATABASE_HOST as string,
    port: 5432,
    user: process.env.NEXT_PUBLIC_DATABASE_USER_NAME,
    password: process.env.NEXT_PUBLIC_DATABASE_PASSWORD,
    database: process.env.NEXT_PUBLIC_DATABASE_NAME as string,
});

export const db = drizzle(pool, {schema});