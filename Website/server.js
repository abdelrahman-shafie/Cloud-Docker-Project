const waitPort = require('wait-port');
const mysql = require('mysql2');
const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Content-Type', 'application/json; charset=utf-8');  
  next();
});


const params = {
  host: 'database',
  port: 3306,
};
waitPort(params)
  .then(({ open, ipVersion }) => {
    if (open) {

      const PORT = process.env.NODE_DOCKER_PORT || 3000;


      const connection = mysql.createConnection({
          host     : 'database',
          user     : 'root',
          password : 'rootadmin',
          database : 'group_database',
          port: 3306,
      });
          connection.connect(function(err) {
              if (err) {
                  console.error('error connecting: ' + err.stack);
                  
                  
              } else {
                  console.log('connected as id ' + connection.threadId);
                  
              }
          });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

app.get('/students', (req, res) => {
  connection.query('SELECT * FROM students', function (error, results, fields) {
    if (error) console.log(error);
    const students = results.map(result => ({
      name: result.name,
      id: result.ID,
      cgpa: parseFloat(result.CGPA),
      age: result.age,
      department: result.department
    }));
    console.log(students);
    res.send(students);
})});

    }
    else console.log('The port did not open before the timeout...');
  })
  .catch((err) => {
    console.err(`An unknown error occured while waiting for the port: ${err}`);
  });
