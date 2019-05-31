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
  var sql = "INSERT INTO animals (IDanimal,species,name,gender,ID,yearBorn) VALUES ?";
  var values = [
    [null, 'Cat','Tiger','male',1, '2000'],
    [null, 'Dog','Happy','female',2, '2006'],
    [null, 'Bird','Harmony','female',3, '2010'],
    [null, 'Hamster','George','male',4, '2017']

	
    
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
