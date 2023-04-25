<template>
  <div class = "bg-gray-200">
    <div>
      <br><br>
      <h1 class="text-4xl font-bold font-mono text-center text-gray-600" style="font-family: 'Inconsolata', monospace;">Kam Carrillo<span class="text-lg"> Fotografia</span></h1>
    <br><br>
    </div>
    <div class="w-full h-screen flex justify-center gap-4">
  <section class="w-full grid gap-4 md:grid-cols-2 lg:grid-cols-4">
    <img src="src\assets\Recursos\IMG_4321.jpg" alt="Imagen 1">
    <img src="src\assets\Recursos\IMG_4323.jpg" alt="Imagen 2">
    <img src="src\assets\Recursos\IMG_4394.jpg" alt="Imagen 3">
    <img src="src\assets\Recursos\IMG_5088.jpg" alt="Imagen 4">
    <img src="src\assets\Recursos\IMG_5323.jpg" alt="Imagen 5">
    <img src="src\assets\Recursos\IMG_5347.jpg" alt="Imagen 6">
    <img src="src\assets\Recursos\IMG_5377.jpg" alt="Imagen 7">
    <img src="src\assets\Recursos\IMG_5384.jpg" alt="Imagen 8">
  </section>
  <section class="w-full grid gap-4 md:grid-cols-2 lg:grid-cols-4">
    <img src="src\assets\Recursos\IMG_5770-5.jpg" alt="Imagen 5">
    <BlogPost class="col-span-full md:col-span-1 bg-white shadow-md rounded-lg p-6" title="1"
            content="Los textos al azar son una herramienta muy útil para aquellos que buscan inspiración, creatividad o simplemente quieren experimentar con diferentes formas de expresión escrita. Al generar un texto al azar, se pueden obtener resultados sorprendentes y originales que nunca hubieran surgido de otra manera.
            Existen diferentes métodos para generar textos al azar, desde el uso de software especializado hasta técnicas manuales como el  cut-up (recortar y
            reorganizar palabras y frases)." title-class="text-lg font-semibold text-gray-800 mb-2"
            content-class="text-gray-600 leading-relaxed bg-yellow-100" />
  </section>
</div>
  </div>
</template>

<script>
export default {};
</script>
<style>

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
    justify-items: center;
    align-items: center;
    max-width:120rem; 
    margin: 0 auto; 
}

img {
    max-width: 100%; 
    margin: 0 auto;
}
@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>