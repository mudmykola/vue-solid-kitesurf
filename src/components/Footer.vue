<template>
<div class="footer bg-c103 rounded-20 container-1320">
  <FooterContent/>
</div>
</template>

<script>
import FooterContent from "@/components/UI/FooterContent.vue";

export default {
  name: "Footer",
  components: {FooterContent},
}
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;
</style>