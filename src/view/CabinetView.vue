<template>
  <div class="cabinet">
    <div class="container">
      <div class="cabinet__wrapper">

        <div class="cabinet__wrapper__menu">
          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('story')"
              :class="{'page_active': page === 'story'}"
          >
            История заказов
          </div>
          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('contacts')"
              :class="{'page_active': page === 'contacts'}"
          >
            Контактные данные
          </div>
          <div
              class="cabinet__wrapper__menu_button"
              @click="signOut">
            Выход
          </div>
        </div>

        <div class="cabinet__wrapper__information" v-if="page === 'story'">
          <div class="cabinet__wrapper__information_title">
            История заказов
          </div>
          <table>
            <thead>
            <tr>
              <th>Дата оформления</th>
              <th>Номер заказа</th>
              <th>Статус</th>
              <th>Сумма заказа</th>
            </tr>
            </thead>
            <tbody>

            <tr v-for="ordersHistory in filteredOrderHistory" :key="ordersHistory.id">
              <td>От {{ ordersHistory.orderDate }}</td>
              <td>
                <router-link
                    :to="`/ordersHistory/${ordersHistory.id}`">
                  <span>{{ ordersHistory.id }}</span>
                </router-link>
              </td>
              <td>{{ ordersHistory.state }}</td>
              <td>{{ ordersHistory.price }} Р</td>
            </tr>
            </tbody>
          </table>
        </div>

        <div class="cabinet__wrapper__information" v-else>
          <div class="cabinet__wrapper__information_title">
            Контактные данные
          </div>

          <form @submit.prevent="updateUser" class="cabinet__wrapper__information__form">
            <span>lutyjpon439@gmail.com</span> <br>
            <span>2580367223Kirill!</span>
            <div>

              <div>
                <label for="email">Изменить почту</label>
                <input v-model="email" type="text" name="email" id="" placeholder="Введите почту">
              </div>
              <div>
                <label for="password">Изменить пароль</label>
                <input v-model="password" type="text" name="password" id="" placeholder="Введите пароль">
              </div>
            </div>
            <button class="cabinet__wrapper__information__form_button" type="submit">Сохранить</button>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {
  getAuth, signOut,
  EmailAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  reauthenticateWithCredential,
  verifyBeforeUpdateEmail
} from "firebase/auth";
import {collection, onSnapshot, query, orderBy} from "firebase/firestore";
import {db} from "@/firebase";
// import {ref} from 'vue';
import {useRouter} from "vue-router";


const auth = getAuth();
export default {
  data() {
    return {
      page: 'contacts',
      orderHistory: [],
      email: '',
      password: '',
    }
  },
  computed: {
    filteredOrderHistory() {
      return this.orderHistory.filter(ordersHistory => ordersHistory.userId === auth.lastNotifiedUid)
    },
  },
  methods: {
    movingPage(e) {
      this.page = e
    },
    withdrawalOrderHistory: function () {
      const basketQuery = query(collection(db, "orderHistory"), orderBy("dateTime", "desc"));

      onSnapshot(basketQuery, (snapshot) => {
        this.orderHistory = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            address: doc.data().address,
            comment: doc.data().comment,
            date: doc.data().date,
            delivery: doc.data().delivery,
            name: doc.data().name,
            orderDate: doc.data().orderDate,
            payment: doc.data().payment,
            phone: doc.data().phone,
            price: doc.data().price,
            product: doc.data().product || [],
            state: doc.data().state,
            time: doc.data().time,
            userId: doc.data().userId,
            email: doc.data().email,
            dateTime: doc.data().dateTime,
          }
        })
      })
    },

    async updateUser() {
      const user = auth.currentUser;
      if (!user) {
        alert('Пользователь не найден.');
        return;
      }
      if (!this.password || !this.email) {
        alert('Введите пароль и новый email.');
        return;
      }
      try {
        const credential = EmailAuthProvider.credential(user.email, this.password);
        await reauthenticateWithCredential(user, credential);
        await verifyBeforeUpdateEmail(user, this.email);

        sessionStorage.setItem('autoLoginEmail', this.email);
        sessionStorage.setItem('autoLoginPassword', this.password);

        alert('Письмо подтверждения отправлено на новую почту. Подтвердите её.');
      } catch (error) {
        alert('Ошибка: ' + error.message);
      }
    },
    async autoLoginAfterVerification() {
      const email = sessionStorage.getItem('autoLoginEmail');
      const password = sessionStorage.getItem('autoLoginPassword');
      if (email && password) {
        try {
          await signInWithEmailAndPassword(auth, email, password);
          sessionStorage.removeItem('autoLoginEmail');
          sessionStorage.removeItem('autoLoginPassword');
        } catch (error) {
          console.error('Ошибка:', error);
        }
      }
    }

  },
  setup() {
    const router = useRouter();

    const signOutUser = async () => {
      await signOut(auth);
      router.push('/');
    }

    return {
      signOut: signOutUser,
    };
  },
  mounted() {
    this.withdrawalOrderHistory();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        this.autoLoginAfterVerification();
      }
    });
  }
}
</script>

<style src="@/assets/style/Cabinet.css" scoped>

</style>