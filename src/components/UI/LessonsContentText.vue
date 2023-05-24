<script>
import {useLessonsTextStore} from "@/stores/lessons";
import CustomLink from "@/components/UI/CustomLink.vue";
export default {
  name: "LessonsContentText",
  components : {
    CustomLink,
  },
  props: {
    btnText: {
      type: String,
      required: true,
      default: 'Book now'
    },
    btnLink: {
      type: String,
      required: true,
      default: '/'
    }
  },
  setup() {
    const lessonsStore = useLessonsTextStore();
    return {
      title: lessonsStore.getTitle,
      desc: lessonsStore.getDesc,
    }
  }
}
</script>
<template>
    <div class="lessons-content__box w-500 pt-24 pr-20  pb-24 pl-20">
      <h2 class=" text-38 leading-42 font-font-bl pb-5">{{
          title
        }}</h2>
      <div class="grid gap-2">
        <p class="text-16 leading-20 font-font-l " v-for="item in desc" :key="item.text">
          {{
            item.text
          }}
        </p>
        <CustomLink class="pt-12 " :text="btnText" :url="btnLink"/>
      </div>
    </div>
</template>
<style lang="scss" scoped>
@use "src/styles/variables" as var;
</style>