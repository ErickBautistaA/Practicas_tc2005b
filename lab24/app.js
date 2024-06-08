const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const csrf = require('csurf');
const usuariosRoutes = require('./routes/usuarios');
const csrfProtection = csrf();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
    secret: 'mi-secreto',
    resave: false,
    saveUninitialized: false
}));

app.use(csrfProtection);

app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});

app.use('/usuarios', usuariosRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Página no encontrada</h1>');
});

app.listen(3012, () => {
    console.log('Servidor corriendo en el puerto 3012');
});
