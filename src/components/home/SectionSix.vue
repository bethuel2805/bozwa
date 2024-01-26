<script setup>

const dataUser = [
    {
        "photo":"https://randomuser.me/api/portraits/men/0.jpg",
        "text-desc": "Un grand merci à la plateforme bozwa qui a su apporter satisfaction auprès du public national mais international. ",
        "first_name":"Claude Riguel",
        "family_name": "VEMBE B",
        "job": "CEO of Bozwa"
    },
    {
        "photo":"https://randomuser.me/api/portraits/men/1.jpg",
        "text-desc": "Un grand merci à la plateforme bozwa qui a su apporter satisfaction auprès du public national mais international. ",
        "first_name":"John",
        "family_name": "DOE",
        "job": "CEO of SNPC Congo"
    },
    {
        "photo":"https://randomuser.me/api/portraits/men/50.jpg",
        "text-desc": "Un grand merci à la plateforme bozwa qui a su apporter satisfaction auprès du public national mais international. ",
        "first_name":"Brice",
        "family_name": "Olingui",
        "job": "CEO of Regal Congo"
    },
]
</script>

<template>
    <div class="w-full">
       <div class="p-4">
        <h1 class="text-lg font-semibold text-center my-5">Ceux qui témoigne de nous</h1>
        <div class="h-[350px] bg-[#F0F5F7] w-[92%] mx-auto flex flex-row items-center justify-between rounded-lg">
            <div v-for="(data, i) in dataUser" :key="i" class="h-[250px] w-[440px] flex flex-col gap-5 p-2">
                <img :src="data.photo" :alt="i" class="rounded-full w-16 self-center">
                <p class="font-[sans-serif]">{{ data['text-desc'] }}</p>
                <div>
                    <h4>{{ data.first_name }} <b>{{ data.family_name }}</b></h4>
                    <p>{{ data.job }}</p>
                </div>
            </div>
        </div>
       </div>
    </div>
</template>