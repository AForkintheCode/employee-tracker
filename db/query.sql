-- department + role tables
SELECT roles.title, roles.salary, departments.department_name 
FROM roles
LEFT JOIN departments
ON roles.department_id = departments.id
ORDER BY roles.title


-- role + employee tables
SELECT title
FROM roles
LEFT JOIN employees
ON roles.id = employees.role_id
ORDER BY roles.title