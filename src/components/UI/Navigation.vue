<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiTriangleDown } from '@mdi/js';

export default {
  components: {
    SvgIcon
  },
  data() {
    return {
      path: mdiTriangleDown,
      isSubMenuOpen: null,
      menuItems: [
        {
          title: 'Lessons',
          subMenu: [
            { name: 'SubLink-1', url: '/sublink1' },
            { name: 'SubLink-1', url: '/sublink2' },
            { name: 'SubLink-1', url: '/sublink3' }
          ]
        },
        {
          title: 'Rental',
          url: '/'
        },
        {
          title: 'Accommodation',
          subMenu: [
            { name: 'SubLink-1', url: '/sublink1' },
            { name: 'SubLink-1', url: '/sublink2' },
            { name: 'SubLink-1', url: '/sublink3' }
          ]
        },
        {
          title: 'Camp',
          subMenu: [
            { name: 'SubLink-1', url: '/sublink1' },
            { name: 'SubLink-1', url: '/sublink2' },
            { name: 'SubLink-1', url: '/sublink3' }
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
<template>
  <div class="navigation pt-4 pb-5">
    <div class="navigation-menu">
      <ul class="flex items-center gap-9">
        <li v-for="(menuItem, index) in menuItems" :key="index">
          <div class="menu-item relative " v-if="menuItem.subMenu">
            <a class="flex items-center mx-auto cursor-pointer font-font-sb text-13 leading-17 "
              @click="toggleSubMenu(index)">
              {{
                menuItem.title
              }}
              <svg-icon :class="{ 'rotate': isSubMenuOpen === index }" class=" w-7  mx-auto  max-h-full ml-1 " type="mdi"
                :path="path"></svg-icon>
            </a>
            <ul class="menu-submenu absolute bg-default  rounded-4 text-center " v-show="isSubMenuOpen === index">
              <li class="menu-submenu__item text-13 leading-17 font-font-l hover:text-c101 "
                v-for="(subMenuItem, subIndex) in menuItem.subMenu" :key="subIndex">
                <router-link :to="subMenuItem.url">{{
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
      <img src="" alt="">
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use "src/styles/variables" as var;

.menu {
  &-submenu {
    @extend %btn-ef;
    padding: 10px;


    &__item {}

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