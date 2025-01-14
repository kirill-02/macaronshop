<template>
  <the-navbar></the-navbar>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>

import TheNavbar from "@/components/TheNavbar.vue";

export default {

  components: {TheNavbar}
}
</script>

<style scoped>
</style>
