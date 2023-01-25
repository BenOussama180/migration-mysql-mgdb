var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "password",
  database: "supply_db",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
// test query
con.query("show tables", function (err, result) {
  if (err) throw err;
  console.log("Result: " + result);
});
