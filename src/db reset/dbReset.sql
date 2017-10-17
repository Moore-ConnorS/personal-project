DROP TABLE IF EXISTS articles;
DROP TABLE IF EXISTS adminUser;

create table IF NOT EXISTS adminUser (
id serial primary key,
username varchar(80),
password varchar(80)
);

create table IF NOT EXISTS articles (
id serial primary key,
userid INTEGER references adminUser(id),
title varchar(100),
description varchar(200),
imgurl VARCHAR(255),
article text
);

INSERT INTO adminUser (username, password)
VALUES
('bobby', 'pw');