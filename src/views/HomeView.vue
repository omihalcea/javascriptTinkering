<template>
  <div class="bg-gray-900 p-8 flex items-center justify-center min-h-screen animation-fade-color">
    <div class="text-left content-fade animate-fade-in">
      <h1 class="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl">Discover new</h1>
      <h1 class="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl"> great
        <a href="/films"
           class="text-purple-400 hover:text-purple-600 transition duration-300 underline-hover">Films</a> or
      </h1>
      <h1 class="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl">
        <a href="/videogames" class="text-purple-400 hover:text-purple-600 transition duration-300 underline-hover">Videogames</a>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
body {
  font-family: 'Poppins', sans-serif;
}

/* Animació per a la transició d'opacitat del text*/
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Animació per a la transició de color de fons */
@keyframes fadeColor {
  0% {
    background-color: #000000; /* bg-gray-900 */
  }
  100% {
    background-color: #100f17; /* Canvia a negre */
  }
}

.animation-fade-color {
  animation: fadeColor 2s forwards; /* Animació del canvi de color de fons */
}

/* Aplicar l'animació al contingut */
.content-fade {
  opacity: 0; /* Inici amb opacitat 0 */
  animation: fadeIn 5s forwards; /* Animació de 2 segons */
}

.underline-hover {
  position: relative;
  color: #b48ce0; /* Color morat per defecte */
  text-decoration: none;
  transition: color 0.3s ease;
}

.underline-hover::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 6px;
  bottom: 0;
  left: 0;
  background-color: #7c3aed; /* Manté el color morat a la subratllada */
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out;
}

.underline-hover:hover::after {
  visibility: visible;
  transform: scaleX(1);
}

.header {
  color: #100F17;
}
</style>