import { createRouter, createWebHistory } from 'vue-router';
import TheWelcome from '@/components/TheWelcome.vue';
import Authentification from '@/components/BackOffice/Authentification.vue';

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: TheWelcome
  },
  {
    path: '/Authentification',
    name: 'Authentification',
    component: Authentification
  },
];

const router = createRouter({
  history: createWebHistory('/front-reseaux-sociaux/'), // Ajoute cette ligne avec la base URL du projet
  routes
});


export default router;
