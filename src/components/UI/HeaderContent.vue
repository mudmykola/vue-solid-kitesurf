<script>
import Element from '@/assets/image/header-el.webp';
import CustomLink from "@/components/UI/CustomLink.vue";
export default {
  name: "HeaderContent",
  components: {CustomLink},
  data(){
    return {
      HeaderEl:{
        img: Element,
        alt: 'header-el',
        type: Object,
        required: true,
      }
    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    btnText: {
      type: String,
      required: true,
      default: 'Contact us'
    },
    btnLink: {
      type: String,
      required: true,
      default: '/'
    }
  },
}
</script>

<template>
  <div class="header-content pt-32 pb-80 flex justify-center">
    <div class="header-content__title text-center w-820 relative ">
      <img class="absolute  -top-1/4 right-1/3 opacity-70 " :src="HeaderEl.img" :alt="HeaderEl.alt">
      <h2 class="text-58 leading-62 text-default font-font-bl pb-7">{{
          title
        }}</h2>
      <p class=" text-18 leading-22 font-font-b text-default pb-14">{{desc}}</p>

        <CustomLink  :text="btnText" :url="btnLink"
                    class="header-content__link absolute z-40  inset-x-0" />


    </div>
  </div>
</template>


<style lang="scss" scoped>
@use "src/styles/variables" as var;

</style>