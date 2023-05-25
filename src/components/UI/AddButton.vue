<template>
<div class="add-button flex items-center justify-center mx-auto  cursor-pointer  rounded-10 w-193 pt-4 pb-4">
  <svg-icon class="text-c101 " type="mdi" :path="path"></svg-icon>
  <a class="text-c101 text-16 leading-20 pl-2  uppercase" :href="url">{{text}}</a>
</div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCartVariant } from '@mdi/js';
export default {
  name: "AddButton",
  components: {
    SvgIcon
  },
  data(){
    return{
      path: mdiCartVariant,
    }
  },
  props:{
    url: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },

  }
}
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;
.add-button{
  border: 1px solid var.$c101;
}
</style>