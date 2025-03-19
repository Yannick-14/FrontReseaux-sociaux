import { createRouter, createWebHistory } from 'vue-router';
import TheWelcome from '@/components/TheWelcome.vue';
import Authentification from '@/components/BackOffice/Authentification.vue';
import Analytic from '@/components/BackOffice/Analytic.vue';

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
  {
    path: '/Analytic',
    name: 'Analytic',
    component: Analytic
  },
];

const router = createRouter({
  history: createWebHistory(), // Ajoute cette ligne
  routes
});

export default router;
