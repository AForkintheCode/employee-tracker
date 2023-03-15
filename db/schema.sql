DROP DATABASE IF EXISTS directory_db;
CREATE DATABASE directory_db;
 
USE directory_db;

CREATE TABLE departments(
    id INT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles(
    id INT,
    title VARCHAR(30) PRIMARY KEY,
    salary DECIMAL,
    department_id  INT NOT NULL,
    CONSTRAINT fk_departmentOrder FOREIGN KEY(department_id)
    REFERENCES departments(id) 
);

CREATE TABLE employees(
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,
    manager_id INT,
    CONSTRAINT fk_roleOrder FOREIGN KEY(role_id)
    REFERENCES roles(id)
);