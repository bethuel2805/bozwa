<script setup>
import HeaderComponent from '../components/home/HeaderComponent.vue';
</script>

<template>
     <div>
        <div id="header" class="sticky top-0 z-[10] bg-white pb-1">
            <HeaderComponent/>
       </div>
        <div class="w-[95%] float-right flex gap-5 p-2">
            <div class="basis-2/4">
                <div class="w-[65%] m-5 flex flex-col gap-7">
                    <h1 class="text-[#F37021] text-xl font-semibold">Club</h1>
                    <h2 class="text-xl font-semibold">Vous êtes porteur de projet ?</h2>
                    <p>Rejoignez le <b>Club 20</b> afin de pouvoir financé la création de votre entreprise où son développement.</p>
                    <div>
                        <button class="px-4 py-3 bg-[#F37021] text-sm rounded-md text-white mb-5">Je m'inscris    ♠♣♦</button>
                    </div>
                </div>
            </div>
            <div class="basis-2/4 bg-slate-600">
                <div class="relative top-20 bg-green-500 p-5 h-[80%]">

                </div>
            </div>
        </div>
     </div>
</template>