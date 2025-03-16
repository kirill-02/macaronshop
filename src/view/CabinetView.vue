<template>
  <div class="">
    lk
  </div>
</template>

<script>
import {useRouter} from "vue-router";
import {onBeforeUnmount} from "vue";
import {getAuth, onAuthStateChanged} from "firebase/auth";

export default {
  data() {
    return {}
  },
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

<style scoped>

</style>