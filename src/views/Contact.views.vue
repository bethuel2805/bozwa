<script setup>
import HeaderComponent from '../components/home/HeaderComponent.vue';
</script>

<template>
    <div>
        <div id="header" class="sticky top-0 z-[10] bg-white pb-1">
            <HeaderComponent/>
       </div>
       <div class="w-[80%] mx-auto h-96">
            <h1 class="text-2xl text-[#f37021] font-semibold">Nous Contacter</h1>
            <div class="h-full w-[80%] float-right">
                <form class="w-[80%] flex flex-col gap-8">

                    <select name="" id="" class="py-4 px-2 rounded-md border border-[#F37021]">
                        <option value="pb">Quel est votre problème</option>
                    </select>

                    <div>
                        <input type="mail" placeholder="Entrer votre e-mail" class="py-4 px-2 rounded-md border border-[#F37021] w-full">
                    </div>

                    <div>
                        <p class="text-sm">Veuillez entrer l'adresse e-mail où vous souhaitez recevoir notre réponse. Si vous êtes un <b>prêteur/Emprunteur</b> certifié de <b>bozwa</b>, veuillez inclure l'adresse e-mail que vous avez utilisée lorsque vous vous êtes inscrit sur la plateforme afin de nous aider à localiser votre compte rapidement.</p>
                    </div>

                    <div>
                        <input type="text" placeholder="Entrer le Whatsapp" class="py-4 px-2 rounded-md border border-[#F37021] w-full">
                    </div>

                    <div>
                        <textarea placeholder="Ecrivez-nous un message" class="h-[30vh] p-4 px-2 rounded-md border border-[#F37021] w-full"></textarea>
                    </div>

                    <div>
                        <p class="text-sm">Informations de base sur la protection des données : la <b>Société bozwa</b> recueille vos données pour être en mesure de répondre aux questions, suggestions ou plaintes déposées. Plus d'infos Politique de confidentialité.</p>
                    </div>

                    <div>
                        <button class="flex items-center justify-evenly w-[180px] h-[40px] bg-[#F37021] rounded-md text-white float-right mb-5">Envoyer <span class="w-2"><img src="/src/assets/arrow_right.svg"></span></button>
                    </div>

                </form>
            </div>
       </div>
    </div>
</template>