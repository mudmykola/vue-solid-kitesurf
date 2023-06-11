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
  <div class="products-content__inner pt-12 ">
    <ul class="flex justify-center grid grid-cols-3 gap-7 ">
      <li
          class="products-content__item bg-default w-331 rounded-20 shadow-border-ef-cards mx-auto cursor-pointer " v-for="item in
      visibleProductCards" :key="item.id">
        <div class="products-content__item--box pt-10 pr-10 pb-10 pl-10">
          <img :src="`/src/assets/image/${item.img}`" :alt="item.alt"/>
          <h2 class="text-center font-font-b text-18 leading-22 mb-5 mt-5">{{
              item.title
            }}</h2>
          <AddButton :text="btnText" :url="btnUrl"/>
        </div>
      </li>
    </ul>

  </div>
  <button
      class="products-content__item--load mt-10 justify-center flex mx-auto bg-c100 text-default text-16 leading-20 font-font-sb uppercase rounded-10 pt-5 pb-5 w-220 hover:bg-c101 "
      @click="loadMoreCards"
      v-if="hasHiddenCards">
    {{
      btnLoadText
    }}
  </button>

</template>

<script>
import {useProductsStore} from "@/stores/products";
import AddButton from "@/components/UI/AddButton.vue";
import {ref, computed} from "vue";

export default {
  name: "ProductsContent",
  components: {
    AddButton,
  },
  props: {
    btnUrl: {
      type: String,
      required: true,
      default: '/',
    },
    btnText: {
      type: String,
      required: true,
      default: 'Add to cart',
    },
    btnLoadText: {
      type: String,
      required: true,
      default: '  See all products',
    },
  },
  setup() {
    const productsStore = useProductsStore();
    const productTitle = productsStore.GET_TITLE;
    const productCards = productsStore.GET_PRODUCT_CARDS;

    const visibleCardsCount = ref(3);
    const increment = 3;

    const visibleProductCards = computed(() => {
      return productCards.slice(0, visibleCardsCount.value);
    });
    const hasHiddenCards = computed(() => {
      return visibleCardsCount.value < productCards.length;
    });
    const loadMoreCards = () => {
      const remainingCards = productCards.slice(visibleCardsCount.value);
      const additionalCards = remainingCards.slice(0, increment);
      visibleCardsCount.value += increment;
      productCards.splice(visibleCardsCount.value, 0, ...additionalCards);
    };
    return {
      productTitle,
      productCards,
      visibleProductCards,
      hasHiddenCards,
      loadMoreCards,
    };
  },
};
</script>
<style lang="scss" scoped>
@use "src/styles/variables" as var;
.products-content{
  &__item{
    @extend %dtrans;
    :hover{
      @extend %htrans;
      @extend %border-ef;
    }
    &--load{
      @extend %dtrans;
      :hover{
        @extend %htrans;
      }
    }
  }
}
</style>