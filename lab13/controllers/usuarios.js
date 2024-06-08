const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');

exports.getRegistro = (req, res, next) => {
    res.render('registro', { pageTitle: 'Registro' });
};

exports.postRegistro = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    Usuario.findByUsername(username)
        .then(userDoc => {
            if (userDoc) {
                return res.redirect('/registro');
            }
            return bcrypt.hash(password, 12);
        })
        .then(hashedPassword => {
            const usuario = new Usuario(username, hashedPassword);
            return usuario.save();
        })
        .then(result => {
            res.redirect('/login');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getLogin = (req, res, next) => {
    res.render('login', { pageTitle: 'Login' });
};

exports.postLogin = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    Usuario.findByUsername(username)
        .then(user => {
            if (!user) {
                return res.redirect('/login');
            }
            bcrypt.compare(password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        req.session.isLoggedIn = true;
                        req.session.user = user;
                        return req.session.save(err => {
                            res.redirect('/');
                        });
                    }
                    res.redirect('/login');
                })
                .catch(err => {
                    console.log(err);
                    res.redirect('/login');
                });
        })
        .catch(err => {
            console.log(err);
        });
};
