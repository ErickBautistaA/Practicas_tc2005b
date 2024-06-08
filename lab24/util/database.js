const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nombre_de_tu_base_de_datos',
    password: 'tu_contraseña'
});

module.exports = pool.promise();
