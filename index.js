const inquirer = require ('inquirer')
const {viewDepartment, viewRole, viewEmployee, addRole, addEmployee, updateEmployee} = require ('./lib/menu.js')


//container


//main prompt
function mainmenu(){
inquirer
.prompt([
   
    {
        type: 'list',
        name: 'selection',
        message: 'What would you like to do? ',
        choices: ['View Departments', 'View Roles', 'View Employees', 'Add Role', 'Add Employee', 'Update Employee Status', 'Quit']
    },
])
    .then((data)=>{        
        let option;
        if (data.selection === 'View Departments'){            
            option = new viewDepartment;
            option.setOption(data.selection)
            option.call();
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
        if (data.selection === 'Quit'){     
               

        }
    })}

function rundb(){
    mainmenu();
    }

        
rundb();

    























