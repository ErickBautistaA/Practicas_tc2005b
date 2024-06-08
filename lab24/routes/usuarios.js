const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios');
const isAuth = require('../middleware/is-auth');

// Ruta para registro de usuario
router.post('/registro', usuariosController.postRegistro);

// Ruta para login de usuario
router.post('/login', usuariosController.postLogin);

// Ruta protegida (Ejemplo)
router.get('/ruta-protegida', isAuth, (req, res, next) => {
    res.send('Esta es una ruta protegida');
});

// Ruta para manejo de AJAX
router.post('/ruta/asincrona', (req, res, next) => {
    const mensaje = req.body.mensaje;
    res.status(200).json({ message: "Respuesta asíncrona", data: mensaje });
});

module.exports = router;
