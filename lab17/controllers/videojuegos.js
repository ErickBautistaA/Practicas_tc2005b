const Videojuego = require('../models/videojuego');

exports.getVideojuegos = (req, res, next) => {
    Videojuego.fetchAll()
        .then(([rows, fieldData]) => {
            res.render('vista', {
                videojuegos: rows
            });
        })
        .catch(err => console.log(err));
};

exports.insertarVideojuego = (req, res, next) => {
    const videojuego = new Videojuego(req.body.nombre, req.body.plataforma);
    videojuego.save()
        .then(() => {
            res.redirect('/videojuegos');
        })
        .catch(err => console.log(err));
};

exports.getVideojuego = (req, res, next) => {
    const id = req.params.videojuego_id;
    Videojuego.findById(id)
        .then(([row]) => {
            res.render('videojuego', {
                videojuego: row[0]
            });
        })
        .catch(err => console.log(err));
};
