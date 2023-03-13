const inquirer = require ('inquirer')
// const mysql = require ('mysql')
// const console = require ('console')

//main prompt
inquirer
.prompt([
    {
        type: 'list',
        name: 'option',
        message: 'What would you like to do? ',
        choices: ['View Departments', 'View Roles', 'View Employees', 'Add Role', 'Add Employee', 'Update Employee Status']
    },
])
    .then((data)=>{        
        let option;
        if (data.option === 'View Departments'){
            console.log('1')
            // option = 
        }
        if (data.option === 'View Roles'){
            console.log('2')            
        }
        if (data.option === 'View Employees'){
            console.log('3')            
        }
        if (data.option === 'Add Role'){
            console.log('4')
        }
        if (data.option === 'Add Employee'){
            console.log('5')            
        }
        if (data.option === 'View Departments'){
            console.log('6')            
        }
        if (data.option === 'Update Employee Status'){
            console.log('7')
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