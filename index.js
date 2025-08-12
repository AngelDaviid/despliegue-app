let contador = 0;

// Obtener el contador por su ID
const contadorDisplay = document.getElementById('contador');

// Obtener los botones por su id
const btnClick = document.getElementById('btn-click');
const btnReset = document.getElementById('btn-reset');

// Obtener el elemento de fecha por su ID
const fechaElement = document.getElementById('fecha');

//Fuunción para actualizar contador
function actualizarContador() {
    contador++; // Aumenta el contador en 1
    contadorDisplay.textContent = contador; // Actualiza el texto del contador

    // Animación simple
    contadorDisplay.style.transform = 'scale(1.2)'; // Aumenta el tamaño del contador al hacer clic
    setTimeout(() => {
        contadorDisplay.style.transform = 'scale(1)'; // Vuelve al tamaño original después de 200ms
    }, 200);
}

// Función para resetear el contador
function resetearContador() {
    contador = 0; // Reinicia el contador a 0
    contadorDisplay.textContent = contador; // Actualiza el texto del contador
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    const ahora = new Date(); // Obtiene la fecha y hora actual
    fechaElement.textContent = ahora.toLocaleDateString('es-CO'); // Formatea la fecha al formato colombiano
    const entorno = document.getElementById('entorno').textContent;
    cambiarEntorno(entorno)
});

// Event listeners
btnClick.addEventListener('click', actualizarContador); // Escucha el evento click y invoca la función para actualizar el contador
btnReset.addEventListener('click', resetearContador); // Escucha el evento click y invoca la función para resetear el contador


// Funcion para simular cambio de entorno
function cambiarEntorno(nuevoEntorno){
    //Cambiar color según entorno
    const statusCard = document.querySelector('.status-card'); // Selecciona el elemento de la tarjeta de estado
    switch(nuevoEntorno){ // Cambia el color de fondo según el entorno
        case 'Desarrollo':
            statusCard.style.borderLeftColor =  '#4ECDC4'; // Color para Desarrollo
            break;
        case 'Pruebas':
            statusCard.style.borderLeftColor = '#FFD93D'; // Color para Pruebas
            break;
        case 'Producción':
            statusCard.style.borderLeftColor = '#68CF7F'; // Color para Producción
            break;
    }
}

