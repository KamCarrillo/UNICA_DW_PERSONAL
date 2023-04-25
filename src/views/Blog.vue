<template>
    <div class="w-full max-w-4xl mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols bg-gray-200">
        <!--<h1 class="col-span-full text-4xl font-bold text-center text-blue-900 pt-10">FOTOGRAFIA CALLEJERA</h1>-->

        <div class="col-span-full md:col-span-1" style="float:left; margin-right:20px;">
            <img src="src\assets\Recursos\IMG_5172.jpg" alt="Imagen 1" class="rounded-lg shadow-md" />
        </div>
        <div style="overflow:hidden;">
            <p>Este es un texto de ejemplo que rodea la imagen.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor, quam eget ultrices varius, velit elit aliquet eros, a vulputate lectus mauris eget lacus. Nulla facilisi. Donec quis feugiat odio. Vivamus volutpat neque in nibh interdum, vel lacinia tellus dignissim. Nam euismod sem ac semper laoreet. Sed sit amet lorem euismod, sollicitudin est vel, bibendum enim. Nulla sollicitudin varius ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vel massa id nisl luctus hendrerit in nec sapien. Curabitur maximus magna vitae dui luctus, ac finibus dolor luctus. Praesent scelerisque risus quis orci bibendum, eget sollicitudin eros dapibus. Maecenas pulvinar consequat bibendum. Donec vestibulum, sem eget consectetur malesuada, nisl nisi tincidunt enim, a scelerisque elit felis nec ipsum. Fusce aliquam enim lectus, ut eleifend turpis faucibus eu. </p>
        </div>


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