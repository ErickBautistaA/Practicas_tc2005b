const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();

// Configuración de almacenamiento de multer
const fileStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads');  // Guardar archivos en la carpeta 'uploads'
    },
    filename: (req, file, callback) => {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        callback(null, `${timestamp}-${file.originalname}`);  // Evitar duplicados
    }
});

// Filtro de archivos para aceptar solo imágenes
const fileFilter = (req, file, callback) => {
    if (file.mimetype === 'image/png' || 
        file.mimetype === 'image/jpg' || 
        file.mimetype === 'image/jpeg') {
        callback(null, true);
    } else {
        callback(null, false);
    }
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('archivo'));

// Ruta estática para la carpeta de subidas
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Ruta para servir el formulario HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para manejar la subida de archivos
app.post('/archivo', (req, res) => {
    if (req.file) {
        const ruta_archivo = req.file.path;
        res.send(`Archivo subido exitosamente: ${ruta_archivo}`);
    } else {
        res.status(400).send('No se subió ningún archivo o el archivo no es del tipo permitido.');
    }
});

// Configuración del puerto del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
