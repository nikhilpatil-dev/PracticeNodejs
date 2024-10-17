const mysql = require('mysql')
const connection = mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"",
    database:"nodejs_db",
    port:"3307"

});
connection.connect((err)=>{
    if(err) throw err;
    console.log('connection successfully')
});

module.exports =connection;
