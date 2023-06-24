<template>
<div class="text-center pt-20 pb-10">
  <h2 class="text-12 leading-18 font-font-l text-c100">{{copyText.text}}</h2>
</div>
</template>

<script>
import {reactive} from 'vue';
export default {
  name: "FooterCopy",
  setup(){
    const copyText =  reactive( {
      text: 'Copyright ©2023 Solid. All rights reserved.',
      type: String,
    });
    return{
      copyText,
    }
  },

}
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;
</style>