DROP DATABASE IF EXISTS myapp;

CREATE DATABASE myapp;
USE myapp;

CREATE TABLE lists
(
    id    int(10) AUTO_INCREMENT,
    value TEXT,
    PRIMARY KEY (id)
);
