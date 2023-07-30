<template>
  <div class="kitesurf-inner">
    <div class="kitesurf-text">
      <div class="kitesurf-text__box">
        <h1>{{ title }}</h1>
        <p>{{ desc }}</p>
          <Button :button-text="btnText"/>
      </div>
    </div>
    <div class="kitesurf-img"></div>
  </div>
</template>

<script setup>
import Button from "@/components/UI/Button.vue";

const btnText = 'Book now';
const title = 'Kitesurfing';
const desc = '“We can lift ourselves out of ignorance, we can find ourselves as creatures of excellence and intelligence and skill. We can be free! We can learn to fly!”';
</script>
