const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');

exports.postRegistro = (req, res, next) => {
    const { username, password } = req.body;
    Usuario.findByUsername(username)
        .then(userDoc => {
            if (userDoc[0].length > 0) {
                return res.status(409).json({ message: 'Username already exists' });
            }
            return bcrypt.hash(password, 12);
        })
        .then(hashedPassword => {
            const usuario = new Usuario(username, hashedPassword);
            return usuario.save();
        })
        .then(result => {
            res.status(201).json({ message: 'User registered successfully' });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.postLogin = (req, res, next) => {
    const { username, password } = req.body;
    Usuario.findByUsername(username)
        .then(user => {
            if (user[0].length === 0) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }
            bcrypt.compare(password, user[0][0].password)
                .then(doMatch => {
                    if (doMatch) {
                        req.session.isLoggedIn = true;
                        req.session.user = user[0][0];
                        return req.session.save(err => {
                            res.redirect('/');
                        });
                    }
                    res.status(401).json({ message: 'Invalid username or password' });
                })
                .catch(err => {
                    console.log(err);
                });
        })
        .catch(err => console.log(err));
};
