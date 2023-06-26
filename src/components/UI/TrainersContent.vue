<template>
  <div class="trainers-content__title ">
    <h2 class="text-38 leading-42 text-center text-c100 font-font-bl pt-20">{{
        title
      }}</h2>
    <p class="text-center w-400 mx-auto pt-5 text-16 leading-20 font-font-l">{{
        desc
      }} </p>
  </div>
  <div class="trainers-content__inner pt-11 ">
    <Swiper class="mySwiper "
            :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
            :modules="modules"
            :slidesPerView="3"
            :spaceBetween="10"
    >
      <SwiperSlide class=" relative cursor-pointer " v-for="item in trainersList" :key="item.id">
        <img class="hover:shadow-border-ef  rounded-20" :src="`/src/assets/image/${item.image}`" :alt="item.alt"/>
        <p class="absolute bottom-8 left-16 text-default text-24 leading-28 font-font-bl  ">{{
            item.nameTrainers
          }}</p>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import {useTrainersStore} from '@/stores/trainers';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay} from 'swiper';
import 'swiper/css';

export default {
  name: "TrainersContent",
  components: {
    Swiper, SwiperSlide
  },
  setup() {
    const trainersStore = useTrainersStore();
    return {
      title: trainersStore.getTitle,
      desc: trainersStore.getDesc,
      trainersList: trainersStore.trainersList,
      modules: [Autoplay],
    }
  },
}
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;
.trainers-content {
  &__inner {
    ul {
      li {
        img {
          @extend %dtrans;
          &:hover {
            @extend %htrans;
          }
        }
      }
    }
  }

}
</style>