<template>
<div class="container-1320">
  <div class="trainers">
    <TrainersContent/>
  </div>
</div>
</template>

<script>
import TrainersContent from "@/components/UI/TrainersContent.vue";

export default {
  name: "Trainers",
  components: {TrainersContent},
}
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;
</style>