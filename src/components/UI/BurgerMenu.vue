<template>
  <div class="navigation-burger" >
    <button @click="toggleMenu">
      <span class="vertical-dots">&#8942;</span>
    </button>
    <transition name="slide">
      <ul v-if="showMenu" class="navigation-burger__menu relative text-center ">
        <button class="close-button right-6 top-5 absolute" @click="toggleMenu">&#10005;</button>
        <li v-for="item in menuItems" :key="item.id">
          <a class="text-c101 font-font-sb" :href="item.url">{{
              item.title
            }}</a>
        </li>
        <FooterContact class=" pt-10 justify-center"/>
        <CustomSocial class="justify-center pt-5"/>
      </ul>
      </transition>
  </div>
</template>

<script>
import {ref} from 'vue';
import FooterContact from "@/components/UI/FooterContact.vue";
import CustomSocial from "@/components/UI/CustomSocial.vue";

export default {
  name: "BurgerMenu",
  components: {FooterContact,CustomSocial},
  setup() {
    const showMenu = ref(false);

    const menuItems = ref([
      {id: 1, title: 'Lessons', url: '#'},
      {id: 2, title: 'Rental', url: '#'},
      {id: 3, title: 'Accommodation', url: '#'},
      {id: 4, title: 'Camp', url: '#'},
      {id: 5, title: 'Shop', url: '#'}
    ]);

    function toggleMenu() {
      showMenu.value = !showMenu.value;
    }

    return {
      showMenu,
      menuItems,
      toggleMenu
    };
  }
}
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;
@use "src/styles/media";

.navigation-burger {
  display: none;

  &__menu {
    list-style-type: none;
    margin: 0;
    position: absolute;
    top: 0;
    background-color: var.$c103;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 50%;
    right: 0;
    z-index: 9999;
    padding:0 25px;
    padding-top: 60px;
    li {
      margin-bottom: 10px;
    }

    a {
      text-decoration: none;
      color: #000;
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
.vertical-dots {
  font-size: 20px;
}
</style>