const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const csrf = require('csurf');
const path = require('path');

const csrfProtection = csrf();
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const usuariosRoutes = require('./routes/usuarios');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'mi string secreto el cual estoy haciendo largo para que este bien pero la verdad no estoy muy seguro porque se hace o para que sirve.', 
    resave: false, 
    saveUninitialized: false
}));

app.use(csrfProtection);

app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});

app.use(usuariosRoutes);

app.listen(3011, () => {
    console.log('Servidor corriendo en el puerto 3011');
});
