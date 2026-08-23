CREATE TABLE `magicLoginTokens` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(320) NOT NULL,
	`tokenHash` varchar(128) NOT NULL,
	`expiresAt` timestamp NOT NULL,
	`usedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `magicLoginTokens_id` PRIMARY KEY(`id`),
	CONSTRAINT `magicLoginTokens_tokenHash_unique` UNIQUE(`tokenHash`)
);
--> statement-breakpoint
CREATE INDEX `magicLoginTokens_email_createdAt_idx` ON `magicLoginTokens` (`email`,`createdAt`);