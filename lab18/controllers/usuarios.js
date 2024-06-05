const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');

exports.getRegistro = (req, res, next) => {
    res.render('registro', { csrfToken: req.csrfToken() });
};

exports.postRegistro = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    Usuario.findByUsername(username)
        .then(([rows, fieldData]) => {
            if (rows.length > 0) {
                return res.redirect('/registro');
            }
            const usuario = new Usuario(username, password);
            return usuario.save();
        })
        .then(() => {
            res.redirect('/login');
        })
        .catch(err => console.log(err));
};

exports.getLogin = (req, res, next) => {
    res.render('login', { csrfToken: req.csrfToken() });
};

exports.postLogin = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    Usuario.findByUsername(username)
        .then(([rows, fieldData]) => {
            if (rows.length === 0) {
                return res.redirect('/login');
            }
            const user = rows[0];
            return bcrypt.compare(password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        req.session.isLoggedIn = true;
                        req.session.user = user;
                        return req.session.save(err => {
                            res.redirect('/');
                        });
                    }
                    res.redirect('/login');
                });
        })
        .catch(err => {
            console.log(err);
            res.redirect('/login');
        });
};

exports.logout = (req, res, next) => {
    req.session.destroy(err => {
        res.redirect('/');
    });
};
