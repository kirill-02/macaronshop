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
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {ref} from "vue";
import {collection, onSnapshot, query} from "firebase/firestore";
import {db} from "@/firebase";

const auth = getAuth();
export default {
  data() {
    return {
      user: ref([]),
      st: ''
    };
  },
  components: {TheNavbar, TheFooter},
  methods: {
    withdrawalUser: function () {
      const userQuery = query(collection(db, "users"));
      onSnapshot(userQuery, (snapshot) => {
        this.user = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            city: doc.data().city,
            company: doc.data().company,
            name: doc.data().name,
            phone: doc.data().phone,
            role: doc.data().role,
            uid: doc.data().uid,
          }
        });

        const userDate = this.user.find(user => user.uid === auth.lastNotifiedUid);
        if (userDate) {
          this.userRole = userDate.role;
          this.authListener(this.userRole);
        } else {
          console.error("пользователь не найден");
        }
      });
    },

    authListener: function (userRole) {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          this.$router.push("/");
        }
        if (userRole) {
          this.st = 1;
        } else {
          return
        }
        if (userRole !== 'модератор') {
          this.$router.push("/");
        }
      })
    }
  },
  mounted() {
    this.withdrawalUser();
    this.authListener();
  },
}

</script>

<style>
</style>
