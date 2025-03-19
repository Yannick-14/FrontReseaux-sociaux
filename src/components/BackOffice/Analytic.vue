<script setup>
import { useHead } from '@vueuse/head';
import { ref, onMounted } from 'vue';

useHead({
  title: 'Analytic',
  script: [
    {
      children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NTTJ3VZ6');`
    }
  ]
});

const dataLayerItems = ref([]);
const currentUsers = ref(0);
const usersByCountry = ref({});

// Fonction pour mettre à jour les statistiques
const updateAnalytics = () => {
  if (window.dataLayer) {
    dataLayerItems.value = [...window.dataLayer];

    // Supposons que chaque objet dataLayer ait une clé 'user' avec un champ 'country'
    const users = dataLayerItems.value.filter(item => item.event === 'userData');

    // Mise à jour du nombre d'utilisateurs en temps réel
    currentUsers.value = users.length;

    // Comptabilisation des utilisateurs par pays
    const countryCount = {};
    users.forEach(user => {
      const country = user.country || 'Inconnu';
      countryCount[country] = (countryCount[country] || 0) + 1;
    });

    usersByCountry.value = countryCount;
  }
};

// Rafraîchir les données toutes les 3 secondes
onMounted(() => {
  setTimeout(updateAnalytics, 3000);
  setInterval(updateAnalytics, 5000);
});
</script>

<template>
  <h1>Analytic Data</h1>

  <div class="stats">
    <p><strong>Utilisateurs en temps réel :</strong> {{ currentUsers }}</p>
  </div>

  <div v-if="Object.keys(usersByCountry).length === 0">
    <p>Chargement des données...</p>
  </div>

  <div v-else>
    <h2>Nombre d'utilisateurs par pays</h2>
    <table class="data-table">
      <thead>
        <tr>
          <th>Pays</th>
          <th>Nombre d'utilisateurs</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(count, country) in usersByCountry" :key="country">
          <td>{{ country }}</td>
          <td>{{ count }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NTTJ3VZ6"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
  </noscript>
</template>

<style scoped>
.stats {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-family: Arial, sans-serif;
}

.data-table th, .data-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.data-table th {
  background-color: #f4f4f4;
  color: #333;
}

.data-table tr:nth-child(even) {
  background-color: #fafafa;
}

.data-table tr:hover {
  background-color: #f1f1f1;
}

h1, h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}
</style>
