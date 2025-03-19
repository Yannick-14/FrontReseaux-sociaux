<script setup>
    import { useHead } from '@vueuse/head';
    useHead(
    {
        title:'Analytic',
        script: [
            {
                async: true,
                src: 'https://www.googletagmanager.com/gtag/js?id=G-Y9N113PDNK'
            },
            {
                children: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-Y9N113PDNK');
                `
            }
        ]
        // meta:[
        //     { name: 'description', content: 'Page authentification pour administrateur.'},
        // ]
    }
    )

    
</script>
<!-- Google tag (gtag.js) -->
<!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y9N113PDNK"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Y9N113PDNK');
</script> -->
<template>
    <h1>Analytic</h1>
</template>