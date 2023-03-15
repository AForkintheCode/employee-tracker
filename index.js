const inquirer = require ('inquirer')
const mysql = require ('mysql2')
const cTable = require('console.table')
const {viewDepartment, viewRole, viewEmployee, addRole, addEmployee, updateEmployee} = require ('./lib/menu.js')


//main prompt
inquirer
.prompt([
    {
        type: 'list',
        name: 'selection',
        message: 'What would you like to do? ',
        choices: ['View Departments', 'View Roles', 'View Employees', 'Add Role', 'Add Employee', 'Update Employee Status']
    },
])
    .then((data)=>{        
        let option;
        if (data.selection === 'View Departments'){            
            option = new viewDepartment;
            option.setOption(data.selection)
            option.call()            
        }

        if (data.selection === 'View Roles'){ 
            option = new viewRole;
            option.setOption(data.selection)
            option.call()         
        }

        if (data.selection === 'View Employees'){             
            option = new viewEmployee;
            option.setOption(data.selection)
            option.call()    
        }

        if (data.selection === 'Add Role'){            
            option = new addRole;
            option.setOption(data.selection)
            option.call()
        }

        if (data.selection === 'Add Employee'){
            option = new addEmployee;
            option.setOption(data.selection)
            option.call()
        }    

        if (data.selection === 'Update Employee Status'){            
            option = new updateEmployee;
            option.setOption(data.selection)
            option.call()
        }
    })

    























//     {
//         type: 'list',
//         name: 'option',
//         message: 'What is the name of the department? ',
//         choices: ['View Departments', 'View Roles', 'View Employees', 'Add Role', 'Add Employee', 'Update Employee Status']
//     },
//     {
//         type: 'list',
//         name: 'role',
//         message: 'What is the name of the role?',
//         choices: ['Roles', 'Employees', 'Departments']
//     },   
//     {
//         type: 'list',
//         name: 'salary',
//         message: 'What is the salary of the role?',
//         choices: ['Roles', 'Employees', 'Departments']
//     },   
//     {
//         type: 'list',
//         name: 'department',
//         message: 'What department does the role belong to?',
//         choices: ['Roles', 'Employees', 'Departments']
//     },   
//     {
//         type: 'list',
//         name: 'first',
//         message: `What is the employee's first name?`,
//         choices: ['Roles', 'Employees', 'Departments']
//     },   
//     {
//         type: 'list',
//         name: 'last',
//         message: `What is the employee's last name?`,
//         choices: ['Roles', 'Employees', 'Departments']
//     },   
//     {
//         type: 'list',
//         name: 'manager',
//         message: `Who is the employee's manager?`,
//         choices: ['Roles', 'Employees', 'Departments']
//     },   
// ])