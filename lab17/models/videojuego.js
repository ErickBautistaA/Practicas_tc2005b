const db = require('../util/database');

module.exports = class Videojuego {
    constructor(nombre, plataforma) {
        this.nombre = nombre;
        this.plataforma = plataforma;
    }

    save() {
        return db.execute(
            'INSERT INTO videojuegos (nombre, plataforma) VALUES (?, ?)',
            [this.nombre, this.plataforma]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM videojuegos');
    }

    static findById(id) {
        return db.execute('SELECT * FROM videojuegos WHERE id = ?', [id]);
    }
};
