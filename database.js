var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "directory_db"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM departments", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});