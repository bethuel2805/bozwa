<template>
    <div class="p-2 h-[130px] w-full px-10 mb-10">
        <div class="w-[92%]">
            <div class="flex items-center justify-between">
                <div>
                    <img src="../../assets/bozwa_logo.svg" alt="logo_bozwa" class="w-[188px] h-[85px]">
                </div>
                <div class="flex gap-6">
                    <button class="bg-[#F37021] h-[40px] w-[127px] text-white rounded-lg">Se connecter</button>
                    <button class="h-[40px] w-[127px] text-[#000] border border-[#F37021] rounded-lg">S'inscrire</button>
                </div>
            </div>
                <div class="h-full py-2">
                    <ul class="float-right flex items-center gap-10">
                        <router-link :to="{name:'home_view'}" active-class="underline underline-offset-8 decoration-[#F37021]">
                            <li class="cursor-pointer hover:animate-bounce hover:tracking-widest hover:underline hover:underline-offset-8 hover:decoration-[#F37021]">Accueil</li>
                        </router-link>

                        <router-link :to="{name:'home_view'}" active-class="underline underline-offset-8 decoration-[#F37021]">
                            <li class="cursor-pointer hover:animate-bounce hover:tracking-widest hover:underline hover:underline-offset-8 hover:decoration-[#F37021]">À Propos</li>
                        </router-link>

                        <router-link :to="{name:'home_view'}" active-class="underline underline-offset-8 decoration-[#F37021]">
                            <li class="cursor-pointer hover:animate-bounce hover:tracking-widest hover:underline hover:underline-offset-8 hover:decoration-[#F37021]">Prêteurs</li>
                        </router-link>

                        <router-link :to="{name:'home_view'}" active-class="underline underline-offset-8 decoration-[#F37021]">
                            <li class="cursor-pointer hover:animate-bounce hover:tracking-widest hover:underline hover:underline-offset-8 hover:decoration-[#F37021]">Emprunteurs</li>
                        </router-link>

                        <router-link :to="{name:'club_view'}" active-class="underline underline-offset-8 decoration-[#F37021]">
                            <li class="cursor-pointer hover:animate-bounce hover:tracking-widest hover:underline hover:underline-offset-8 hover:decoration-[#F37021]">Club</li>
                        </router-link>

                        <router-link :to="{name:'contact_view'}" active-class="underline underline-offset-8 decoration-[#F37021]">
                            <li class="cursor-pointer hover:animate-bounce hover:tracking-widest hover:underline hover:underline-offset-8 hover:decoration-[#F37021]">Nous Contacter</li>
                        </router-link>
                        <li class="cursor-pointer ">Français (☻♣)</li>
                    </ul>
                </div>
        </div>
    </div>

</template>