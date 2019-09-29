const mysql = require('mysql')

const connMySQL = function(){
    return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'jfi72n6y',
      database: 'portal_noticias'
  });
}
module.exports = function(){
  console.log('Database connection was established!')
    return connMySQL;
}
