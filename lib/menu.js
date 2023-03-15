class Menu  {
    constructor(){
        this.option = '';
    }
    //connection to mysql
    connection() {
        
    }
    setOption(option){
        this.option = option;
    }


}

//view departments
class viewDepartment extends Menu  {
    
    call(){
        console.log(this.option); 
        con.connect(function(err) {
            if (err) throw err;
            con.query("SELECT * FROM departments", function (err, result, fields) {
              if (err) throw err;
              console.log(result);
            });
          });   
    }
    
        
    }

//view roles
class viewRole extends Menu  {

    call(){
        console.log(this.option);  
        con.connect(function(err) {
            if (err) throw err;
            con.query("SELECT * FROM roles", function (err, result, fields) {
              if (err) throw err;
              console.log(result);
            });
          });     
        
    }
    
        
    }


//view employees
class viewEmployee extends Menu  {

    call(){
        console.log(this.option); 
        con.connect(function(err) {
            if (err) throw err;
            con.query("SELECT * FROM employees", function (err, result, fields) {
              if (err) throw err;
              console.log(result);
            });
          });     
    }
    
        

}

//add roles
class addRole extends Menu  {

    call(){
        console.log(this.option);    
    }
    
        
    }



//add employees
class addEmployee extends Menu  {

    call(){
        console.log(this.option);    
    }
    
        
    }


//update employee status
class updateEmployee extends Menu  {

    call(){
        console.log(this.option);    
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