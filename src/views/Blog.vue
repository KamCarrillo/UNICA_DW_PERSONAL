<template>
    <div class="w-full max-w-4xl mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols bg-gray-200">
        <h1 class="col-span-full text-4xl font-bold text-center text-blue-900 pt-10">Post</h1>

        <BlogPost class="col-span-full md:col-span-1 bg-white shadow-md rounded-lg p-6" title="FOTOGRAFIA CALLEJERA"
            content="Los textos al azar son una herramienta muy útil para aquellos que buscan inspiración, creatividad o simplemente quieren experimentar con diferentes formas de expresión escrita. Al generar un texto al azar, se pueden obtener resultados sorprendentes y originales que nunca hubieran surgido de otra manera.
            Existen diferentes métodos para generar textos al azar, desde el uso de software especializado hasta técnicas manuales como el  cut-up (recortar y
            reorganizar palabras y frases). Cada método tiene sus ventajas y desventajas, pero todos comparten la misma idea
            central: la aleatoriedad como fuente de inspiración. En algunos casos, los textos al azar pueden parecer
            incoherentes o carecer de sentido, pero en realidad pueden esconder significados más profundos y complejos. Esto
            se debe a que la mente humana tiene una gran capacidad para encontrar patrones y conexiones entre ideas
            aparentemente inconexas. Además, los textos al azar pueden ser una herramienta útil para superar el bloqueo
            creativo. Cuando nos enfrentamos a la página en blanco y no sabemos qué escribir, podemos recurrir a la
            aleatoriedad para romper con nuestros patrones de pensamiento habituales y explorar nuevos caminos creativos." title-class="text-lg font-semibold text-gray-800 mb-2"
            content-class="text-gray-600 leading-relaxed bg-yellow-100" />
        <div class="col-span-full md:col-span-1">
            <img src="src\assets\Recursos\IMG_5172.jpg" alt="Imagen 1" class="rounded-lg shadow-md" />
        </div>


        <BlogPost class="col-span-full md:col-span-1 bg-white shadow-md rounded-lg p-6" title="Post2"
            content="Los textos al azar son una herramienta muy útil para aquellos que buscan inspiración, creatividad o simplemente quieren experimentar con diferentes formas de expresión escrita. Al generar un texto al azar, se pueden obtener resultados sorprendentes y originales que nunca hubieran surgido de otra manera.
            Existen diferentes métodos para generar textos al azar, desde el uso de software especializado hasta técnicas manuales como el  cut-up (recortar y
            reorganizar palabras y frases). Cada método tiene sus ventajas y desventajas, pero todos comparten la misma idea
            central: la aleatoriedad como fuente de inspiración. En algunos casos, los textos al azar pueden parecer
            incoherentes o carecer de sentido, pero en realidad pueden esconder significados más profundos y complejos. Esto
            se debe a que la mente humana tiene una gran capacidad para encontrar patrones y conexiones entre ideas
            aparentemente inconexas. Además, los textos al azar pueden ser una herramienta útil para superar el bloqueo
            creativo. Cuando nos enfrentamos a la página en blanco y no sabemos qué escribir, podemos recurrir a la
            aleatoriedad para romper con nuestros patrones de pensamiento habituales y explorar nuevos caminos creativos." title-class="text-lg font-semibold text-gray-800 mb-2"
            content-class="text-gray-600 leading-relaxed bg-yellow-100" />
        <div class="col-span-full md:col-span-1">
            <img src="src\assets\Recursos\IMG_5421.jpg" alt="Imagen 1" class="rounded-lg shadow-md" />
        </div>
    </div>
</template>
  
<script>
import BlogPost from '../components/BlogPost.vue';

export default {
    components: {
        BlogPost,
    },
};
</script>

<style></style>