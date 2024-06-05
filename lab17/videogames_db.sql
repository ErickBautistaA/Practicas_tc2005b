CREATE DATABASE videogames_db;

USE videogames_db;

CREATE TABLE videojuegos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    plataforma VARCHAR(255) NOT NULL
);

INSERT INTO videojuegos (nombre, plataforma) VALUES ('The Legend of Zelda', 'Nintendo');
INSERT INTO videojuegos (nombre, plataforma) VALUES ('God of War', 'PlayStation');
