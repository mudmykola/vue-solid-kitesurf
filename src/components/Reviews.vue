<template>
<div class="container-1320 ">
  <ReviewsContent  :title="title"/>
</div>
</template>

<script>
import ReviewsContent from "@/components/ReviewsContent.vue";

export default {
  name: "Reviews",
  components: {ReviewsContent},
  props: {
    title:{
      type: String,
      required: true,
      default: 'Hear from our clients'
    },
  }
}
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;
</style>