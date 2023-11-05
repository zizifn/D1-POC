CREATE TABLE IF NOT EXISTS  `Customers` (
	`CustomerId` integer PRIMARY KEY NOT NULL,
	`CompanyName` text DEFAULT '' NOT NULL,
	`ContactName` text DEFAULT '' NOT NULL
);
