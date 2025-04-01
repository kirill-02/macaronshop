<template>
  <div v-if="orderHistoryData" class="order-history">
    <div class="container">
      <div class="order-history__wrapper">
        <div class="order-history__wrapper_title">Заказ: {{ orderHistoryData.id }}</div>
        <div class="order-history__wrapper_description">Информация о заказе</div>
        <hr>
        <div class="order-history__wrapper__cards">

          <div class="order-history__wrapper__cards__card">
            <div class="order-history__wrapper__cards__card__title">Дата оформления</div>
            <div class="order-history__wrapper__cards__card_description">{{ orderHistoryData.orderDate }}</div>
          </div>
          <hr>
          <div class="order-history__wrapper__cards__card">
            <div class="order-history__wrapper__cards__card__title">Сумма и статус</div>
            <div class="order-history__wrapper__cards__card_description">
              <span>  Цена: {{ orderHistoryData.price }}</span>
              <span> Статус: {{ orderHistoryData.state }}</span>
            </div>
          </div>
          <hr>
          <div class="order-history__wrapper__cards__card">
            <div class="order-history__wrapper__cards__card__title">Способ оплаты</div>
            <div class="order-history__wrapper__cards__card_description">{{ orderHistoryData.payment }}</div>
          </div>
          <hr>
          <div class="order-history__wrapper__cards__card">
            <div class="order-history__wrapper__cards__card__title">Способ доставки</div>
            <div class="order-history__wrapper__cards__card_description">{{ orderHistoryData.delivery }}</div>
          </div>
          <hr>
          <div class="order-history__wrapper__cards__card">
            <div class="order-history__wrapper__cards__card__title">Адрес доставки</div>
            <div class="order-history__wrapper__cards__card_description">{{ orderHistoryData.address }}</div>
          </div>
          <hr>
          <div class="order-history__wrapper__cards__card">
            <div class="order-history__wrapper__cards__card__title">Получатель</div>
            <div class="order-history__wrapper__cards__card_description">
              <span>  Имя: {{ orderHistoryData.name }}</span>
              <span> Телефон: {{ orderHistoryData.phone }}</span>
            </div>
          </div>
          <hr>
          <div class="order-history__wrapper__cards__card">
            <div class="order-history__wrapper__cards__card__title">Дата и время</div>
            <div class="order-history__wrapper__cards__card_description">
              <span>  Дата: {{ orderHistoryData.date }}</span>
              <span>   Время: {{ orderHistoryData.time }}</span>
            </div>
          </div>
          <hr>
          <div class="order-history__wrapper__cards__card">
            <div class="order-history__wrapper__cards__card__title">Email</div>
            <div class="order-history__wrapper__cards__card_description">{{ orderHistoryData.email }}</div>
          </div>
          <hr>
          <div class="order-history__wrapper__cards__card">
            <div class="order-history__wrapper__cards__card__title">Комментарии к заказу</div>
            <div class="order-history__wrapper__cards__card_description">{{ orderHistoryData.comment }}</div>
          </div>

        </div>
        <hr>
       <div class="order-history__wrapper_description">Состав заказа</div>
        <div class="order-history__wrapper__information__product">
          <div v-for="product in filteredProducts" :key="product.id">
            <div class="order-history__wrapper__information__product__layout">
              <div class="order-history__wrapper__information__product__layout_images">
                <img
                    :src="require(`@/../public/imagesFirebase/product/${product.photo[0]}`)" alt="">
              </div>
              <div class="order-history__wrapper__information__product__layout__things">
                <div class="order-history__wrapper__information__product__layout__things_title">
                  <strong>{{ product.name }}<span></span></strong>
                </div>
                <div class="order-history__wrapper__information__product__layout__things__description">
                  <div class=""
                       v-for="taste in product.tastes"
                       :key="taste.id">
                    {{ taste.name }} {{ taste.quantity }} шт.
                  </div>
                </div>
              </div>

              <div class="order-history__wrapper__information__product__layout__quantity">
                <div class="order-history__wrapper__information__product__layout__quantity_number">
                  Количество: {{ product.quantity }}
                </div>
              </div>
              <div class="order-history__wrapper__information__product__layout__price">
                <div> Цена: <span> {{ product.price * product.quantity }} руб.</span></div>
              </div>

            </div>
            <hr>
          </div>

          <div class="order-history__wrapper__information__product__total-price">
            <div class="order-history__wrapper__information__product__total-price_description">Общая стоимость Вашей
              покупки :
            </div>
            <div class="order-history__wrapper__information__product__total-price_price">
              {{ orderHistoryData.price }} руб.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {collection, onSnapshot, query} from "firebase/firestore";
import {db} from "@/firebase";
import {ref} from 'vue';
import {getAuth} from "firebase/auth";

const auth = getAuth();
export default {
  data() {
    return {
      orderHistory: ref([]),
      product: ref([]),
    }
  },
  computed: {
    orderHistoryData() {
      const orderHistoryUserId = this.orderHistory.filter(ordersHistory => ordersHistory.userId === auth.lastNotifiedUid);
      const id = this.$route.params.id;
      return orderHistoryUserId.find(set => set.id === id) || null;
    },
    filteredProducts() {
      const productDetails = this.orderHistoryData.product;
      const productOrderHistory = this.product
          .filter(product => productDetails.some(detail => detail.id === product.id)).map(product => {
            const detail = productDetails.find(detail => detail.id === product.id);
            return {
              ...product,
              quantity: detail.quantity
            };
          });

      return productOrderHistory;
    }
  },
  methods: {
    withdrawalOrderHistory: function () {
      const basketQuery = query(collection(db, "orderHistory"));

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
          }
        })
      })
    },
    withdrawalProduct: function () {
      const productQuery = query(collection(db, "product"));

      onSnapshot(productQuery, (snapshot) => {
        this.product = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            name: doc.data().name,
            price: doc.data().price,
            description: doc.data().description,
            photo: doc.data().photo || [],
            compound: doc.data().compound || [],
            storage_conditions: doc.data().storage_conditions || [],
            description_composition_condition: doc.data().description_composition_condition || [],
            tastes: doc.data().tastes || [],
            title: doc.data().title,
            search: doc.data().search,
          }
        });

      });
    },

  },
  mounted() {
    this.withdrawalOrderHistory();
    this.withdrawalProduct();
  }
}
</script>

<style src="@/assets/style/OrderHistory.css" scoped>

</style>