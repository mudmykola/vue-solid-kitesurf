<template>
  <div class="banner-content text-center  pt-16 mt-32 mb-5">
    <img class="mx-auto pb-5" :src="elImg"/>
    <h2 class="text-default text-38 leading-42 font-font-bl mb-3">{{
        title
      }}</h2>
    <p class="text-16 leading-20 font-font-l text-default pb-8 w-623 mx-auto"> {{
        desc
      }}</p>
    <Button class="mb-28" :url="btnUrl" :buttonText="btnText" />
  </div>
</template>

<script>
import {ref} from 'vue'
import Button from "@/components/UI/Button.vue";

export default {
  name: "BannerContent",
  components: {Button},
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },

  },
  setup() {
    const elImg = ref('');
    const fetchImage = () => {
      const elImgPath = 'src/assets/image/svg/element-banner.svg';
      elImg.value = elImgPath;
    };
    const btnUrl = ref('https://google.com');
    const  btnText = ref('Start Now');
    fetchImage();
    return {
      btnUrl,
      btnText,
      elImg,
    }
  },
}
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;
</style>