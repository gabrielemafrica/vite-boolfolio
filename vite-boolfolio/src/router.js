import { createRouter, createWebHistory } from 'vue-router';

// import AppHome from './pages/AppHome.vue';
// import ProjectShow from './pages/ProjectShow.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./pages/AppHome.vue')
        },
        {
            path: '/projects/:id',
            name: 'ProjectShow',
            component: () => import('./pages/ProjectShow.vue')
        },
    ]
});
export { router };