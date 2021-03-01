const mysql = require('mysql');

const bd =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '3226',
  database: 'wastore'
});

bd.connect((error)=>{
  if(error)
    console.log('Problemas con MySQL');
  else 
    console.log('Conectado a MySQL');
})

module.exports = bd;