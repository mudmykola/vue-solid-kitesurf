<template>
<div class="text-center w-392 mx-auto">
  <h2 class="text-38 leading-42 font-font-bl pb-5">
    {{productTitle.title}}
  </h2>
  <p class="text-16 leading-20 font-font-l">
    {{productTitle.desc}}
  </p>
</div>
</template>

<script>
import {useProductsStore} from "@/stores/products";

export default {
  name: "ProductsContent",
  setup(){
    const productsStore = useProductsStore();
    const productTitle = productsStore.GET_TITLE;
    return {
      productTitle
    };
  }
}
</script>

<style lang="scss" scoped>

</style>