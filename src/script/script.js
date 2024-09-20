   // Selecciona elementos del DOM
   const saludarBtn = document.getElementById('saludarBtn');
   const mensaje = document.getElementById('mensaje');
   const nombreInput = document.getElementById('nombre');

   // Función para saludar
   function saludar() {
       const nombre = nombreInput.value;
       if (nombre) {
           mensaje.textContent = `¡Hola, ${nombre}!`;
       } else {
           mensaje.textContent = 'Por favor, escribe tu nombre.';
       }
   }

   // Agrega un evento al botón
   saludarBtn.addEventListener('click', saludar);