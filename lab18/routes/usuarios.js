const express = require('express');
const usuariosController = require('../controllers/usuarios');
const router = express.Router();

router.get('/registro', usuariosController.getRegistro);
router.post('/registro', usuariosController.postRegistro);

router.get('/login', usuariosController.getLogin);
router.post('/login', usuariosController.postLogin);

router.post('/logout', usuariosController.logout);

module.exports = router;
