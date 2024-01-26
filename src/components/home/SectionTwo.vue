<script setup>
import CardOne from '../shorts/CardOne.vue';

const listCardOne = [
    {
        "imageName":"global_world.svg",
        "title":"Réseau Mondial",
        "description":"Profitez d'une plateforme d'emprunt d'argent unique surtout conçue pour apporter dignité et respect partout au monde.",
    },
    {
        "imageName":"fast_time.svg",
        "title":"Instantané",
        "description":"Profitez d'emprunter de l'argent de façon simplifiéet ultra rapide 24/24h et 7/7j.",
    },
    {
        "imageName":"valide_done.svg",
        "title":"Protection des données",
        "description":"Nous travaillons toujours plus pour vous assurer la sécurité de vos données personnelles et celle de vos transactions d'emprunts.",
    },
    {
        "imageName":"lock.svg",
        "title":"Sécurité",
        "description":"Profitez d'une plateforme ultra sécurisée avec un criptage unique qui assure protection totale de vos données et autres.",
    },
]
</script>
<template>
    <div class="w-full h-96 p-2 flex flex-col ">
        <div class="bg-white w-full h-20 flex items-center justify-center">
            <h1 class="text-2xl text-center font-semibold">Pourquoi nous choisir</h1>
        </div>
        <div class="h-full w-[95%] mx-auto flex flex-row items-center justify-between">
            <CardOne :imageName="listCardOne[0].imageName" :title="listCardOne[0].title" :description="listCardOne[0].description"/>
            <CardOne :imageName="listCardOne[1].imageName" :title="listCardOne[1].title" :description="listCardOne[1].description"/>
            <CardOne :imageName="listCardOne[2].imageName" :title="listCardOne[2].title" :description="listCardOne[2].description"/>
            <CardOne :imageName="listCardOne[3].imageName" :title="listCardOne[3].title" :description="listCardOne[3].description"/>
        </div>
    </div>
</template>