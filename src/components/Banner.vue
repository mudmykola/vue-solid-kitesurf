<template>
<div class="container-1320">
  <BannerContent  :style="bg"/>
</div>
</template>

<script>
import BannerContent from "@/components/UI/BannerContent.vue";
import bgImage from  '@/assets/image/bg-banner.webp';
export default {
  name: "Banner",
  components: {BannerContent},
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