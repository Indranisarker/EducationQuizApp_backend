CREATE TABLE users (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(320) NOT NULL,
    "password" VARCHAR(320) NOT NULL
)