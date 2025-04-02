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

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {getAuth} from "firebase/auth";
import {collection, onSnapshot, query, orderBy} from "firebase/firestore";
import {db} from "@/firebase";
import {ref} from 'vue';


const auth = getAuth();
export default {
  data() {
    return {
      page: 'story',
      orderHistory: ref([]),
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
  },
  mounted() {
    this.withdrawalOrderHistory();
  }
}
</script>

<style src="@/assets/style/Cabinet.css" scoped>

</style>