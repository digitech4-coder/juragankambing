CREATE TABLE `contactRequests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`email` varchar(320) NOT NULL,
	`whatsapp` varchar(30) NOT NULL,
	`service` varchar(40) NOT NULL,
	`domisili` varchar(40) NOT NULL,
	`guests` varchar(80) NOT NULL DEFAULT '',
	`message` text NOT NULL,
	`emailStatus` enum('pending','sent','failed') NOT NULL DEFAULT 'pending',
	`emailSentAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `contactRequests_id` PRIMARY KEY(`id`)
);
