<template>
    <nav class="flex items-center justify-between flex-wrap bg-red-900 p-6">
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <router-link to="/" class="flex items-center flex-shrink-0 text-white mr-6 font-semibold text-xl tracking-tight">
            Kam Carrillo
          </router-link>
          <router-link to="/blog" class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4 font-semibold px-10 py-1">
            Blog
          </router-link>
          <router-link to="/about" class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4 font-semibold px-10 py-1">
            Acerca de mí
          </router-link>
          <router-link to="/contact" class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white font-semibold px-10 py-1">
            Contacto
          </router-link>
        </div>
      </nav>
</template>
  
<script>
export default {};
</script>
  
<style>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

ul {
    display: flex;
    justify-content: flex-end;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

li {
    margin-left: 1rem;
}

@media (max-width: 768px) {
    li {
        margin: 0;
        margin-top: 1rem;
    }
}
</style>