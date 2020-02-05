const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'db',
  database : 'questreactnode'
});
module.exports  =  connection;
