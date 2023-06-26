<script>
export default {
  name: 'CustomButton',
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
    backgroundColor: {
      type: String,
      default: 'bg-c100',
    },

  },

};
</script>

<template>
  <div class="custom-btn ">
    <a
        class="bg-c100 pt-3 pb-3 pl-4 pr-4 text-14  leading-18 font-font-sb   rounded-10  text-default  uppercase"
        :style="{ 'background-color': backgroundColor }"
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

.custom-btn {
  a {
    @extend %dtrans;

    &:hover {
      @extend %htrans;
    }
  }
}
.hover {
  background-color: var.$c101;
}
</style>