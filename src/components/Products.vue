<template>
<div class="products container-1320 pt-20">
  <ProductsContent/>
</div>
</template>
<script>
import ProductsContent from "@/components/UI/ProductsContent.vue";
export default {
  name: "Products",
  components : {
    ProductsContent,
  },

}
</script>
<style lang="scss" scoped>
@use "src/styles/variables" as var;
</style>
