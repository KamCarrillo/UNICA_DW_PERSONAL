<template>
    <nav class="flex items-center justify-between flex-wrap bg-red-900 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-semibold text-xl tracking-tight">Kam Carrillo</span>
        </div>
        <div class="block lg:hidden">
            <button
                class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
                <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
                    Inicio
                </router-link>
                <router-link to="/blog" class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
                    Blog
                </router-link>
                <router-link to="/about" class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
                    Acerca de mí
                </router-link>
                <router-link to="/contact" class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white">
                    Contacto
                </router-link>
            </div>
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