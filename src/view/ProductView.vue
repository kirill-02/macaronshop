<template>
  <!--  <div>-->
  <!--    <h1 v-if="productData">{{ productData.id }}</h1>-->
  <!--    <h2 v-if="productData">{{ productData.title }}</h2>-->
  <!--    <img v-if="productData" :src="require(`@/../public/img/home/5/${productData.img}`)" alt="">-->
  <!--    <p v-if="productData">{{ productData.description }}</p>-->
  <!--    <p v-if="productData">Цена: {{ productData.price }} руб</p>-->
  <!--    <p v-else>Продукт не найден.</p>-->
  <!--  </div>-->
  <div class="product">
    <div class="container">
      <div class="product__wrapper" v-if="productData">
        <div class="product__wrapper__card-product">
          <div class="product__wrapper__informations__title">
            {{ productData.name }}
            <p>40 макаронс в круглой коробке с персональной надписью</p>
          </div>
          <div class="product__wrapper__images">
            <img :src="currentImage " alt="">
            <div class="product__wrapper__images__card">
              <div
                  class="product__wrapper__images__card_img"
                  v-for="(image, index) in thumbnailImages"
                  :key="index"
                  @click="currentImage = require(`@/../public/imagesFirebase/product/${image}`)"
              >
                <img :src="require(`@/../public/imagesFirebase/product/${image}`)" alt="">
              </div>
            </div>
          </div>
          <div class="product__wrapper__block">
            <div class="product__wrapper__information">
              <div class="product__wrapper__information__title">
                {{ productData.name }}
                <p>40 макаронс в круглой коробке с персональной надписью</p>
              </div>
              <div class="product__wrapper__information__tastes">
                <div class="product__wrapper__information__tastes_title">Вкусы:</div>

                <div class="product__wrapper__information__tastes__name-quantity"
                     v-for="taste in productData.tastes" :key="taste.id">
                  <div class="product__wrapper__information__tastes__name-quantity_name">{{ taste.name }}</div>
                  <div class="product__wrapper__information__tastes__name-quantity_dot"></div>
                  <div class="product__wrapper__information__tastes__name-quantity_quantity">{{ taste.quantity }} шт
                  </div>
                </div>
              </div>
            </div>

            <div class="product__wrapper__price">
              <div> {{ productData.price }} руб
              </div>
              <button
                  @click="addCarts(currentCartId, productData.id)"
                  class="product__wrapper__price_btn"
                  v-if="isLoggedIn"
              >
                <i class="ic_basket"></i>
                В корзину
              </button>
              <div v-else class="black"> <router-link to="/auth">  зарегистрируйтесь чтобы добавить корзину</router-link></div>
            </div>

            <div class="product__wrapper__delivery">

              <div class="product__wrapper__delivery__card">
                <i class="ic_wheelbarrow"></i>
                <div class="product__wrapper__delivery__card_description">Доставка от 400 руб. в день заказа с 12 до 17
                  или
                  с 17 до 21. Бесплатно при заказе на сумму от 2000 руб
                </div>
              </div>

              <div class="product__wrapper__delivery__card">
                <i class="ic_hand"></i>
                <div class="product__wrapper__delivery__card_description">Самовывоз бесплатно. Через 3 часа после оплаты
                  заказа
                </div>
              </div>

              <div class="product__wrapper__delivery__card">
                <i class="ic_present"></i>
                <div class="product__wrapper__delivery__card_description">Можем преподнести как анонимный подарок:)
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="product__wrapper__description">
          <div class="product__wrapper__description__title">
            <button
                class="product__wrapper__description__title_btn"
                @click="setActiveSection(0)"
            >
              Описание
              <div class="div" v-if="activeSection === 0"></div>
            </button>
            <button
                class="product__wrapper__description__title_btn"
                @click="setActiveSection(1)"
            >
              Состав и пищевая ценность
              <div class="div" v-if="activeSection === 1"></div>
            </button>
            <button
                class="product__wrapper__description__title_btn"
                @click="setActiveSection(2)"
            >
              Условия и срок хранения
              <div class="div" v-if="activeSection === 2"></div>
            </button>
          </div>
          <hr>
          <div class="product__wrapper__description__description">
            <p v-html="productTitle"></p>
            <p v-html="productDescription"></p>
          </div>
        </div>

        <div class="popular-sets">
          <div class="title">Хотите попробовать всё сразу?</div>
          <div class="popular-sets__wrapper">
            <div class="popular-sets__wrapper__cards">
              <app-sets-card
                  v-for="products in filteredProductsCombo"
                  :key="products.id"
                  :id="products.id"
                  :img="require(`@/../public/imagesFirebase/product/${products.photo[0]}`)"
                  :title="products.name"
                  :description="products.description"
                  :price="products.price"
              ></app-sets-card>
            </div>
            <app-border-button
                text='Все готовые наборы'
                :hasMoreSets="hasMoreSets"
                @show-more="showMore">
            </app-border-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {addDoc, collection, doc, getDocs, onSnapshot, query, updateDoc} from "firebase/firestore";
