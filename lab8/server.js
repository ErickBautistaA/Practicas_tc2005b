import fs from "fs";
import express, { request, response } from 'express'

const app = express()

app.use(express.urlencoded ({ extended: true }))
app.use(express.json())

app.get('/:variable', (req,res) => {
    fs.writeFileSync("archivo.txt", req.params.variable);
    res.json(`El string se ha escrito en el archivo '$archivo.txt' correctamente.`)
})

function arre () {
    var insertar = process.argv.slice(2);
    console.log(insertar);
    let arreglo = insertar[0].split(",");
   
    var promedio = 0;
    console.log(arreglo)
    for (let j = 0; j < arreglo.length; j++) {
        promedio= promedio+ parseInt(arreglo[j]); 
}
 promedio = promedio /arreglo.length;
 console.log (promedio);
}

//arre();


function escribirEnArchivo(nombreArchivo) {
    // Escribir el string en el archivo
    var insertar = process.argv.slice(3);
    let texto = insertar[0];
    fs.writeFileSync(nombreArchivo, texto);
    console.log(`El string se ha escrito en el archivo '${nombreArchivo}' correctamente.`);
}

//escribirEnArchivo("archivo.txt");

// Ultima funcion

function sumatoria(){
    var insertar = process.argv.slice(4);
    console.log(insertar);
    let arrglo = insertar[0].split(",");

    var sumatoria = 0;
    console.log(arreglo)
    for (let j = 0; j < arreglo.length; j++) {
        sumatoria= sumatoria+ parseInt(arreglo[j]); 
}
 console.log (sumatoria);
}

app.use((error, request, response, next) => {
    console.error(error.stack)
    response.status(500).send('Algo esta mal')
})

app.listen(8080, () => {
    console.log("Servicio en puerto 8080")
}) 