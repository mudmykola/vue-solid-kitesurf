<template>
  <div class="kitesurf-banner bg-c104 rounded-[1.25rem] py-[6.5rem] mb-[5rem] relative">
    <div class="kitesurf-banner__el1 absolute">
      <img :src="kitesurfBannerEl" alt="kitesurf-el">
    </div>
    <div class="kitesurf-banner__el2 absolute right-0">
      <img :src="kitesurfBannerEl2" alt="kitesurf-el">
    </div>
    <div class="kitesurf-banner__cont text-center w-[51.875rem] mx-auto">
      <h2 class="text-[2.375rem] leading-[2.625rem] font-font-b pb-[2.75rem]">Unleash Your Inner Kitesurfer With SOLid:
        Book Your Lesson Today!</h2>
      <router-link :to="btnUrl">
        <Button :button-text="btnText"/>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/UI/Button.vue";
import { reactive } from 'vue';

const btnText = 'Book now';
const btnUrl = '/kitesurfing';

const kitesurfBannerEl = reactive('src/assets/image/svg/kitesurf-banner-el1.svg');
const kitesurfBannerEl2 = reactive('src/assets/image/svg/kitesurf-banner-el2.svg');
</script>
