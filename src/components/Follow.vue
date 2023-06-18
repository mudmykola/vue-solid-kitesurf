<template>
<div class="container-1320">
  <FollowContent />
</div>
</template>

<script>
import FollowContent from "@/components/UI/FollowContent.vue";

export default {
  name: "Follow",
  components: {FollowContent},

  props: {

  },
}
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;
</style>