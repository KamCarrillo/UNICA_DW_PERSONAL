import { createApp } from 'vue'
import App from './App.vue';
import './style.css'
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Blog from './views/Blog.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/blog', component: Blog },
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');