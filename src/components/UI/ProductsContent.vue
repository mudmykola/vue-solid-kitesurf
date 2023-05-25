<template>
  <div class="products-content text-center w-392 mx-auto ">
    <h2 class="text-38 leading-42 font-font-bl pb-5">
      {{
        productTitle.title
      }}
    </h2>
    <p class="text-16 leading-20 font-font-l">
      {{
        productTitle.desc
      }}
    </p>
  </div>
  <div class="products-content__inner pt-12">
    <ul>
      <li  class="products-content__item bg-default w-331 rounded-20 shadow-border-ef-cards" v-for="item in productCards
        " :key="item.id">
        <div class="products-content__item--box pt-10 pr-10 pb-10 pl-10">
          <img  :src="`/src/assets/image/${item.img}`" :alt="item.alt"/>
          <h2 class="text-center font-font-b text-18 leading-22 mb-5 mt-5">{{item.title}}</h2>
          <AddButton :text="btnText" :url="btnUrl"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {useProductsStore} from "@/stores/products";
import AddButton from "@/components/UI/AddButton.vue";

export default {
  name: "ProductsContent",
  components: {
    AddButton,
  },
  props: {
    btnUrl: {
      type: String,
      required: true,
      default: '/'

    },
    btnText: {
      type: String,
      required: true,
      default: 'Add to cart',
    },

  },
  setup() {
    const productsStore = useProductsStore();
    const productTitle = productsStore.GET_TITLE;
    const productCards = productsStore.GET_PRODUCT_CARDS;
    return {
      productTitle,
      productCards
    };
  }
}
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;
</style>