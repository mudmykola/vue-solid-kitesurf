<template>
<div>
  <h2>{{subtitle}}</h2>
  <h3>{{title}}</h3>
  <p>{{desc}}</p>
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