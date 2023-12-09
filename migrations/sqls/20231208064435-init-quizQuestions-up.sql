
CREATE TABLE quizQuestions (
    "id" SERIAL PRIMARY KEY,
    "select_course" VARCHAR(255) NOT NULL,
    "question" VARCHAR(255) NOT NULL,
    "option1" VARCHAR(255) NOT NULL,
    "option2" VARCHAR(255) NOT NULL,
    "option3" VARCHAR(255) NOT NULL,
    "option4" VARCHAR(255) NOT NULL,
    "correctAnswer" VARCHAR(255) NOT NULL
)