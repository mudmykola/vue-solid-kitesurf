<script>
import {useLessonsTextStore} from "@/stores/lessons";

export default {
  name: "LessonsContentList",
  setup() {
    const lessonsStore = useLessonsTextStore();
    return {
      lessonList: lessonsStore.lessonsList
    }
  }
}
</script>
<template>
  <div>
    <ul class="flex justify-between gap-5">
      <li class="lessons-content__list--item relative w-325 cursor-pointer" v-for="item in lessonList" :key="item.id">
        <div class="lessons-content__list--box relative ">
          <img class="lessons-content__list--image  " :src="`/src/assets/image/${item.image}`" :alt="item.alt"/>
          <div class="lessons-content__list--link flex items-center absolute bottom-0 w-252 justify-between pb-7">
            <a class="text-24 leading-28 font-font-bl text-default" :href="item.urlLink">{{
                item.textLink
              }}</a>
            <img class="" :src="`/src/assets/image/svg/${item.icon}`" :alt="item.iconAlt"/>
          </div>
        </div>
        <span class="absolute"></span>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
@use "src/styles/variables" as var;

.lessons-content__list {
  &--link {
    right: 11%;
    z-index: 999;
  }
  &--item {

    @extend %dtrans;
&:hover>span{
  @extend %htrans;
  height: 70%;
}
    span {
      @extend %dtrans;
      @extend %mask-effect;
      width: 100%;
      height: 100%;
      bottom: 0;
      left: 0;

    }
  }
}

</style>