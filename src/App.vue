<template>
  <component :is="layout + '-layout'" v-if="layout"/>
</template>

<script>
import {computed} from 'vue'
import {useRoute} from 'vue-router'
import MainLayout from "@/layout/MainLayout.vue";
import AuthLayout from "@/layout/AuthLayout.vue";
import AuthorizedLayout from "@/layout/AuthorizedLayout.vue";
import ModeratorLayout from "@/layout/ModeratorLayout.vue";

export default {
  setup() {
    const route = useRoute()
    return {
      layout: computed(() => route.meta.layout)
    }
  },
  // components: {TheNavbar, TheFooter}
  components: {MainLayout, AuthLayout, AuthorizedLayout, ModeratorLayout}

}

</script>

<style>
</style>
