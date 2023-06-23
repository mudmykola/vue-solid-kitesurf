<template>
  <div class="flex items-center">
    <div class="footer-content__logo">
      <a :href="footerLogo.link">
        <img :src="footerLogo.img" :alt="footerLogo.alt">
      </a>
    </div>
    <FooterNavigation/>
  </div>
</template>

<script>
import {reactive} from 'vue';
import FooterNavigation from "@/components/UI/FooterNavigation.vue";
import FooterLogo from '@/assets/image/svg/logo.svg';

export default {
  name: "FooterContent",
  components: {FooterNavigation},
  setup() {
    const footerLogo = reactive({
      img: FooterLogo,
      alt: 'footer-logo',
      link: '/'
    });
    return {
      footerLogo,
    }

  },
}
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;
</style>