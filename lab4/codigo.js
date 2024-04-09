result = prompt("Dame un numero");

n=0;
while(result > 0){
    n= n+1;
    document.write (n," ", n*n," ", n*n*n );
    document.write("<br>");

    result= result -1;
}

// Segunda pregunta.
var num1 = Math.floor(Math.random() * 100) + 1;
var num2 = Math.floor(Math.random() * 100) + 1;

var sumaCorrecta = num1 + num2;

var startTime = new Date();
var respuestaUsuario = parseInt(prompt("¿Cuál es la suma de " + num1 + " y " + num2 + "?"));
var endTime = new Date();

var tiempoTranscurrido = (endTime - startTime) / 1000; // Convertir milisegundos a segundos

if (respuestaUsuario === sumaCorrecta) {
    document.write("Respuesta correcta <br>");
} else {
    document.write("Respuesta incorrecta. La suma correcta es " + sumaCorrecta + ". <br>");
}

document.write("Tiempo transcurrido: " + tiempoTranscurrido + " segundos");

// Pregunta 3

function contador(arreglo) {

    var negativos = 0;
    var ceros = 0;
    var mayoresACero = 0;

    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] < 0) {
            negativos++;
        } else if (arreglo[i] === 0) {
            ceros++;
        } else {
            mayoresACero++;
        }
    }

    return {
        negativos: negativos,
        ceros: ceros,
        mayoresACero: mayoresACero
    };
}

var n = prompt ("dame el tamano del arreglo")
n = parseInt(n);

var numeros=[];

while (n > 0){
    num = prompt("dame un numero para el conjunto"); 

    numeros.push(parseInt(num));

    n--;
}


var resultado = contador(numeros);
document.write("<br> Números negativos:", resultado.negativos);
document.write("<br> Ceros:", resultado.ceros);
document.write("<br> Números mayores a cero:", resultado.mayoresACero,"<br>");

// pregunta 4

function promedios(matriz) {
    let promedios = [];

    for (let i = 0; i < matriz.length; i++) {
        let suma = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            suma += matriz[i][j];
        }
        let promedio = suma / matriz[i].length;
        promedios.push(promedio);
    }

    return promedios;
}

let cantidadMatrices = prompt("Ingrese la cantidad de matrices que desea crear:");
cantidadMatrices = parseInt(cantidadMatrices);
let cantidadNumeros = prompt("Ingrese la cantidad de números que tendrá cada matriz:");
cantidadNumeros = parseInt(cantidadNumeros);

let matrices = [];

// Crear las matrices y llenarlas con números aleatorios
for (let i = 0; i < cantidadMatrices; i++) {
    let matriz = [];

    for (let j = 0; j < cantidadNumeros; j++) {
        let numero = prompt("Ingrese el número " + (j + 1) + " para la matriz " + (i + 1) + ":");
        matriz.push(parseInt(numero));
    }

    matrices.push(matriz);
}

// Calcular los promedios de cada fila en cada matriz
let promediosMatrices = promedios(matrices);
document.write("Promedios de cada fila en cada matriz: ","[", promediosMatrices,"]");

//pregunta 5

function inverso(numero) {

    let cadenaNumero = numero.toString();
    
    // Separar los dígitos en un arreglo
    let arregloDigitos = cadenaNumero.split("");
    
    // Invertir el orden de los dígitos en el arreglo
    let arregloInverso = arregloDigitos.reverse();
    
    // Unir los dígitos invertidos en una cadena
    let cadenaInversa = arregloInverso.join("");
    
    // Convertir la cadena inversa de nuevo a un número
    let numeroInverso = parseInt(cadenaInversa);
    
    // Devolver el número inverso
    return numeroInverso;
}

let numero = prompt("dame un numero: ");
let numeroInverso = inverso(numero);
document.write("<br> Número original: ", numero);
document.write("<br> Número inverso: ", numeroInverso);

//Pregunta 6

class Persona {

    constructor(nombre, edad, oficio) {
      this.nombre = nombre;
      this.edad = edad;
      this.oficio = oficio;
    }
  
    // Método para mostrar la información de la persona
    mostrarInformacion() {
        document.write("<br> informacion de usuario <br>");
      document.write(`Nombre: ${this.nombre}`);
      document.write("<br>");
      document.write(`Edad: ${this.edad}`);
      document.write("<br>");
      document.write(`Oficio: ${this.oficio}`,"<br>");
    }
  
    // Método para mostrar información específica de la persona
    mostrarDato(dato) {
        switch(dato) {
        case 'nombre':
            document.write(`Nombre: ${this.nombre}`,"<br>");
            break;
        case 'edad':
            document.write(`Edad: ${this.edad}`,"<br>");
            break;
        case 'oficio':
            document.write(`Oficio: ${this.oficio}`,"<br>");
            break;
        default:
            document.write('Dato no válido');
        }
    }
}

  
 // Solicitar al usuario cuántas personas quiere crear
const cantidadPersonas = parseInt(prompt("¿Cuántas personas desea crear?"));

// Array para almacenar las personas creadas
const personas = [];

// Ciclo para crear las personas
for (let i = 0; i < cantidadPersonas; i++) {
  const nombre = prompt("Ingrese el nombre:");
  const edad = parseInt(prompt("Ingrese la edad:"));
  const oficio = prompt("Ingrese el oficio:");

  const persona = new Persona(nombre, edad, oficio);
  personas.push(persona);
}
  
  // Llamar al método mostrarInformacion
  personas.forEach(persona => persona.mostrarInformacion());
  
 // Solicitar al usuario el dato a mostrar
const datoMostrar = prompt("¿Qué dato desea mostrar? (nombre, edad, oficio)");

// Mostrar el dato seleccionado de todas las personas
personas.forEach(persona => persona.mostrarDato(datoMostrar));