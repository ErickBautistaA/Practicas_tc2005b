const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();

// Configurar el motor de plantillas
app.set('view engine', 'ejs');
app.set('views', 'views');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false,
    saveUninitialized: false,
}));
app.use(flash());

// Middleware para pasar mensajes flash a las vistas
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});

// Rutas
app.get('/', (req, res) => {
    res.render('index', { title: 'Inicio' });
});

app.get('/set-cookie', (req, res) => {
    res.setHeader('Set-Cookie', 'nombre_cookie=valor_cookie; HttpOnly');
    res.send('Cookie seteada');
});

app.get('/get-cookie', (req, res) => {
    const cookies = req.get('Cookie') || '';
    const cookieValue = cookies.split(';').find(c => c.trim().startsWith('nombre_cookie='));
    if (cookieValue) {
        res.send(`Valor de la cookie: ${cookieValue.split('=')[1]}`);
    } else {
        res.send('Cookie no encontrada');
    }
});

app.get('/login', (req, res) => {
    req.session.user = 'usuario';
    req.flash('success_msg', 'Sesión iniciada');
    res.redirect('/');
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/');
        }
        res.clearCookie('connect.sid');
        res.redirect('/');
    });
});


app.listen(3005, () => {
    console.log('Servidor corriendo en http://localhost:3005');
});
