import { createRouter, createWebHistory, useRouter } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
    },
];

console.log(useRouter());
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
