const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');

const app = express();

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'mi string secreto',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

// Rutas
const rutasVideojuegos = require('./routes/videojuegos');
app.use(rutasVideojuegos);

app.listen(3010, () => {
    console.log('Servidor escuchando en el puerto 3010');
});
