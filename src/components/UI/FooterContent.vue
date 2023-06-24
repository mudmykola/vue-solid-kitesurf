<template>
  <div class="flex items-center justify-between pl-24 pr-24 pt-10 ">
    <div class="footer-content__logo">
      <a :href="footerLogo.link">
        <img :src="footerLogo.img" :alt="footerLogo.alt">
      </a>
    </div>
    <FooterNavigation/>
    <CustomSocial/>
    <FooterContact/>
  </div>
  <FooterCopy/>
</template>

<script>
import {reactive} from 'vue';
import FooterNavigation from "@/components/UI/FooterNavigation.vue";
import FooterLogo from '@/assets/image/svg/logo.svg';
import CustomSocial from "@/components/UI/CustomSocial.vue";
import FooterContact from "@/components/UI/FooterContact.vue";
import FooterCopy from "@/components/UI/FooterCopy.vue";

export default {
  name: "FooterContent",
  components: {FooterCopy, FooterContact, FooterNavigation, CustomSocial},
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