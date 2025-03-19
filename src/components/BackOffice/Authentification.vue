<script setup>
    
    import { useHead } from '@vueuse/head';
    import { useRouter } from "vue-router";
    import { ref } from "vue";
    import axios from "axios";
    const router = useRouter();
    const GA_ID = 'G-Y9N113PDNK';

    useHead(
    {
        title:'Authentification',
        script: [
            {
            async: true,
            src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
            }
        ]
        // meta:[
        //     { name: 'description', content: 'Page authentification pour administrateur.'},
        // ]
    }
    );
    onMounted(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            window.dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', GA_ID);
    });

    const email=ref("");
    const mdp=ref("");
    

    const submitForm = async () => {
    const formData = new FormData();
    formData.append("email", email.value);
    formData.append("mdp", mdp.value);
    console.log("Data: "+formData);
    router.push("/");
    

    // try {
    //     const response = await axios.post("http://localhost:3000/api/creation", formData, {
    //         headers: {
    //             "Content-Type": "multipart/form-data"
    //         }
    //     });
    //     console.log("reponse "+response.data);
    //     if (response.status === 200) {
    //         redirection vers analytics
    //     } else {
    //         alert("Erreur lors de l'insertion : "+response.status+" "+ response.data.message);
    //     }
    // } catch (error) {
    //     alert(error.status+": "+error.message);
    //     console.error("Erreur :", error);
    // }
};
</script>
<template>
    <main>
        <h1>Authentification</h1>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" id="email" v-model="email" name="email" placeholder="Entrez votre email" />
            </div>

            <div class="form-group">
                <label for="mdp">Mot de passe:</label>
                <input type="text" id="mdp" v-model="mdp" name="mdp" placeholder="Entrez le mot de passe de securite" />
            </div>


            <button type="submit" class="btn-ajouter">S'authentifier</button>
        </form>
    </main>
</template>

<style scoped>
    main {
        background: linear-gradient(#037dcf, #4C1D95);
        width: 100vw;
        height: 100vh;
        padding: 2%;
        box-sizing: border-box;
        margin-top: -1%;
        margin-left: -1%;
    }
    h1
    {
        color: #fff3d6;
        text-decoration: none;
        margin-left: 40%;
        margin-top: 2%;
        margin-bottom: 5%;
    }
    form
    {
        
        /* display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 50px;
        width: 70%;
        max-width: 900px;
        margin: 0 auto;
        margin-top: 2%; */
        display: flex;
        flex-direction: column;
        margin-left: 30%;
        margin-right: 30%;
    }
    .form-group input::placeholder {
        color: #d1d1d1; /* Change la couleur du texte */
        opacity: 1; /* Ajuste l'opacité (1 = 100%) */
        font-style: italic; /* Optionnel : rend le texte en italique */
    }


    /* Chaque groupe label+input */
    .form-group {
        position: relative;   /* Permet de positionner le label en "absolu" */
        margin-bottom: 10%;
    }

    .form-group label {
        font-family: "Brush Script MT", cursive;
        font-size: 1.7rem;
        margin-bottom: 8px;
        margin-left: 10px;
        position: absolute;
        top: -35px;
        left: 0;
        color: #ebebeb;
        padding: 4px 8px;
    }

    .form-group input {
        width: 90%;
        border: 2px solid #f5f5f5;
        border-radius: 40px;
        padding: 12px 20px;
        background: transparent;
        color: #eeecec;
        outline: none;
        font-size: 1rem;
        -webkit-transition: width 0.4s ease-in-out;
        transition: width 0.4s ease-in-out;
    }
    input:hover
    {
        width: 100%;
    }

    button
    {
        grid-column: 1 / 3;
        margin: 0 auto;
        padding: 14px 40px;
        border: none;
        border-radius: 40px;
        background: d1d1d1;
        color: #d50000;
        font-size: 1.5rem;
        font-family: "Brush Script MT", cursive;
        cursor: pointer;
        transition: background 0.3s, color 0.3s;
    }
    @media (max-width: 1000px) {
        form{
            display: flex;
            flex-direction: column;
        }
    }

</style>