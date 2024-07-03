document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.subsection h3'); // Selecciona todos los títulos de las subsecciones

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const image = this.nextElementSibling; // Asume que la imagen es el siguiente elemento después del título
            image.style.display = image.style.display === 'none' ? 'block' : 'none'; // Alterna entre mostrar y ocultar
        });
    });
});
