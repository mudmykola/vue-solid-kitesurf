<template>
<div class="container-1320">
  <BannerContent class="rounded-20"  :style="bg" :title="title" :desc="desc"/>
</div>
</template>

<script>
import BannerContent from "@/components/UI/BannerContent.vue";
import bgImage from  '@/assets/image/bg-banner.webp';
export default {
  name: "Banner",
  components: {BannerContent},
  props: {
    title: {
      type: String,
      required: true,
      default: 'Do You Want to Start Surfing Now?',
    },
    desc:{
      type: String,
      required: true,
      default:
        'Regardless of what stage of life you’re in, we believe that experiencing a new place is always better when shared.',
    },

  },
  computed: {
    bg() {
      return {
        "background-image": `url(${bgImage})`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
      };
    },
  }
}
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;
</style>