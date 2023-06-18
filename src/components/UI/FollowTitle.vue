<template>
<div>
  <h2 class="text-38 leading-42 text-c101 font-font-bl pb-1">{{subtitle}}</h2>
  <h3 class="text-38 leading-42 font-font-bl text-c100 pb-10">{{title}}</h3>
  <p class="text-16 leading-20 font-font-l text-c100 w-500 pb-16">{{desc}}</p>
</div>
</template>

<script>
export default {
  name: "FollowTitle",
  props: {
    subtitle: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
  },

}
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;
</style>