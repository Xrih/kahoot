//Obtener todas las opciones de respuesta
const opcionesRespuesta = document.querySelectorAll('.box > div');

// Variable para almacenar el puntaje
let puntaje = 0;

// Agregar un evento de clic a cada opción de respuesta
opcionesRespuesta.forEach((opcion, index) => {
  opcion.addEventListener('click', () => {
    // Lógica para manejar la respuesta seleccionada
    const respuestaSeleccionada = index + 1;
    const esRespuestaCorrecta = verificarRespuesta(respuestaSeleccionada);

    if (esRespuestaCorrecta) {
        puntaje++;
    }
    
    // Almacena los resultados de cada pregunta en el almacenamiento local
    const resultados = JSON.parse(localStorage.getItem('resultados')) || [];
    resultados.push(esRespuestaCorrecta);
    
    localStorage.setItem('resultados', JSON.stringify(resultados));
    
    // Almacena el número total de respuestas incorrectas
    const respuestasIncorrectas = JSON.parse(localStorage.getItem('respuestasIncorrectas')) || 0;
    if (!esRespuestaCorrecta) {
        localStorage.setItem('respuestasIncorrectas', respuestasIncorrectas + 1);
    }
    
    // Almacena el nombre en el almacenamiento local
    const nombre = localStorage.getItem('nombre');
    
    // ... (código existente)
    
    mostrarResultado(respuestaSeleccionada, esRespuestaCorrecta);
  });
});



// Función para verificar si la respuesta seleccionada es correcta (solo como ejemplo)
function verificarRespuesta(respuestaSeleccionada) {
  // Aquí puedes implementar tu propia lógica para verificar si la respuesta es correcta
  // En este ejemplo, asumiremos que la respuesta 3 es la correcta
    return respuestaSeleccionada === 4;
}
const reloj = document.querySelector(".timer");
const totalPreguntas = 5; // Cambia esto al número total de preguntas en tu cuestionario

var contador = 20;
const id = setInterval(() => {
    reloj.innerHTML = contador--;
    if (contador < 0) {
        clearInterval(id);
        reloj.style.backgroundColor = "red";
        mostrarResultado(1, false); // Cambia el número de pregunta y la respuesta correcta según corresponda
    }
}, 1000);

function mostrarResultado(respuestaSeleccionada, esCorrecta) {
    // Desactivar los clics en las opciones después de seleccionar una respuesta
    opcionesRespuesta.forEach(opcion => {
        opcion.removeEventListener('click', () => {});
        opcion.style.pointerEvents = 'none';
    });

    // Cambiar el color de fondo de la respuesta seleccionada
    opcionesRespuesta[respuestaSeleccionada - 1].style.backgroundColor = esCorrecta ? 'green' : 'red';

    // Mostrar un mensaje según la respuesta sea correcta o incorrecta
    const mensaje = document.createElement("div");
    mensaje.textContent = esCorrecta ? "¡Respuesta correcta!" : "Respuesta incorrecta";
    mensaje.style.position = "fixed";
    mensaje.style.top = "50%";
    mensaje.style.left = "50%";
    mensaje.style.transform = "translate(-50%, -50%)";
    mensaje.style.backgroundColor = esCorrecta ? "green" : "red";
    mensaje.style.color = "white";
    mensaje.style.fontSize = "24px";
    mensaje.style.padding = "10px";
    document.body.appendChild(mensaje);

    // Redirigir a la página de la siguiente pregunta después de un tiempo determinado
    setTimeout(() => {
        const siguientePregunta = 3; // Cambia esto al número de la siguiente pregunta
        if (siguientePregunta <= totalPreguntas) {
            // Asegúrate de construir correctamente la URL de redirección
            window.location.href = `pregunta_${siguientePregunta}.html`;
        } else {
            // Si no hay más preguntas, redirigir a la página de resultados o finalización del juego
            window.location.href = 'resultado.html'; // Cambia esto a tu página de resultados
        }
    }, 2000); // Cambia el tiempo (en milisegundos) a tu preferencia
}