// Función para cargar dinámicamente el contenido del artículo principal
function cargarContenido(url) {
    // Aquí podrías usar AJAX o Fetch para obtener el contenido desde un servidor
    // En este ejemplo, simplemente mostramos un mensaje
    alert(`Cargando contenido de ${url}`);
}

// Evento de clic para los enlaces de la barra de navegación
document.addEventListener('DOMContentLoaded', function () {
    const enlacesNavegacion = document.querySelectorAll('nav a');

    enlacesNavegacion.forEach(enlace => {
        enlace.addEventListener('click', function (event) {
            event.preventDefault();
            
            const url = this.getAttribute('href');
            
            // Cargar dinámicamente el contenido del artículo principal
            cargarContenido(url);
        });
    });
});

// Función para mostrar la fecha actual en el footer
function mostrarFecha() {
    const fechaActual = new Date();
    const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opcionesFecha);

    const footer = document.querySelector('footer');
    const parrafoFecha = document.createElement('p');
    parrafoFecha.textContent = `Fecha: ${fechaFormateada}`;
    
    // Insertar la fecha antes del párrafo existente en el footer
    footer.insertBefore(parrafoFecha, footer.firstChild);
}

// Llamar a la función para mostrar la fecha al cargar la página
mostrarFecha();

