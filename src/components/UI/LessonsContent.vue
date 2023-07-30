<script>
import LessonsContentText from "@/components/UI/LessonsContentText.vue";
import LessonsContentImage from "@/components/UI/LessonsContentImage.vue";
import LessonsContentList from "@/components/UI/LessonsContentList.vue";
export default {
  name: "LessonsContent",
  components: {
    LessonsContentText,
    LessonsContentImage,
    LessonsContentList
  },
}
</script>
<template>
  <div class="lesson-content " >
    <div class="lessons-content__box flex mt-5 gap-5 ">
      <LessonsContentText class="lessons-content__text bg-c103  rounded-20"/>
      <LessonsContentImage class="lessons-content__image relative   rounded-20" />
    </div>
    <LessonsContentList class="lessons-content__list mt-5"/>
  </div>

</template>
<style lang="scss" scoped>
@use "src/styles/variables" as var;
</style>
