<template>
  <div class="basket">
    <div class="container">
      <div class="title">Ваша корзина</div>
      <div class="description">{{ filteredProductsCombo.length }} товара / {{ calculateFinalPrice() }} руб.</div>


      <div class="basket__wrapper">
        <div class="basket__wrapper__information">

          <div class="basket__wrapper__information__product">
            <div v-for="basket in filteredProductsCombo"
                 :key="basket.id">
              <div class="basket__wrapper__information__product__layout">
                <div class="basket__wrapper__information__product__layout_images"><img
                    :src="require(`@/../public/imagesFirebase/product/${basket.photo[0]}`)" alt="">
                </div>
                <div class="basket__wrapper__information__product__layout__things">
                  <div class="basket__wrapper__information__product__layout__things_title">
                    <strong>{{ basket.name }} <span> {{ totalQuantity(basket.tastes) }}  шт.</span></strong>
                  </div>
                  <div class="basket__wrapper__information__product__layout__things__description">
                    <div class=""
                         v-for="taste in basket.tastes"
                         :key="taste.id">
                      {{ taste.name }} {{ taste.quantity }} шт.
                    </div>
                  </div>
                </div>

                <div class="basket__wrapper__information__product__layout__quantity">
                  <button class="basket__wrapper__information__product__layout__quantity_minus"
                          @click="minusQuantityCarts(currentCartId, basket.id)"><span>-</span></button>
                  <div class="basket__wrapper__information__product__layout__quantity_number">
                    {{ basket.quantity }}
                  </div>
                  <button class="basket__wrapper__information__product__layout__quantity_plus"
                          @click="plusQuantityCarts(currentCartId, basket.id)"><span>+</span></button>
                </div>
                <div class="basket__wrapper__information__product__layout__price">
                  <div> Цена: <span>{{ basket.price * basket.quantity }} руб.</span></div>
                </div>
                <div @click="deleteCarts(currentCartId,  basket.cartsId)"
                     class="basket__wrapper__information__product__layout_cross"><i class="ic_cross"></i></div>

              </div>
              <hr>
            </div>

            <div class="basket__wrapper__information__product__total-price">
              <div class="basket__wrapper__information__product__total-price_description">Общая стоимость Вашей покупки
                без учета доставки составит:
              </div>
              <div class="basket__wrapper__information__product__total-price_price">
                {{ calculateFinalPrice() }} руб.
              </div>
            </div>
          </div>

          <div class="basket__wrapper__information__delivery">
            <div class="title">Доставка</div>
            <div class="description">Укажите контактные данные и выберите способ
              доставки
            </div>

            <form @submit.prevent="addDelivery" class="basket__wrapper__information__delivery__forms">

              <div class="basket__wrapper__information__delivery__forms_contact">
                <div class="">
                  <label for="name">Ваше имя*</label>
                  <input type="text" id="name" v-model="name" placeholder="Укажите имя"></div>
                <div class="">
                  <label for="phone">Ваш телефон*</label>
                  <input type="text" id="phone" v-model="phone" placeholder="+7 (___) ___-__-__"></div>
              </div>

              <div class="basket__wrapper__information__delivery__forms__way">
                <div class="basket__wrapper__information__delivery__forms_title">Способ доставки:</div>

                <div class="basket__wrapper__information__delivery__forms__way__choice">
                  <div class="basket__wrapper__information__delivery__forms__way__choice__courier"
                       :class="{'selected': selectedDelivery === 'courier'}"
                       @click="selectDelivery('courier')">

                    <i class="ic_wheelbarrow"></i>
                    <div class="basket__wrapper__information__delivery__forms__way__choice__courier_price">
                      <div class="">Курьерская доставка <span>400 руб.</span></div>
                    </div>
                  </div>
                  <div class="basket__wrapper__information__delivery__forms__way__choice__courier"
                       :class="{'selected': selectedDelivery === 'pickup'}"
                       @click="selectDelivery('pickup')">
                    <i class="ic_hand"></i>
                    <div class="basket__wrapper__information__delivery__forms__way__choice__courier_price">
                      <div class="">Самовывоз <span>Бесплатно</span></div>
                    </div>
                  </div>
                </div>

              </div>

              <div class="basket__wrapper__information__delivery__forms_comment">
                <label for="address">Адрес доставки</label>
                <textarea id="address" v-model="address" placeholder="Не нужно заполнять при самовывозе"></textarea>
              </div>

              <div class="basket__wrapper__information__delivery__forms_contact">
                <div class="">
                  <label for="date">Дата получения</label>
                  <input type="text" id="date" v-model="date" placeholder="Укажите дату"></div>
                <div class="">
                  <label for="time">Время</label>
                  <input type="text" id="time" v-model="time" placeholder="Укажите время"></div>
              </div>

              <div class="basket__wrapper__information__delivery__forms_comment">
                <label for="comment">Комментарий к заказe</label>
                <textarea id="comment"
                          v-model="comment"
                          placeholder="Здесь Вы можете написать пожелания, относительно анонимной доставки, текста открытки и другое."></textarea>
              </div>

              <div class="basket__wrapper__information__delivery__forms__payment">
                <div class="basket__wrapper__information__delivery__forms_title">Метод оплаты</div>

                <div class="basket__wrapper__information__delivery__forms__payment__method">
                  <div>
                    <input
                        @change="selectPayment('card')"
                        type="checkbox"
                        value="card"
                        :checked="selectedPayment === 'card'"
                    >
                    <label for="">Оплата картой онлайн</label>
                  </div>
                  <hr>
                  <div>
                    <input
                        @change="selectPayment('cash')"
                        type="checkbox"
                        value="cash"
                        :checked="selectedPayment === 'cash'"
                    >
                    <label for="">Наличными при получении</label>
                  </div>
                  <hr>
                  <div>
                    <input
                        @change="selectPayment('yandex')"
                        type="checkbox"
                        value="yandex"
                        :checked="selectedPayment === 'yandex'"
                    >
                    <label for="">Яндекс деньги</label>
                  </div>
                </div>

              </div>

              <hr>

              <div class="basket__wrapper__information__delivery__forms__result">
                <div class="basket__wrapper__information__delivery__forms__result_sum">Итоговая сумма заказа вместе с
                  доставкой:
                </div>
                <div class="basket__wrapper__information__delivery__forms__result_price"> {{ calculateFinalPrice() }}
                  руб.
                </div>
              </div>

              <hr>

              <button class="basket__wrapper__information__delivery__forms_btn">Оформить заказ</button>
              <div class="basket__wrapper__information__delivery__forms_offer">Нажимая на кнопку "Оформить заказ" Я
                принимаю и соглашаюсь с <span> Договором оферты </span> и разрешаю обработку моих персональных данных в
                соответствии с
                <span> Политикой конфиденциальности</span>
              </div>
            </form>
          </div>
        </div>

        <div class="basket__wrapper__result">
          <div class="basket__wrapper__result_title">Итого</div>

          <div class="basket__wrapper__result__information">
            <div class="basket__wrapper__result__information__card">
              <div class="basket__wrapper__result__information__card_title">Стоимость товаров</div>
              <div class="basket__wrapper__result__information__card_dot-one"></div>
              <div class="basket__wrapper__result__information__card_price">700 руб</div>
            </div>
            <div class="basket__wrapper__result__information__card">
              <div class="basket__wrapper__result__information__card_title">Скидка</div>
              <div class="basket__wrapper__result__information__card_dot-two"></div>
              <div class="basket__wrapper__result__information__card_price">0 руб</div>
            </div>
            <div class="basket__wrapper__result__information__card">
              <div class="basket__wrapper__result__information__card_title">Доставка</div>
              <div class="basket__wrapper__result__information__card_dot-three"></div>
              <div class="basket__wrapper__result__information__card_price">400 руб</div>
            </div>
            <hr>
            <div class="basket__wrapper__result__information__card">
              <div class="basket__wrapper__result__information__card_title">К оплате</div>
              <div class="basket__wrapper__result__information__card_price"><strong> {{ calculateFinalPrice() }}
                руб</strong></div>
            </div>
          </div>
          <hr>

          <button class="basket__wrapper__result_btn">Оформить заказ</button>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import {addDoc, collection, doc, getDocs, onSnapshot, query, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from "@/firebase";
import {ref} from 'vue';
import {getAuth} from "firebase/auth";

const auth = getAuth();
export default {
  data() {
    return {
      basket: ref([]),
      carts: ref([]),
      product: ref([]),
      selectedDelivery: 'courier',
      selectedPayment: null,
      name: ref(''),
      phone: ref(''),
      address: ref(''),
      date: ref(''),
      time: ref(''),
      comment: ref(''),
    }

  },
  computed: {
    filteredProductsCombo() {
      const cartsProductId = this.carts.map(cart => cart.product_id);
      const filteredProducts = this.product.filter(product => cartsProductId.includes(product.id));

      return filteredProducts.map(product => {
        const cart = this.carts.find(cart => cart.product_id === product.id);
        return {
          ...product,
          quantity: cart ? cart.quantity : 0, // Добавляем quantity из carts
          cartsId: cart ? cart.id : null,
        };
      });
    },

  },
  methods: {
    addDelivery: async function () {
      const delivery = this.selectedDelivery === 'courier' ? 'Курьерская доставка' : 'Самовывоз';
      const price = this.calculateFinalPrice();
      const products = this.filteredProductsCombo
      const productIds = products.map(product => product.id);
      let paymentMethod;

      if (this.selectedPayment === 'card') {
        paymentMethod = 'Оплата картой онлайн';
      } else if (this.selectedPayment === 'cash') {
        paymentMethod = 'Наличными при получении';
      } else if (this.selectedPayment === 'yandex') {
        paymentMethod = 'Наличными при получении';
      } else {
        paymentMethod = 'не выбран';
      }

      const orderDetails = {
        address: this.address || null,
        comment: this.comment || null,
        date: this.date || null,
        delivery: delivery || null,
        name: this.name || null,
        payment: paymentMethod || null,
        phone: this.phone || null,
        state: "новый" || null,
        time: this.time || null,
        price: price || null,
        userId: auth.lastNotifiedUid || null,
        product: productIds || null,
      };
      await addDoc(collection(db, 'orderHistory'), orderDetails)
      await addDoc(collection(db, 'applications'), orderDetails)
    },
    totalQuantity(tastes) {
      return tastes.reduce((total, taste) => {
        const quantity = parseInt(taste.quantity, 10); // Преобразуем строку в число
        return total + (isNaN(quantity) ? 0 : quantity); // Если преобразование не удалось, добавляем 0
      }, 0);
    },
    calculateTotalPrice() {
      let total = 0;
      this.filteredProductsCombo.forEach(product => {
        total += product.price * product.quantity;
      });
      return total;
    },
    calculateFinalPrice() {
      const deliveryCost = this.selectedDelivery === 'courier' ? 0 : 0;
      return this.calculateTotalPrice() + deliveryCost;
    },
    selectDelivery(selected) {
      this.selectedDelivery = selected
    },
    selectPayment(selected) {
      if (this.selectedPayment === selected) {
        // Если выбранный метод отличается от текущего, обновляем его
        this.selectedPayment = null; // Сбрасываем выбор, если повторно нажали
      } else {
        this.selectedPayment = selected; // Устанавливаем новый выбранный метод
      }
    },
    withdrawalBasket: function () {
      const basketQuery = query(collection(db, "basket"));

      onSnapshot(basketQuery, (snapshot) => {
        this.basket = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            cartsId: doc.data().cartsId,
            userId: doc.data().userId,
          }
        })
        const currentUser = this.basket.find(basket => basket.userId === auth.lastNotifiedUid);
        if (currentUser) {
          this.currentCartId = currentUser.cartsId;
          this.withdrawalCarts(this.currentCartId);
        } else {
          console.error("Корзина для пользователя не найдена.");
        }
      })
    },
    withdrawalCarts: function (cartId) {
      if (!cartId) {
        console.error("CartId возможно не найден");
        return;
      }
      const cartsDocRef = doc(db, "basket", "carts");
      const cartsCollectionRef = collection(cartsDocRef, cartId);
      const cartsQuery = query(cartsCollectionRef);
      onSnapshot(cartsQuery, (snapshot) => {
        this.carts = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            product_id: doc.data().product_id,
            quantity: doc.data().quantity,
          }
        });
      });
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
    updateCartQuantity: async function (cartId, itemId, change) {
      if (!cartId) {
        console.error("CartId или itemId возможно не найден");
        return;
      }

      const cartsDocRef = doc(db, 'basket', "carts");
      const cartsCollectionRef = collection(cartsDocRef, cartId);
      const cartsQuery = query(cartsCollectionRef);
      const querySnapshot = await getDocs(cartsQuery);

      let existingItem = null;
      querySnapshot.forEach(doc => {
        if (doc.data().product_id === itemId) {
          existingItem = doc;
        }
      });

      if (existingItem) {
        const newQuantity = existingItem.data().quantity + change;
        if (newQuantity > 0) {
          await updateDoc(existingItem.ref, {quantity: newQuantity});
        } else {
          await deleteDoc(existingItem.ref);
        }
      } else if (change > 0) {
        await addDoc(cartsCollectionRef, {product_id: itemId, quantity: 1});
      }
    },
    plusQuantityCarts: async function (cartId, itemId) {
      await this.updateCartQuantity(cartId, itemId, 1);
    },
    minusQuantityCarts: async function (cartId, itemId) {
      await this.updateCartQuantity(cartId, itemId, -1);
    },
    deleteCarts(cartId, id) {
      if (!cartId) {
        console.error("CartId или itemId возможно не найден");
        return;
      }

      console.log(id)
      const cartsDocRef = doc(db, 'basket', "carts");
      const cartsCollectionRef = doc(cartsDocRef, cartId, id);
      console.log(cartsCollectionRef.path)

      deleteDoc(cartsCollectionRef);
    },

  }
  ,
  mounted() {
    this.withdrawalBasket();
    this.withdrawalCarts();
    this.withdrawalProduct();
  }
  ,
}
</script>

<style src="@/assets/style/Basket.css" scoped>

</style>