<template>
  <the-navbar></the-navbar>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>

import TheNavbar from "@/components/TheNavbar.vue";
import {useRouter} from "vue-router";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {onBeforeUnmount} from "vue";

export default {

  components: {TheNavbar},
  setup() {
    const router = useRouter();
    const auth = getAuth()
    const authListener = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });

    onBeforeUnmount(() => {
      authListener();
    });
  }
}
</script>

<style scoped>
</style>
