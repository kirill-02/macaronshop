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
import {useRouter} from "vue-router";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {onBeforeUnmount} from "vue";

export default {

  components: {TheNavbar, TheFooter},
  setup() {
    const router = useRouter();
    const auth = getAuth()
    const authListener = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/");
      }
    });

    onBeforeUnmount(() => {
      authListener();
    });
  }
}

</script>

<style>
</style>
