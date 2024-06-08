const db = require('../util/database');

module.exports = class Usuario {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    save() {
        return db.execute('INSERT INTO usuarios (username, password) VALUES (?, ?)', [this.username, this.password]);
    }

    static findByUsername(username) {
        return db.execute('SELECT * FROM usuarios WHERE username = ?', [username]);
    }
};
