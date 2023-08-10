document.addEventListener('DOMContentLoaded', () => {
    const nombreSpan = document.getElementById('nombre');
    const correctasSpan = document.getElementById('preguntas-correctas');
    const incorrectasSpan = document.getElementById('preguntas-incorrectas');
    const resultadosContainer = document.getElementById('resultados-container');
    
    // Obtener el nombre y resultados del almacenamiento local
    const nombre = localStorage.getItem('nombre');
    const resultados = JSON.parse(localStorage.getItem('resultados'));
    
    // Eliminar todo el almacenamiento local
    localStorage.clear();
    
    // Calcular la cantidad de respuestas correctas e incorrectas
    const respuestasCorrectas = resultados.filter(resultado => resultado).length;
    const respuestasIncorrectas = resultados.length - respuestasCorrectas;
    
    // Mostrar el nombre, respuestas correctas e incorrectas en la página de resultados
    nombreSpan.textContent = nombre;
    correctasSpan.textContent = respuestasCorrectas;
    incorrectasSpan.textContent = respuestasIncorrectas;
    
    // Mostrar los resultados de cada pregunta
    for (let i = 0; i < resultados.length; i++) {
        const preguntaNumero = i + 1;
        const resultadoDiv = document.createElement('div');
        resultadoDiv.textContent = `Pregunta ${preguntaNumero}: ${resultados[i] ? 'Correcta' : 'Incorrecta'}`;
        resultadosContainer.appendChild(resultadoDiv);
    }
});