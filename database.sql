CREATE DATABASE harinder_db;


CREATE TABLE user_data1(
    ID SERIAL PRIMARY KEY,
    first_name VARCHAR(225),
    last_name VARCHAR(225),
    email VARCHAR(225) UNIQUE
);