import {db} from "@/firebase";
import {ref} from "vue";
import {getAuth, onAuthStateChanged} from "firebase/auth";

const auth = getAuth();
export default {
  data() {

    return {
      product: ref([]),
      basket: ref([]),
      carts: ref([]),
      currentImage: '',
      activeSection: 0, // Индекс активной секции
      visibleSetCount: 4,
    }
  },
  computed: {
    productData() {
      const id = this.$route.params.id; // Получаем id из URL и преобразуем его в число
      return this.product.find(set => set.id === id) || null; // Ищем продукт по id
    },
    filteredProductsCombo() {
      return this.product
          .filter(product => product.title === 'combo')
          .slice(0, this.visibleSetCount);
    },
    productTitle() {
      return this.productData.description_composition_condition[this.activeSection].title;
    },
    productDescription() {
      return this.productData.description_composition_condition[this.activeSection].description;
    },

    hasMoreSets() {
      return this.visibleSetCount < this.product.length;
    },

    thumbnailImages() {
      return [
        this.productData?.photo[0],
        this.productData?.photo[1],
        this.productData?.photo[2],
      ].filter(Boolean); // Возвращаем массив миниатюр, исключая пустые значения
    }
  },
  methods: {
    setActiveSection(index) {
      this.activeSection = index; // Устанавливаем активную секцию
    },
    showMore() {
      return this.visibleSetCount += 4
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
        if (this.productData) {
          this.currentImage = require(`@/../public/imagesFirebase/product/${this.productData.photo[0]}`); // Устанавливаем первое изображение как текущее
        }
      });
    },

    withdrawalBasket: function () {
      const basketQuery = query(collection(db, "basket"));
      onSnapshot(basketQuery, (snapshot) => {
        this.basket = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            cartsId: doc.data().cartsId,
            userId: doc.data().userId,
          }
        });
        const currentUser = this.basket.find(basket => basket.userId === auth.lastNotifiedUid);
        if (currentUser) {
          this.currentCartId = currentUser.cartsId;
          this.withdrawalCarts(this.currentCartId);
        } else {
          console.error("Корзина для пользователя не найдена.");
        }
      });
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

    addCarts: async function (cartId, itemId) {
      if (!cartId || !itemId) {
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
        const newQuantity = existingItem.data().quantity + 1;
        await updateDoc(existingItem.ref, {
          quantity: newQuantity,
        });
      } else {
        await addDoc(cartsCollectionRef, {
          product_id: itemId,
          quantity: 1,
        });
        console.log(`Товар добавлен в корзину`);
      }
    },
  },
  setup() {
    const isLoggedIn = ref(true);

    onAuthStateChanged(auth, (user) => {
          if (user) {
            isLoggedIn.value = true;
          } else {
            isLoggedIn.value = false;
          }
        }
    )

    return {
      isLoggedIn,
    }
  },
  mounted() {
    this.withdrawalProduct();
    this.withdrawalBasket()
    this.withdrawalCarts()
  },
}
</script>
<style src="../assets/style/Product.css" scoped>

</style>