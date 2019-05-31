var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "toor",
  database: "b2VetOffice"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE IF NOT EXISTS diagnosis (IDdiagnosis int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,date date NOT NULL,evaluation varchar(255),entrant varchar(50),IDanimal int(11),FOREIGN KEY (IDanimal) REFERENCES animal(IDanimal))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
