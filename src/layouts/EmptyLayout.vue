<template>
  <div class="wrapper">
   <Navigation/>
    <main>
      <slot />
    </main>
    <div class="xl:container  pr-[0.938rem] pl-[0.938rem]">
      <Footer />
    </div>

  </div>
</template>
<script setup>
import Navigation from "@/components/UI/Navigation.vue";
import Footer from "@/components/Footer.vue";
</script>
