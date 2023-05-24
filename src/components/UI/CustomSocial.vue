<script>
import Fb from '@/assets/image/svg/fb.svg';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiFacebook } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
import { mdiTwitter } from '@mdi/js';
export default {
  name: 'CustomButton',
  components: {
    SvgIcon
  },
  data() {
    return {
      fbHoverBg: 'text-c101',
      socialIcons: [
        {
          path: mdiFacebook,
          link: 'https://www.facebook.com',
        },
        {
          path: mdiInstagram,
          link: 'https://www.instagram.com',
        },
        {
          path: mdiTwitter,
          link: 'https://www.twitter.com',
        },
      ],
    };
  },
  methods: {
    handleMouseOver(icon) {
      this.isHovered = true;
    },
    handleMouseOut(icon) {
      this.isHovered = false;
    }
  }
}
</script>

<template>
<div class="social flex items-center gap-2">
  <a class="social-link " v-for="(icon, index) in socialIcons" :key="index" :href="icon.link">
    <svg-icon :class="{ 'hover': icon.isHovered }" type="mdi" :path="icon.path" @mouseover="handleMouseOver(icon)" @mouseout="handleMouseOut(icon)"></svg-icon>
  </a>
</div>
</template>



<style lang="scss" scoped>
@use "src/styles/variables" as var;
.social{
  &-link{
    @extend %dtrans;
    &:hover{
      color: #27DEC5;
      @extend %htrans;
    }
    img{
      @extend %dtrans;
      &:hover{
        @extend %htrans;
      }
    }
  }
}

</style>