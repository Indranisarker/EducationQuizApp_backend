CREATE TABLE announcement (
    "id" SERIAL PRIMARY KEY,
    "courseTitle" VARCHAR(255) NOT NULL,
    "announcement" VARCHAR(255) NOT NULL,
    "date" DATE NOT NULL
);