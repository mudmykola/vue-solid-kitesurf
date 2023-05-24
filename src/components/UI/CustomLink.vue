<script>
export default {
  name: 'CustomLink',
  data(){
    return {
      isHovered: false,
    }
  },
  methods :{
    handleMouseOver() {
      this.isHovered = true;
    },
    handleMouseOut() {
      this.isHovered = false;
    },
  },
  props: {
    url: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      default: 'bg-c101',
    },
  },
};
</script>
<template>
  <div class="custom-link ">
    <a
        class="bg-c101 pt-5 pb-5 pl-10 pr-10 text-16  leading-20 font-font-sb   rounded-10  text-default  uppercase"
        :style="{ 'background-color': bgColor }"
        :class="{hover: isHovered}"
        @mouseover="handleMouseOver"
        @mouseout="handleMouseOut"
        :href="url"
    >
      {{
        text
      }} </a>
  </div>
</template>
<style lang="scss" scoped>
@use "src/styles/variables" as var;
.custom-link {
  a {

    @extend %dtrans;
    &:hover {
      @extend %htrans;
    }
  }
}
.hover {
  background-color: var.$c100;
}
</style>