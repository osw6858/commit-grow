import {integer, pgTable, serial, text, varchar} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    name: text("name"),
    email: varchar("email", {length: 255}),
    age: integer("age"),
    gender: integer("gender"),
});