<script setup>
import HeaderComponent from '../components/home/HeaderComponent.vue';
</script>

<template>
     <div>
        <div id="header" class="sticky top-0 z-[10] bg-white pb-1">
            <HeaderComponent/>
       </div>
        <div class="w-[95%] mx-auto flex gap-5 p-2">
            <div class="basis-2/4">
                <div class="w-[65%] m-5 flex flex-col gap-7">
                    <h1 class="text-[#F37021] text-xl font-semibold">Club</h1>
                    <h2 class="text-xl font-semibold">Vous êtes porteur de projet ?</h2>
                    <p>Rejoignez le <b>Club 20</b> afin de pouvoir financé la création de votre entreprise où son développement.</p>
                    <div>
                        <button class="flex items-center justify-evenly w-[180px] h-[40px] bg-[#F37021] rounded-md text-white mb-5">Je m'inscris <span class="w-2"><img src="/src/assets/arrow_right.svg"></span></button>
                    </div>
                </div>
            </div>
            <div class="basis-2/4 mb-5">
                <div class="w-[85%] h-full float-right bg-[#F37021] px-8 py-5 rounded-l-3xl mb-5">
                    <div class="h-full flex flex-col gap-7">
                        <h1 class="text-white font-semibold text-2xl">Club 20</h1>
                        <p class="text-white">Veillez entrer le code d'accès au club</p>
                        <div class="flex w-full flex-row justify-between ">
                            <div v-for="i in 5" :key="i" class="bg-gray-300 w-12 h-12 rounded"></div>
                        </div>
                        <p class="text-right my-2 w-full text-white">Code pin erroné ?</p>
                        <div class="self-center">
                            <img src="/src/assets/arrow_right.svg">
                        </div>
                        <div class="flex flex-col gap-5">
                            <form class="flex flex-col gap-5 my-1">
                                <input type="text" placeholder="Email" class="h-12 border rounded-lg px-2">
    
                                <input type="password" placeholder="Mot de passe" class="h-12 border rounded-lg px-2">
                            </form>
                            <p class="text-white text-right mb-5">Mot de passe oublié ?</p>
                            <div>
                                <button class="flex items-center justify-evenly w-[180px] h-[40px] bg-[#fff] rounded-md text-[#F37021] float-right mb-8">Envoyer <span class="w-2"><img src="/src/assets/arrow_right_color.svg"></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
</template>