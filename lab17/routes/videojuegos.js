const express = require('express');
const videojuegosController = require('../controllers/videojuegos');

const router = express.Router();

router.get('/videojuegos', videojuegosController.getVideojuegos);

router.post('/videojuegos', videojuegosController.insertarVideojuego);

module.exports = router;
