-- departments
INSERT INTO department (id, name)
VALUES (1, "Human Resources"),
       (2, "Accounting"),
       (3, "IT"),
       (4, "Production"),
       (5, "Research and Development");

-- roles
INSERT INTO role (id, title, salary, department_id)
VALUES (1, );
(1, "IT Analyst I", 70000, 3 ),
(2, "IT Analyst II", 90000, 3),
(3, "IT Analyst III", 100000, 3),
(4, "Accountant", 70000, 2),
(5, "Recruiter", 120000, 1),
(6, "Programmer", 100000, 1);

-- employees
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, Thomas, Anderson, 6, 2)
       (1, John, Smith, 6, 2)        
       (1, Takeshi, Kovacs, 3, 5)
       (1, Kristen, Ortega, 5, 4)

