<script setup>
import HeaderComponent from "../components/home/HeaderComponent.vue"
import DividerComponent from "../components/home/DividerComponent.vue"
import SectionOneComponent from "../components/home/SectionOne.vue"
import SectionTwoComponent from "../components/home/SectionTwo.vue"
import SectionThreeComponent from "../components/home/SectionThree.vue"
import SectionFourComponent from "../components/home/SectionFour.vue"
import SectionFiveComponent from "../components/home/SectionFive.vue"
import SectionSixComponent from "../components/home/SectionSix.vue"
import SectionSevenComponent from "../components/home/SectionSeven.vue"
import FooterComponent from "../components/home/FooterComponent.vue"
</script>
<template>
    <div>
       <div id="header" class="sticky top-0 z-[10] bg-white pb-1">
        <HeaderComponent/>
       </div>
       <div id="sectionOne">
        <SectionOneComponent/>
       </div>
       <div id="divider">
        <DividerComponent/>
       </div>
       <div id="why_us">
        <SectionTwoComponent/>
       </div>
       <div id="our_prensence">
        <SectionThreeComponent/>
       </div>
       <div id="world_image">
        <SectionFourComponent/>
       </div>
       <div id="test_emprunt">
        <SectionFiveComponent/>
       </div>
       <div id="testimony">
        <SectionSixComponent/>
       </div>
       <div id="media_speaker">
        <SectionSevenComponent/>
       </div>
       <div id="footer">
        <FooterComponent/>
       </div>
    </div>
</template>