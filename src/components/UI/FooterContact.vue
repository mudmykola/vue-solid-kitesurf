<template>
<div class="flex items-center">
  <div class="footer-address flex items-center">
    <svg-icon :class="iconColor" type="mdi" :path="address.path"></svg-icon>
    <p class="text-12 leading-16 font-font-m  w-108 pl-1"> {{
        address.text
      }}</p>
  </div>
  <div class="footer-contacts text-center ml-6">
    <p class="text-12 leading-16 font-font-m ">{{
        contacts.text
      }}</p>
    <a class="text-12 leading-16 font-font-b hover:text-c101" :href="contacts.url">{{
        contacts.phone
      }}</a>
  </div>
</div>
</template>

<script>
import {reactive} from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import {mdiMapMarker} from '@mdi/js';
export default {
  name: "FooterContact",
  components:{
    SvgIcon
  },
  setup(){
    const  address = reactive ({
      path: mdiMapMarker,
      text: "Tv. da  ncora 136, 2510-662 Óbidos ",
      required: true,
    });
    const contacts = reactive ({
      type: String,
      text: 'CalI Us',
      phone: '911 968 636',
      url: 'tel:911 968 636',
      required: true
    });
    return{
      address,
      contacts,
    }

  },

}
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;
</style>