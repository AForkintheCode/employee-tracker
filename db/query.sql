-- DROP DATABASE IF EXISTS movies_db;
-- CREATE DATABASE movies_db;

-- USE movies_db;

-- CREATE TABLE movies (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   movie_name VARCHAR(100) NOT NULL
-- );

-- CREATE TABLE reviews (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     movie_id INT,
--     review TEXT NOT NULL,
--     FOREIGN KEY (movie_id)
--     REFERENCES movies(id)
--     ON DELETE SET NULL
-- );


SELECT movies.movie_name AS movie, reviews.review
FROM reviews
LEFT JOIN movies
ON reviews.movie_id = movies.id
ORDER BY movies.movie_name;

SELECT department.name AS department, role.title
FROM role
LEFT JOIN
ON role.department_id = department.id
ORDER BY department.name