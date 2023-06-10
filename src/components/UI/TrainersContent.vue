<template>
<div class="trainers-content__title " >
  <h2 class="text-38 leading-42 text-center text-c100 font-font-bl pt-20">{{title}}</h2>
  <p class="text-center w-400 mx-auto pt-5 text-16 leading-20 font-font-l">{{desc}} </p>
</div>
  <div>
    <ul>
      <li>
        <img src="" alt="">
        <p></p>
      </li>
    </ul>
  </div>
</template>

<script>
import {useTrainersStore} from '@/stores/trainers';

export default {
  name: "TrainersContent",
  setup (){
const trainersStore = useTrainersStore();
return {
  title: trainersStore.getTitle,
  desc: trainersStore.getDesc,

}
  },

}
</script>

<style  lang="scss" scoped>
@use "src/styles/variables" as var;
</style>