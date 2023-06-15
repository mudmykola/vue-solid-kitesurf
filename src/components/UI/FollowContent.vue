<template>
  <div class="follow-content ">
    <div class="follow-content__text">
      <FollowTitle  :subtitle="subtitle" :title="title" :desc="desc" />
      <div class="follow-content__text--reviews">
        <FollowReviews  :numberRating="numberRating" :numberReviews="numberReviews" />
      </div>
    </div>
    <div class="follow-content__img"></div>
  </div>
</template>

<script>
import FollowTitle from "@/components/UI/FollowTitle.vue";
import FollowReviews from "@/components/UI/FollowReviews.vue";

export default {
  name: "FollowContent",
  components: {FollowReviews, FollowTitle},
  props: {
    subtitle: {
      type: String,
      required: true,
      default: '# Solid',
    },
    title: {
      type: String,
      required: true,
      default: 'Follow Us on Instagram',
    },
    desc: {
      type: String,
      required: true,
      default: 'Our school is well equipped and can provide you with a variety of boards. Joining our school means immersing yourself in a special atmosphere and our philosophy.',
    },
    numberRating: {
      type:Number,
      required: true,
      default: 4.9,
    },
    numberReviews: {
      type:String,
      required: true,
      default: '458 reviews',
    },
  },
}
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;
</style>