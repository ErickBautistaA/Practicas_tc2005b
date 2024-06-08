const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'videogames_db',
    password: ''
});

module.exports = pool.promise();
