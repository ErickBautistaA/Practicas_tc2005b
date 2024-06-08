const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const csrf = require('csurf');
const path = require('path');

const app = express();

// Configuración de la base de datos
const dbOptions = {
    host: 'localhost',
    user: 'root',
    database: 'videogames_db',
    password: ''
};
const sessionStore = new MySQLStore(dbOptions);

// Configuración de la sesión
app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: sessionStore
}));

// Configuración de CSRF
const csrfProtection = csrf();
app.use(csrfProtection);

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', 'views');

// Variables locales para CSRF
app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});

// Rutas
const usuariosRoutes = require('./routes/usuarios');
app.use(usuariosRoutes);

// Servidor
app.listen(3013, () => {
    console.log('Servidor corriendo en el puerto 3013');
});
