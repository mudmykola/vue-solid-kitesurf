<template>
  <div class="navigation flex items-center justify-between pt-4 pb-5 xl:container sm:max-w-full pr-[0.938rem] pl-[0.938rem]">
    <div class="navigation-menu">
      <ul class="flex items-center gap-9">
        <li v-for="(menuItem, index) in menuItems" :key="index">
          <div class="menu-item relative " v-if="menuItem.subMenu">
            <a class="flex items-center mx-auto cursor-pointer font-font-sb text-13 leading-17 "
               @click="toggleSubMenu(index)">
              {{
                menuItem.title
              }}
              <svg-icon :class="{ 'rotate': isSubMenuOpen === index }" class=" w-7  mx-auto  max-h-full ml-1 "
                        type="mdi"
                        :path="path"></svg-icon>
            </a>
            <ul class="menu-submenu absolute bg-default  rounded-4 text-center " v-show="isSubMenuOpen === index">
              <li class="menu-submenu__item  hover:text-c101 "
                  v-for="(subMenuItem, subIndex) in menuItem.subMenu" :key="subIndex">
                <router-link class="menu-submenu__item--link text-11 text-11 leading-17 font-font-l"
                             :to="subMenuItem.url">{{
                    subMenuItem.name
                  }}
                </router-link>
              </li>
            </ul>
          </div>
          <router-link class="font-font-sb text-13 leading-17 flex items-center" v-else :to="menuItem.url">{{
              menuItem.title
            }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="navigation-logo">
      <a :href="logo.logoLink">
        <img :src="logo.img" :alt="logo.altImg">
      </a>

    </div>
    <div class="navigation-func flex items-center gap-6">
      <div class="navigation-address flex items-center">
        <svg-icon :class="iconColor" type="mdi" :path="address.path"></svg-icon>
        <p class="text-12 leading-16 font-font-m  w-108 pl-1"> {{
            address.text
          }}</p>
      </div>
      <div class="navigation-contacts text-center">
        <p class="text-12 leading-16 font-font-m ">{{
            contacts.text
          }}</p>
        <a class="text-12 leading-16 font-font-b hover:text-c101" :href="contacts.url">{{
            contacts.phone
          }}</a>
      </div>
      <div class="navigation-social">
        <CustomSocial/>
      </div>
      <div class="navigation-btn">
        <CustomButton :text="btnText" :url="btnUrl"/>
      </div>
    </div>
    <BurgerMenu/>
  </div>
</template>
<script>
import Logo from '@/assets/image/svg/logo.svg';
import SvgIcon from '@jamescoyle/vue-icon';
import {mdiTriangleDown} from '@mdi/js';
import {mdiMapMarker} from '@mdi/js';
import CustomButton from "@/components/UI/CustomButton.vue";
import CustomSocial from "@/components/UI/CustomSocial.vue";
import BurgerMenu from "@/components/UI/BurgerMenu.vue";


export default {
  components: {
    BurgerMenu,
    CustomSocial,
    CustomButton,
    SvgIcon
  },
  props: {
    btnText: {
      type: String,
      required: true,
      default: "Contact us",
    },
    btnUrl: {
      type: String,
      required: true,
      default: "/",
    },
  },
  data() {
    return {
      contacts: {
        type: String,
        text: 'CalI Us',
        phone: '911 968 636',
        url: 'tel:911 968 636',
        required: true
      },
      iconColor: 'text-c100',
      logo: {
        img: Logo,
        altImg: 'logo',
        logoLink: '/',
        required: true,
      },
      address: {
        path: mdiMapMarker,
        text: "Tv. da  ncora 136, 2510-662 Óbidos ",
        required: true,
      },

      path: mdiTriangleDown,
      isSubMenuOpen: null,
      menuItems: [
        {
          title: 'Lessons',
          subMenu: [
            {name: 'Kitesurfing', url: '/kitesurfing'},
            {name: 'SubLink-1', url: '/sublink2'},
            {name: 'SubLink-1', url: '/sublink3'}
          ]
        },
        {
          title: 'Rental',
          url: '/'
        },
        {
          title: 'Accommodation',
          subMenu: [
            {name: 'SubLink-1', url: '/sublink1'},
            {name: 'SubLink-1', url: '/sublink2'},
            {name: 'SubLink-1', url: '/sublink3'}
          ]
        },
        {
          title: 'Camp',
          subMenu: [
            {name: 'SubLink-1', url: '/sublink1'},
            {name: 'SubLink-1', url: '/sublink2'},
            {name: 'SubLink-1', url: '/sublink3'}
          ]
        },
        {
          title: 'Shop',
          url: '/shop'
        }
      ]
    };
  },
  methods: {
    toggleSubMenu(index) {
      this.isSubMenuOpen = (this.isSubMenuOpen === index) ? null : index;
    }
  }
};
</script>
<style lang="scss" scoped>
@use "src/styles/variables" as var;
@use "src/styles/media";
.navigation {
  &-contacts {
    a {
      @extend %dtrans;

      &:hover {
        @extend %htrans;
      }
    }
  }
}
.menu {
  &-submenu {
    @extend %btn-ef;
    padding: 10px;
  }
}
.rotate {
  transform: rotate(180deg);
  @extend %dtrans;

  &:hover {
    @extend %htrans;
  }
}





</style>
