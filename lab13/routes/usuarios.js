const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios');
const isAuth = require('../middleware/is-auth');

router.get('/registro', usuariosController.getRegistro);
router.post('/registro', usuariosController.postRegistro);

router.get('/login', usuariosController.getLogin);
router.post('/login', usuariosController.postLogin);

router.get('/ruta-protegida', isAuth, (req, res, next) => {
    res.send('Esta es una ruta protegida');
});

router.post('/ruta/asincrona', (req, res, next) => {
    const mensaje = req.body.mensaje;
    res.status(200).json({ message: "Respuesta asíncrona", data: mensaje });
});

module.exports = router;
