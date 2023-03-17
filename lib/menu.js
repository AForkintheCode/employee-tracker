class Menu {
    constructor() {
        this.option = '';

    }

    setOption(option) {
        this.option = option;
    }

}

//view departments
class viewDepartment extends Menu {

    //connection to mysql
    call() {
        const connection = require('../config/connection');
        const cTable = require('console.table')
        connection.connect((err) => {
            if (err) throw err;
            connection.query('SELECT * from departments', function (err, result, fields) {
                if (err) throw err;
                console.table(result);
            });
        });
    }
}

//view roles
class viewRole extends Menu {

    //connection to mysql
    call() {
        const connection = require('../config/connection');
        const cTable = require('console.table')
        connection.connect((err) => {
            if (err) throw err;
            connection.query('SELECT roles.id, roles.title, roles.salary, departments.department_name FROM roles LEFT JOIN departments ON roles.department_id = departments.id ORDER BY roles.title', function (err, result, fields) {
                if (err) throw err;
                console.table(result);
            });
        });
    }
}


//view employees
class viewEmployee extends Menu {

    //connection to mysql
    call() {
        const connection = require('../config/connection');
        const cTable = require('console.table')
        connection.connect((err) => {
            if (err) throw err;
            connection.query('SELECT employees.id, employees.first_name, employees.last_name, roles.title, roles.salary, departments.department_name, employees.manager_id  FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id', function (err, result, fields) {
                if (err) throw err;
                console.table(result);
            });
        });
    }
}

//add roles
class addRole extends Menu {

    call() {
        const inquirer = require('inquirer')
        const connection = require('../config/connection');
        const cTable = require('console.table');

        connection.connect((err) => {
            if (err) throw err;
            connection.query('SELECT department_name FROM departments', function (err, results, fields) {
                if (err) throw err;
                const departments = results.map(result => result.department_name);

                inquirer
                    .prompt([
                        //add role
                        {
                            type: 'input',
                            name: 'addRole',
                            message: 'What role would you like to add?',

                        },
                        //salary
                        {
                            type: 'input',
                            name: 'salary',
                            message: `What is the salary of the role?`,
                        },
                        {
                            type: 'list',
                            name: 'jobDepartment',
                            message: `What department does this role belong to?`,
                            choices: departments
                        },
                    ])
                    .then((data) => {

                        connection.connect((err) => {
                            if (err) throw err;
                            let sql = `INSERT INTO combine_rd (title, salary, department) VALUES ('${data.addRole}', '${data.salary}', '${data.jobDepartment}') SELECT roles.title, roles.salary, departments.department_name FROM roles LEFT JOIN departments ON roles.department_id = departments.id ORDER BY roles.title`
                            connection.query(sql, function (err, result, fields) {
                                if (err) throw err;
                                console.table(result);
                            })
                        })
                    })
            })
        })
    }
}



//add employees
class addEmployee extends Menu {

    call() {
        const inquirer = require('inquirer')
        const connection = require('../config/connection');
        const cTable = require('console.table');

        connection.connect((err) => {
            if (err) throw err;
            connection.query('SELECT title FROM roles', function (err, results, fields) {
                if (err) throw err;
                const roles = results.map(result => result.title);


                inquirer
                    .prompt([

                        //first name
                        {
                            type: 'input',
                            name: 'firstName',
                            message: `What is the employee's first name?`,
                        },

                        //last name
                        {
                            type: 'input',
                            name: 'lastName',
                            message: `What is the employee's last name?`,
                        },

                        //role
                        {
                            type: 'list',
                            name: 'role',
                            message: `What is the employee's role?`,
                            choices: roles
                        },
                        // {
                        //     type: 'list',
                        //     name: 'manager',
                        //     message: `Who is the employee's manager?`
                        //     choices: managers,
                        // },
                    ])
                    //start
                    .then((data) => {
                        console.log(`${firstName}, ${lastName}, ${role}`);
                        const cTable = require('console.table');
                        connection.connect((err) => {
                            if (err) throw err;
                            connection.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (${firstName}, ${lastName}, ${role}, ${manager})`, function (err, result, fields) {
                                if (err) throw err;
                                console.table(result);
                            });
                        })
                    })
                //end
            })
        })
    }
}





//update employee status
class updateEmployee extends Menu {

    call() {
        const inquirer = require('inquirer')
        const connection = require('../config/connection');

        connection.connect((err) => {
            if (err) throw err;
            connection.query('SELECT first_name, last_name FROM employees', function (err, results, fields) {
                if (err) throw err;
                const employees = results.map(result => (result.first_name + ' ' + result.last_name));

                inquirer
                    .prompt([
                        {
                            type: 'list',
                            name: 'updateEmployee',
                            message: 'Please select an employee',
                            choices: employees
                        },
                    ])


            })



        })
    }
}




module.exports = {
    viewDepartment,
    viewRole,
    viewEmployee,
    addRole,
    addEmployee,
    updateEmployee
}