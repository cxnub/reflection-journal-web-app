// database connection configuration
const host = "localhost";
const port = "3306";
const user = "root";
const password = "password";
const database = "e-commerce";

// DO NOT MODIFY ANYTHING BELOW THIS LINE
const mysql2 = require("mysql2");
const  connection = mysql2.createConnection({
    "host": host,
    "port": port,
    "user": user,
    "password": password,
    "database": database
});

//Test Connection
connection.connect(err => {
    if (err) throw err;
    console.log('Connected To DB');
    });
    // Export the connection so that it can be used
    // by others script
    module.exports = connection;
