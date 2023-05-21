<script>
import Navigation from "@/components/UI/Navigation.vue";
import HeaderBg from '@/assets/image/header-bg.webp';
import HeaderContent from "@/components/UI/HeaderContent.vue";

export default {
  components: {
    Navigation,
    HeaderContent
  },
  props: {
    title: {
      type: String,
      required: true,
    default: 'Kitesurfing school Portugal at Obidos Lagoon',
    },
    desc: {
      type: String,
      required: true,
      default: 'Welcome to SOLid Kite Surf',
    },
  },
  computed: {
    bg() {
      return {
        "background-image": `url(${HeaderBg})`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
      }
    }
  },
};
</script>


<template>
  <div class=" container-1320">
    <div>
      <Navigation/>
      <HeaderContent :title="title" :desc="desc"  class=" rounded-20 h-768 " :style="bg"/>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>