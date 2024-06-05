const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost', // Verifica que este es el host correcto
    user: 'root', // Verifica que este es el usuario correcto
    database: 'usuarios_db', // Verifica que este es el nombre correcto de tu base de datos
    password: '' // Verifica que esta es la contraseña correcta
});

module.exports = pool.promise();
