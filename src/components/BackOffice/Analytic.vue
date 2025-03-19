<script setup>
import { useHead } from '@vueuse/head';
import { onMounted } from 'vue';

useHead({
  title: 'Analytic',
  script: [
    {
      // Injection du script GTM dans le head
      children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NTTJ3VZ6');`
    }
  ]
});

// Lors du montage, attendre quelques secondes puis afficher le contenu de dataLayer dans la console
onMounted(() => {
  setTimeout(() => {
    console.log('dataLayer:', window.dataLayer);
  }, 3000);
});
</script>

<template>
  <h1>Analytic</h1>
  <!-- Ce bloc noscript est affiché pour les navigateurs avec JavaScript désactivé -->
  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NTTJ3VZ6"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
  </noscript>
</template>
