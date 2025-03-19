<script setup>
import { useHead } from '@vueuse/head';
import { onMounted } from 'vue';

const GA_ID = 'G-Y9N113PDNK'; // Remplace par ton ID de suivi

useHead({
  title: 'Analytic',
  script: [
    {
      async: true,
      src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    }
  ]
});

// Initialiser Google Analytics après le chargement du script
onMounted(() => {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', GA_ID);
});
</script>

<template>
  <h1>Analytic</h1>
</template>
