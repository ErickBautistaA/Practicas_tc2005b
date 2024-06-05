const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'videogames_db',
    password: 'your_password_here'
});

module.exports = pool.promise();
