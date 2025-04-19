<template>
  <div class="basket">
    <div class="container">
      <div class="title" id="messageSuccessfully">Ваша корзина</div>
      <div class="description">{{ filteredProductsCombo.length }} товара / {{ calculateFinalPrice() }} руб.</div>

      <div class="messageSuccessfully">{{ messageSuccessfully }}</div>
      <div class="basket__wrapper">
        <div class="basket__wrapper__information">

          <div class="basket__wrapper__information__product">
            <div v-for="basket in filteredProductsCombo"
                 :key="basket.id">
              <div class="basket__wrapper__information__product__layout">
                <div class="basket__wrapper__information__product__layout_images"><img
                    :src="`/imagesFirebase/product/${basket.photo[0]}`" alt="">
                </div>
                <div class="basket__wrapper__information__product__layout__things">
                  <div class="basket__wrapper__information__product__layout__things_title">
                    <strong>{{ basket.name }} </strong>
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
                <div class="" id="errorMessageName">
                  <label for="name">Ваше имя*</label>
                  <input type="text" id="name" v-model="name" placeholder="Укажите имя" :class="{'errorInput': errorMessageName}">
                  <div class="errorMessage">{{ errorMessageName }}</div>
                </div>
                <div class="" id="errorMessagePhone">
                  <label for="phone">Ваш телефон*</label>
                  <input type="tel" id="phone" v-model="phone"
                         placeholder="+7 (___) ___-__-__"
                         @input="formatPhone"
                         @focus="setInitialPhone"
                         :class="{'errorInput': errorMessagePhone}"
                  >
                  <div class="errorMessage">
                    {{ errorMessagePhone }}
                  </div>
                </div>
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

              <div class="basket__wrapper__information__delivery__forms_comment" id="errorMessageAddress">
                <label for="address">Адрес доставки</label>
                <textarea id="address" v-model="address" placeholder="Не нужно заполнять при самовывозе" :class="{'errorInput': errorMessageAddress}"></textarea>
                <div class="errorMessage">
                  {{ errorMessageAddress }}
                </div>
              </div>

              <div class="basket__wrapper__information__delivery__forms_contact">
                <div class="" id="errorMessageDate">
                  <label for="date">Дата получения</label>
                  <input type="date" id="date" v-model="date" :class="{'errorInput': errorMessageDate}">
                  <div class="errorMessage">{{ errorMessageDate }}</div>
                </div>
                <div class="" id="errorMessageTime">
                  <label for="time">Время</label>
                  <input type="time" id="time" v-model="time" :class="{'errorInput': errorMessageTime}">
                  <div class="errorMessage">{{ errorMessageTime }}</div>
                </div>
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
                <div class="basket__wrapper__information__delivery__forms__result_price"
                     v-if="selectedDelivery === 'courier'">
                  {{ calculateFinalPrice() + 400 }} руб.
                </div>
                <div class="basket__wrapper__information__delivery__forms__result_price" v-else>
                  {{ calculateFinalPrice() }} руб.
                </div>
              </div>
              {{ errorMessage }}
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
            <!--            <div class="basket__wrapper__result__information__card">-->
            <!--              <div class="basket__wrapper__result__information__card_title">Стоимость товаров</div>-->
            <!--              <div class="basket__wrapper__result__information__card_dot-one"></div>-->
            <!--              <div class="basket__wrapper__result__information__card_price">700 руб</div>-->
            <!--            </div>-->
            <!--            <div class="basket__wrapper__result__information__card">-->
            <!--              <div class="basket__wrapper__result__information__card_title">Скидка</div>-->
            <!--              <div class="basket__wrapper__result__information__card_dot-two"></div>-->
            <!--              <div class="basket__wrapper__result__information__card_price">0 руб</div>-->
            <!--            </div>-->
            <div class="basket__wrapper__result__information__card">
              <div class="basket__wrapper__result__information__card_title"
                   v-if="selectedDelivery === 'courier'">
                Доставка
              </div>
              <div class="basket__wrapper__result__information__card_title"
                   v-else>
                Самовывоз
              </div>
              <div class="basket__wrapper__result__information__card_dot-three"></div>
              <div class="basket__wrapper__result__information__card_price"
                   v-if="selectedDelivery === 'courier'">
                400 руб
              </div>
              <div class="basket__wrapper__result__information__card_price"
                   v-else>
                бесплатно
              </div>
            </div>
            <hr>
            <div class="basket__wrapper__result__information__card">
              <div class="basket__wrapper__result__information__card_title">К оплате</div>
              <div class="basket__wrapper__result__information__card_price" v-if="selectedDelivery === 'courier'">
                <strong> {{ calculateFinalPrice() + 400 }}
                  руб</strong>
              </div>
              <div class="basket__wrapper__result__information__card_price" v-else>
                <strong> {{ calculateFinalPrice() }}
                  руб</strong>
              </div>
            </div>

          </div>
          <hr>
          <form @submit.prevent="addDelivery">
            <button class="basket__wrapper__result_btn">Оформить заказ</button>
          </form>
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
      selectedPayment: "cash",
      name: ref(''),
      phone: ref(''),
      address: ref(''),
      date: ref(''),
      time: ref(''),
      comment: ref(''),
      errorMessage: null,
      errorMessageName: null,
      errorMessagePhone: null,
      errorMessageAddress: null,
      errorMessageDate: null,
      errorMessageTime: null,
      messageSuccessfully: null,
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
    formatPhone() {
      let cleaned = this.phone.replace(/\D/g, '');

      if (cleaned.startsWith('9') && cleaned.length === 1) {
        cleaned = '7' + cleaned;
      }

      if (cleaned.length > 11) {
        cleaned = cleaned.substring(0, 11);
      }

      const match = cleaned.match(/^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
      if (match) {
        this.phone = `+7 ${match[2] ?  match[2] : ''} ${match[3]} ${match[4]} ${match[5]}`.trim();
      } else {
        this.phone = '';
      }
    },
    setInitialPhone() {
      if (!this.phone) {
        this.phone = '+7 ';
      }
    },
    validateFields() {
      // Сброс ошибок
      this.errorMessageName = null;
      this.errorMessagePhone = null;
      this.errorMessageAddress = null;
      this.errorMessageDate = null;
      this.errorMessageTime = null;

      const trimmedName = this.name.trim();
      const trimmedPhone = this.phone.trim();
      const trimmedAddress = this.address.trim();
      const trimmedDate = this.date.trim();
      const trimmedTime = this.time.trim();

      const messageSuccessfully = document.getElementById('messageSuccessfully');
      const errorMessageName = document.getElementById('errorMessageName');
      const errorMessagePhone = document.getElementById('errorMessagePhone');
      const errorMessageAddress = document.getElementById('errorMessageAddress');
      const errorMessageDate = document.getElementById('errorMessageDate');
      const errorMessageTime = document.getElementById('errorMessageTime');


      if (this.filteredProductsCombo.length <= 0) {
        this.messageSuccessfully = "Пожалуйста добавьте товары в корзину"
        messageSuccessfully.scrollIntoView({behavior: 'smooth'});

      } else if (!trimmedName) {
        this.errorMessageName = "Заполните имя";
        errorMessageName.scrollIntoView({behavior: 'smooth'});
      } else if (!trimmedPhone) {
        this.errorMessagePhone = "Заполните телефон";
        errorMessagePhone.scrollIntoView({behavior: 'smooth'});
      } else if (!trimmedAddress) {
        this.errorMessageAddress = "Заполните адрес";
        errorMessageAddress.scrollIntoView({behavior: 'smooth'});
      } else if (!trimmedDate) {
        this.errorMessageDate = "Заполните дату";
        errorMessageDate.scrollIntoView({behavior: 'smooth'});
      } else if (!trimmedTime) {
        this.errorMessageTime = "Заполните время";
        errorMessageTime.scrollIntoView({behavior: 'smooth'});
      }

      // Проверка на наличие ошибок
      return !this.errorMessageName && !this.errorMessagePhone && !this.errorMessageAddress && !this.errorMessageDate && !this.errorMessageTime && !this.messageSuccessfully;
    },
    addDelivery: async function () {
      if (!this.validateFields()) {
        return; // Если есть ошибки, прерываем выполнение метода
      }

      try {
        const delivery = this.selectedDelivery === 'courier' ? 'Курьерская доставка' : 'Самовывоз';
        let price = this.calculateFinalPrice();
        const products = this.filteredProductsCombo

        const productList = products.map(product => ({
          id: product.id || null,
          quantity: product.quantity || null
        }));

        const email = auth.currentUser.email;
        const now = new Date();
        // Получаем необходимые части даты
        const day = now.getDate();
        const month = now.getMonth() + 1; // Месяцы идут с 0 (январь = 0)
        const year = now.getFullYear();
        const hours = now.getHours();
        const minutes = now.getMinutes();

        const formattedDay = day < 10 ? '0' + day : day;
        const formattedMonth = month < 10 ? '0' + month : month;
        const formattedHours = hours < 10 ? '0' + hours : hours;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

        const orderDate = `${formattedDay}.${formattedMonth}.${year} ${formattedHours}.${formattedMinutes}`;

        let paymentMethod;

        if (this.selectedDelivery === 'courier') {
          price += 400
        }

        if (this.selectedPayment === 'card') {
          paymentMethod = 'Оплата картой онлайн';
        } else if (this.selectedPayment === 'cash') {
          paymentMethod = 'Наличными при получении';
        } else if (this.selectedPayment === 'yandex') {
          paymentMethod = 'Яндекс деньги';
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
          state: "принят",
          time: this.time || null,
          price: price || null,
          userId: auth.lastNotifiedUid || null,
          product: productList,
          orderDate: orderDate,
          email: email,
          dateTime: Date.now(),
        };
        await addDoc(collection(db, 'orderHistory'), orderDetails)

        const messageSuccessfully = document.getElementById('messageSuccessfully');
        messageSuccessfully.scrollIntoView({behavior: 'smooth'});
        this.messageSuccessfully = "Успешно купили товар"
        setTimeout(() => {
          this.messageSuccessfully = null
        }, 30000)

        this.name = null
        this.phone = null
        this.address = null
        this.date = null
        this.time = null
        this.comment = null

        const cartsDocRef = doc(db, 'basket', "carts");
        const cartsCollectionRef = collection(cartsDocRef, this.currentCartId); // Используем текущий cartId
        const querySnapshot = await getDocs(cartsCollectionRef);
        const deletePromises = querySnapshot.docs.map(doc => deleteDoc(doc.ref));

        await Promise.all(deletePromises);
        this.$router.push("/cabinet");
      } catch (err) {
        err.value = err.message;
        console.error("Ошибка регистрации:", err.message);
      }
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