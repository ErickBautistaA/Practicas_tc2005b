// Obtener los elementos necesarios
const bochiSelect = document.getElementById('bochi');
const gatoSelect = document.getElementById('gato');
const terrenaitorSelect = document.getElementById('terrenaitor');
const sillaSelect = document.getElementById('silla');
const totalPagar = document.getElementById('total-pagar');
const IVA = document.getElementById('IVA');

const boton = document.getElementById('calcular-total');

boton.onclick = calcularTotal;

// Función para calcular el precio total
function calcularTotal() {
    
    const precioBochi = 400;
  const precioGato = 70;
  const precioTerrenaitor = 500;
  const precioSilla = 10;

  const cantidadBochi = parseInt(bochiSelect.value);
  const cantidadGato = parseInt(gatoSelect.value);

  const cantidadTerrenaitor = parseInt(terrenaitorSelect.value);
  const cantidadSilla = parseInt(sillaSelect.value);

  const total = (precioBochi * cantidadBochi) + (precioGato * cantidadGato) + (precioTerrenaitor * cantidadTerrenaitor) + (precioSilla * cantidadSilla);

  totalPagar.textContent = "Total a pagar: $" + total;
  IVA.textContent = "Iva: $" +  total * 0.10;

}

// Agregar controladores de eventos a los selects
gatoSelect.addEventListener('change', calcularTotal);
terrenaitorSelect.addEventListener('change', calcularTotal);
sillaSelect.addEventListener('change', calcularTotal);

// Calcular el total inicial
//calcularTotal();