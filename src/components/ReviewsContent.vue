<template>
<div class="reviews-content rounded-20 bg-c100 bg-opacity-5 mt-28">
  <h2 class="text-center text-38 leading-42 font-font-bl pt-20 text-c100">{{title}}</h2>
</div>
</template>

<script>
export default {
  name: "ReviewsContent",
  props: {
    title: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;
</style>