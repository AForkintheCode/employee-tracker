class Menu  {
    constructor(){
        this.option = '';

    }   

    setOption(option){
        this.option = option;
    }
    
}

//view departments
class viewDepartment extends Menu  {

    //connection to mysql
    call(){
        const connection = require('../config/connection');
        const cTable = require('console.table')
        connection.connect((err) => {
            if (err) throw err;  
            connection.query('SELECT * from departments', function (err, result, fields) {
                if (err) throw err;
                console.table(result);
            })  ;            
        });
    }      
    }

//view roles
class viewRole extends Menu  {

    //connection to mysql
    call(){
        const connection = require('../config/connection');
        const cTable = require('console.table')
        connection.connect((err) => {
            if (err) throw err;  
            connection.query('SELECT * from roles', function (err, result, fields) {
                if (err) throw err;
                console.table(result);
            })  ;            
        });
    }       
    }


//view employees
class viewEmployee extends Menu  {

    //connection to mysql
    call(){
        const connection = require('../config/connection');
        const cTable = require('console.table')
        connection.connect((err) => {
            if (err) throw err;  
            connection.query('SELECT * from employees', function (err, result, fields) {
                if (err) throw err;
                console.table(result);
            })  ;            
        });
    }      
}

//add roles
class addRole extends Menu  {

    call(){
        const inquirer = require ('inquirer')
        const connection = require('../config/connection');
        const cTable = require('console.table');
        let departments;
    
        connection.connect((err) => {
         if (err) throw err;  
        connection.query('SELECT * FROM departments', function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            departments = result.map(({id, department_name}) => ({name: department_name, value: id}))
            console.log(departments[1])
            
            })
        })

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
        .then((data)=>{
            console.log(`${addRole}, ${salary}, ${jobDepartment}`);
            
            connection.connect((err) => {
             if (err) throw err;  
             connection.query(`INSERT INTO roles (title, salary, department_id) VALUES (${firstName}, ${lastName}, ${role}, ${manager})`, function (err, result, fields) {
                 if (err) throw err;
                 console.table(result);
             })})        
        })
    }
    
        
    }



//add employees
class addEmployee extends Menu  {

    call(){
        const inquirer = require ('inquirer')
        const connection = require('../config/connection');
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
        type: 'input',
        name: 'role',
        message: `What is the employee's role?`,
    },
    {
        type: 'input',
        name: 'manager',
        message: `Who is the employee's manager?`,
    },
])     
       .then((data)=>{
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
    
    
    }
    
        
    }


//update employee status
class updateEmployee extends Menu  {

    call(){
        const inquirer = require ('inquirer')
        const connection = require('../config/connection');
        
 
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