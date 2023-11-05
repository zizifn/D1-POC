import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
 
export const customers = sqliteTable('Customers', {
    customerId: integer('CustomerId').primaryKey(),
    companyName: text('CompanyName').notNull().default(''),
    contactName: text('ContactName').notNull().default(''),
    address: text('address').notNull().default(''),
});