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
    ])

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
        type: 'list',
        name: 'role',
        message: `What is the employee's role?`,
    },     
    ])
    
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