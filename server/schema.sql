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
  room VARCHAR(25),
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
  `name` VARCHAR(25),
  PRIMARY KEY (`id`),
  UNIQUE KEY (`name`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `messages` ADD FOREIGN KEY (user) REFERENCES `users` (`id`);



/* Create other tables and define schemas for them here! */

insert into users (name) values ('DP');
insert into users (name) values ('PD');
insert into messages (user, room, text) values (1, 'yolo', 'First!');
insert into messages (user, room, text) values (1, 'HR', 'Second!');
insert into messages (user, room, text) values (2, 'yolo', 'YAY!');
insert into messages (user, room, text) values (2, 'HR', 'BOOO!');

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql -p
 *  to create the database and the tables.*/

