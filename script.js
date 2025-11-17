document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.getElementById('botones-navegacion');
    const menuContenedor = document.getElementById('menu-contenedor'); // El elemento <header> completo
    const menuToggle = document.querySelector('.menu-toggle');

    // Función para manejar el Menú de Hamburguesa (para móvil)
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navContainer.classList.toggle('visible');
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // 1. Lógica de Ocultación/Fade-out (Escritorio)
    
    // Solo aplicar el efecto en vistas de escritorio (mayor a 768px)
    function setupDesktopHiding() {
        if (window.innerWidth > 768) {
            
            // Ocultar la barra COMPLETA por defecto al cargar
            menuContenedor.classList.add('oculto-total'); 

            // Mostrar la barra al pasar el mouse sobre ella
            menuContenedor.addEventListener('mouseenter', () => {
                menuContenedor.classList.remove('oculto-total');
            });

            // Ocultar la barra al quitar el mouse de ella
            menuContenedor.addEventListener('mouseleave', () => {
                menuContenedor.classList.add('oculto-total');
            });
        } else {
             // Asegurar que no se apliquen clases de ocultación en móvil
             menuContenedor.classList.remove('oculto-total');
        }
    }
    
    // Ejecutar la función al cargar la página
    setupDesktopHiding();

    // Re-evaluar si el tamaño de la ventana cambia (ej. de móvil a escritorio)
    window.addEventListener('resize', setupDesktopHiding);
});