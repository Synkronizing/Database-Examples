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
  var sql = "CREATE TABLE IF NOT EXISTS animals (IDanimal int(11) NOT NULL AUTO_INCREMENT,species varchar(50) NOT NULL,name varchar(50),gender varchar(6),ID int(11),yearBorn int(4),PRIMARY KEY (IDanimal), FOREIGN KEY (ID) REFERENCES customers(ID))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
