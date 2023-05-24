<script>
import Image from '@/assets/image/lessons-img.webp';
import Element from '@/assets/image/lessons-img-el.webp';
export default {
  name: "LessonsContentImage",
  data() {
    return {
      lessonsImg: {
        img: Image,
        alt: 'lessons-img',
      },
      lessonsEl: {
        img: Element,
        alt: 'lessons-el',
      },
    }
  }
}
</script>
<template>
<div class="lessons-image ">
  <img class="lessons-image__el absolute " :src="lessonsEl.img" :alt="lessonsEl.alt">
  <img  :src="lessonsImg.img" :alt="lessonsImg.alt">
</div>
</template>
<style lang="scss" scoped>
@use "src/styles/variables" as var;
.lessons-image{
  &__el{
    max-width: 100%;
    top: 4%;
    left: -13.9%;
  }
}

// 1280

@media (max-width: 1280px) {
  .lessons-image{
    &__el{

      top: -12%;
      left: -13.9%;
    }
  }
}

// 1920

@media (max-width: 1920px) {
  .lessons-image{
    &__el{
      max-width: 100%;
      top: 4%;
      left: -13.8%;
    }
  }
}

// 600
@media (max-width: 600px) {

}

// 480
@media (max-width: 480px) {

}

// 320
@media (max-width: 320px) {

}
</style>