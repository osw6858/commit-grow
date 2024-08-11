import {defineConfig} from "drizzle-kit";

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/db/schema.ts",
    out: "./drizzle",
    dbCredentials: {
        host: process.env.NEXT_PUBLIC_DATABASE_HOST as string,
        port: 5432,
        user: process.env.NEXT_PUBLIC_DATABASE_USER_NAME,
        password: process.env.NEXT_PUBLIC_DATABASE_PASSWORD,
        database: process.env.NEXT_PUBLIC_DATABASE_NAME as string,
        ssl: false,
    }
});