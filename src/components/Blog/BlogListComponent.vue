<template>
  <div class="blog-list">
    <ul class="flex justify-between gap-[0.625rem]">
      <li class="relative cursor-pointer" v-for="blogItem in blogList" :key="blogItem.link">
        <img :src="blogItem.img" :alt="blogItem.alt" loading="lazy">
        <a class="text-[1.125rem] text-default leading-[1.375rem] font-font-b w-[21.875rem] inline-block absolute bottom-[0rem] pl-[1.875rem] pb-[1.875rem] z-[99999]"
           :href="blogItem.link">{{ blogItem.text }}</a>
        <span class=" absolute w-[100%] h-[100%] z-[9999] top-0 rounded-[1.25rem]"></span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {useBlogStore} from '@/stores/blog';

const blogStore = useBlogStore();

const blogList = blogStore.blogList;
</script>

<style lang="scss">
.blog-list{
  span{
    background: linear-gradient(360deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.00) 100%);
  }
}
</style>
