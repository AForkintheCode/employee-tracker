-- department + role tables
SELECT department_name
FROM departments
LEFT JOIN role
ON departments.id = roles.department_id
ORDER BY departments.name


-- role + employee tables
SELECT title
FROM roles
LEFT JOIN employees
ON roles.id = employees.role_id
ORDER BY department.name