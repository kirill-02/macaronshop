<template>
  <div class="wrapper">
      <the-navbar></the-navbar>
    <div class="main">
      <router-view></router-view>
    </div>
      <the-footer></the-footer>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue"

export default {

  components: {TheNavbar, TheFooter}
}

</script>

<style>
</style>
