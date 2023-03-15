-- department + role tables
SELECT (stuff here)
FROM department
LEFT JOIN role
ON department.id = role.department_id
ORDER BY department.name


-- role + employee tables
SELECT (stuff here)
FROM role
LEFT JOIN employee
ON role.id = employee.role_id
ORDER BY department.name