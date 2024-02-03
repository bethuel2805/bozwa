<script setup>
import HeaderComponent from '../components/home/HeaderComponent.vue';
</script>

<template>
     <div>
        <div id="header" class="sticky top-0 z-[10] bg-white pb-1">
            <HeaderComponent/>
       </div>
       <!-- debut du body  -->
        <div>
            <div>
                <div class="w-full h-96 py-2 px-10 py-10 flex items-center">
                <div class="basis-4/12">
                    <h1 class="font-bold text-4xl pt-1 pb-5 text-[#F37021]">Prêteurs Individuels</h1>
                    <h2 class="font-semibold text-2xl pt-1 pb-5">Rejoignez les investisseurs individuels</h2>
                    <p class="mb-10 ">Prêter de l'argent en toute sécurité aux travailleurs CDI et obtenez des bénéfices de plus de <b class="font-bold text-4xl text-[#F37021]">+3%</b></p>

                    <div class="flex flex-row gap-10 justify-start">
                        <button class="bg-[#F37021] px-3 py-2 gap-4 text-white rounded-md flex items-center justify-around">
                            <span>Je prête mon argent</span>
                            <span><img src="/src/assets/arrow_right.svg" alt="wolrd_icon" class="w-[10px]"></span>
                        </button>
                        <button class="bg-[#F37021] px-3 py-2 gap-4 text-white rounded-md flex items-center justify-around">
                            <span>Je visualise la liste</span>
                            <span><img src="/src/assets/arrow_right.svg" alt="wolrd_icon" class="w-[10px]"></span>
                        </button>
                    </div>
                    </div>
                        <div class="basis-8/12 px-2">
                            <img src="/src/assets/preteur_person.svg" alt="first-image-money" class="h-[100%] w-[300px] relative left-40">
                        </div>
                </div>
            </div>
            <div class="w-full h-[300px] bg-[#D9D9D9] flex items-center flex-col justify-center">
                <h1 class="text-white font-semibold text-2xl py-5">Notre impact mondial</h1>
                <div class="flex flex-row justify-evenly w-[80%] my-5 text-white">
                    <div class="flex flex-col gap-6 items-center">
                        <p>Pays</p>
                        <h1 class="text-4xl font-bold">+189</h1>
                    </div>
                    <div class="flex flex-col gap-6 items-center">
                        <p>Investissements</p>
                        <h1 class="text-4xl font-bold">+120 md</h1>
                    </div>
                    <div class="flex flex-col gap-6 items-center">
                        <p>Investisseurs Satisfaits</p>
                        <h1 class="text-4xl font-bold">99%</h1>
                    </div>
                </div>
            </div>
            <!-- <div>
                <div class="w-full h-96 py-2 px-10 py-10 flex items-center">
                <div class="basis-4/12">
                    <h1 class="font-bold text-4xl pt-1 pb-5 text-[#F37021]">Entreprises emprunteurs</h1>
                    <h2 class="font-semibold text-2xl pt-1 pb-5">Plus jamais en panne d'argent avec nous</h2>
                    <p class="mb-10 ">L'alternative bancaire le plus adapté aux travailleurs et entreprises</p>

                    <div class="flex flex-row gap-10 justify-start">
                        <button class="bg-[#F37021] px-3 py-2 gap-4 text-white rounded-md flex items-center justify-around">
                            <span>Je prête mon argent</span>
                            <span><img src="/src/assets/arrow_right.svg" alt="wolrd_icon" class="w-[10px]"></span>
                        </button>
                        <button class="bg-[#F37021] px-3 py-2 gap-4 text-white rounded-md flex items-center justify-around">
                            <span>Je visualise la liste</span>
                            <span><img src="/src/assets/arrow_right.svg" alt="wolrd_icon" class="w-[10px]"></span>
                        </button>
                    </div>
                    </div>
                        <div class="basis-8/12 px-2">
                            <img src="/src/assets/empreteur_image2.svg" alt="first-image-money" class="h-[350px] w-[350px] relative left-40">
                        </div>
                </div>
            </div> -->
        </div>
    </div>
</template>