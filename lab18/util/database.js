const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'usuarios_db',
    password: 'el_password_de_tu_usuario_de_la_bd'
});

module.exports = pool.promise();
