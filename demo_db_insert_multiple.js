var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "toor",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (ID,fname,lname,address) VALUES ?";
  var values = [
    [null, 'John','Landry', '123 W Main St.'],
    [null, 'Bob','Miller', '240 E Park St.'],
    [null, 'Amelia','Main', '789 E Cloverdale Ave.']
	
    
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
