// Este código está escrito en JavaScript y no en Java.
// Parece que hay una confusión en la solicitud.
// El código proporcionado es para la manipulación del DOM en el lado del cliente
// y se ejecuta en el navegador web.

document.addEventListener('DOMContentLoaded', function() {
  // Selecciona todos los contenedores de carrusel vertical basados en el atributo 'data-carousel'.
  const carouselContainers = document.querySelectorAll('[data-carousel="vertical"]');

  // Itera sobre cada contenedor de carrusel encontrado.
  carouselContainers.forEach(container => {
      // Dentro de cada contenedor, selecciona todos los elementos con la clase 'carousel-item'.
      const items = container.querySelectorAll('.carousel-item');

      // Verifica si hay más de un elemento para habilitar el carrusel.
      if (items.length > 1) {
          let currentIndex = 0; // Índice del elemento actualmente visible.
          const speed = 2000; // Velocidad del carrusel en milisegundos (2 segundos entre cada slide).

          /**
           * Avanza al siguiente slide del carrusel.
           */
          function nextSlide() {
              currentIndex++; // Incrementa el índice actual.
              // Si el índice actual excede el número de elementos, vuelve al principio.
              if (currentIndex >= items.length) {
                  currentIndex = 0;
              }
              scrollToCurrent(true); // Desplaza el contenedor al elemento actual con animación suave.
          }

          /**
           * Desplaza el contenedor del carrusel al elemento actual.
           * @param {boolean} smooth - Indica si el desplazamiento debe ser suave (animado) o instantáneo.
           */
          function scrollToCurrent(smooth = false) {
              container.scrollTo({
                  top: items[currentIndex].offsetTop, // Calcula la posición superior del elemento actual.
                  behavior: smooth ? 'smooth' : 'instant' // Define el tipo de desplazamiento.
              });
          }

          // Establece un intervalo para llamar a la función nextSlide periódicamente,
          // creando el efecto de carrusel automático.
          setInterval(nextSlide, speed);

          // Comentario sobre una funcionalidad opcional más compleja:
          // Para un efecto de carrusel continuo más suave sin saltos al final,
          // se podría duplicar los primeros elementos y añadirlos al final,
          // y viceversa, ajustando la lógica de desplazamiento para que parezca infinito.
          // Esta implementación básica vuelve al principio directamente.
      }
  });
});