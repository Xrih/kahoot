const nombreForm = document.getElementById('nombre-form');

nombreForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const nombreInput = document.getElementById('nombre');
  const nombre = nombreInput.value;

  if (nombre.trim() === '') {
    alert('Por favor, ingresa tu nombre para comenzar.');
    return;
  }

  // Almacenar el nombre en el almacenamiento local
  localStorage.setItem('nombre', nombre);

  // Redirigir a la página de la primera pregunta con el nombre como parámetro
  window.location.href = `../preguntas/pregunta_1.html`;
});