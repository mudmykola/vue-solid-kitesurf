<template>
  <div class="wrapper">
   <Navigation/>
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
<script setup>
import Navigation from "@/components/UI/Navigation.vue";
import Footer from "@/components/Footer.vue";
</script>
