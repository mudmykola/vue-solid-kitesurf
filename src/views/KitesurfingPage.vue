<template>
<EmptyLayout>
  <div class="xl:container sm:container pr-[0.938rem] pl-[0.938rem]">
    <KitesurfHeaderComponent />
    <BlogComponent />
  </div>
</EmptyLayout>
</template>

<script setup>
import EmptyLayout from "@/layouts/EmptyLayout.vue";
import KitesurfHeaderComponent from "@/components/KitesurfHeader/KitesurfHeaderComponent.vue";
import BlogComponent from "@/components/Blog/BlogComponent.vue";
</script>
