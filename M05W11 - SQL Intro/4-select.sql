SELECT *
FROM users;

SELECT first_name, last_name, email
FROM users;

SELECT first_name AS "First name", last_name AS "Last name", email
FROM users;

SELECT *
FROM users
WHERE age >= 25;

SELECT *
FROM users
WHERE age >= 25 AND first_name = 'Alex';

SELECT *
FROM users
WHERE first_name LIKE '%e%';

SELECT *
FROM pets
LIMIT 3;

SELECT *
FROM pets
LIMIT 3
OFFSET 3;

SELECT *
FROM users
ORDER BY first_name ASC;