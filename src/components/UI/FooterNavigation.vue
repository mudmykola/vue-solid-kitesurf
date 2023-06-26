<template>
  <nav class="footer-navigation flex">
    <div  v-for="block in navigationBlocks" :key="block.id" class="navigation-block  ">
      <ul>
        <li  v-for="item in block.items" :key="item.id">
          <router-link class="text-13 leading-18 font-font-sb text-c100 uppercase " :to="item.route">{{ item.label
            }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
export default {
  name: "FooterNavigation",
  setup() {
    const router = useRouter();

    const navigationBlocks = reactive([
      {
        id: 1,
        items: [
          { id: 1, label: 'Kitesurf', route: '/' },
          { id: 2, label: 'surf', route: '/surf' },
        ],
      },
      {
        id: 2,
        items: [
          { id: 3, label: 'Egypt safary', route: '/egyptsafary' },
          { id: 4, label: 'Greece', route: '/greece' },
        ],
      },
      {
        id: 3,
        items: [
          { id: 5, label: 'Rental ', route: '/rental ' },
          { id: 6, label: 'Shop ', route: '/shop ' },
        ],
      },
      {
        id: 4,
        items: [
          { id: 7, label: 'Rooms ', route: '/rooms ' },
          { id: 8, label: 'Co-working ', route: '/coworking ' },
        ],
      },
      {
        id: 5,
        items: [
          { id: 9, label: 'Experience ', route: '/experience ' },

        ],
      },
    ]);

    return {
      navigationBlocks,
    };
  },
}
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;
.footer-navigation{
  position: relative;

  &:after{
    position: absolute;
    content: '';
    background-image: url('@/assets/image/footer-el.webp');
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
    top: -15%;
    right: -4%;
    width: 245px;
    height: 133px;
    z-index: 55;
  }
}
.navigation-block{
  margin-left: 35px;
  z-index: 9999;
  &:first-child{
    margin-left: 0;
  }
}

</style>