
SELECT *
FROM users JOIN pets
    ON users.id = pets.user_id
WHERE users.id = 1;

SELECT UPPER(CONCAT(users.first_name, ' ', users.last_name)) AS "Full name", COUNT(users.id) AS "Number of pets"
FROM users JOIN pets
    ON users.id = pets.user_id
GROUP BY users.id;