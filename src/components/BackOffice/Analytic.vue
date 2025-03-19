<!-- <template>
    <h1>Analytic</h1>
</template> -->

<script setup>
import { useHead } from '@vueuse/head';

useHead({
  title: 'Analytic',
  script: [
    {
      // Ce script est injecté dans le head pour charger GTM
      children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NTTJ3VZ6');`
    }
  ]
});
</script>

<template>
  <h1>Analytic</h1>
  <!-- Ce bloc noscript est affiché dans le body pour les navigateurs désactivant JavaScript -->
  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NTTJ3VZ6"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
  </noscript>
</template>
