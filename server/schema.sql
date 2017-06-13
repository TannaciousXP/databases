DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;
-- ---
-- Globals
-- ---

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'messages'
-- 
-- ---

DROP TABLE IF EXISTS messages;
		
CREATE TABLE messages (
  id INTEGER AUTO_INCREMENT,
  user INTEGER,
  id_rooms INTEGER,
  text VARCHAR(350),
  PRIMARY KEY (id)
);

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS `users`;
		
CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR (25),
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'rooms'
-- 
-- ---

DROP TABLE IF EXISTS `rooms`;
		
CREATE TABLE `rooms` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR (25),
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `messages` ADD FOREIGN KEY (user) REFERENCES `users` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (id_rooms) REFERENCES `rooms` (`id`);


/* Create other tables and define schemas for them here! */

insert into users (name) values ('DP');
insert into users (name) values ('PD');
insert into rooms (name) values ('lobby');
insert into rooms (name) values ('roomHR');
insert into messages (user, id_rooms, text) values (1, 1, 'First!');
insert into messages (user, id_rooms, text) values (1, 2, 'Second!');
insert into messages (user, id_rooms, text) values (2, 1, 'YAY!');
insert into messages (user, id_rooms, text) values (2, 2, 'BOOO!');

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql -p
 *  to create the database and the tables.*/

