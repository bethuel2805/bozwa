<script setup>

import { defineProps } from 'vue';

const pathImage = "/src/assets/"

const data = defineProps({
  imageName: String,
  title: String,
  description: String,
})
</script>

<template>
    <div class="w-[315px] p-3">
        <div class="flex flex-col items-center w-full justify-center gap-6">
            <img :src="pathImage+data.imageName" :alt="data.imageName" class="w-10">
            <h1 class="font-semibold text-2xl">{{ data.title }}</h1>
            <p>{{ data.description }}</p>
            <button class="bg-[#F37021] w-[150px] px-1 py-2 gap-4 text-white rounded-md flex items-center justify-around">
                <span>En savoir plus</span>
                <span><img src="../../assets/arrow_right.svg" alt="wolrd_icon" class="w-[10px]"></span>
            </button>
        </div> 
    </div>
</template>