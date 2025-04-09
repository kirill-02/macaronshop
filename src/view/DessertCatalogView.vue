<template>
  <div class="dessert-catalog">
    <div class="container">
      <div class="title">Каталог десертов</div>
      <div class="dessert-catalog__wrapper">
        <div class="dessert-catalog__wrapper__cakes">
          <div class="dessert-catalog__wrapper__cakes_img"><img src="../../public/img/dessertСatalog/1.png" alt="">
          </div>
          <div class="dessert-catalog__wrapper__cakes_information">
            <div class="dessert-catalog__wrapper__cakes_information_title">Пирожные макарон</div>
            <div class="dessert-catalog__wrapper__cakes_information_description">Самые классные, самые лучшие, свежие,
              воздушные, хрустящие макарушки. лучшее, что мы умеем делать.
            </div>
            <div class="dessert-catalog__wrapper__cakes_information__btn">
              <router-link to="/ready-sets" class="dessert-catalog__wrapper__cakes_information__btn_kit">Готовые наборы
              </router-link>
              <router-link to="/" class="dessert-catalog__wrapper__cakes_information__btn_kit">Собрать свой набор
              </router-link>
            </div>
          </div>
        </div>

        <div class="dessert-catalog__wrapper__cards">

          <div class="dessert-catalog__wrapper__cards_card">
            <div class="dessert-catalog__wrapper__cards_card_img"><img src="../../public/img/dessertСatalog/2.png"
                                                                       alt=""></div>
            <div class="dessert-catalog__wrapper__cards_card_title">Трубочки со сгущенкой</div>
            <div class="dessert-catalog__wrapper__cards_card_linear-gradient orange"></div>
          </div>

          <div class="dessert-catalog__wrapper__cards_card">
            <div class="dessert-catalog__wrapper__cards_card_img"><img src="../../public/img/dessertСatalog/3.png"
                                                                       alt=""></div>
            <div class="dessert-catalog__wrapper__cards_card_title">Эклеры</div>
            <div class="dessert-catalog__wrapper__cards_card_linear-gradient pink"></div>
          </div>

          <div class="dessert-catalog__wrapper__cards_card">
            <div class="dessert-catalog__wrapper__cards_card_img"><img src="../../public/img/dessertСatalog/4.png"
                                                                       alt=""></div>
            <div class="dessert-catalog__wrapper__cards_card_title">Профитроли</div>
            <div class="dessert-catalog__wrapper__cards_card_linear-gradient light"></div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div class="popular-sets">
    <div class="container">
      <div class="title">Хотите попробовать всё сразу?</div>
      <div class="description">
        Тогда взгляните на наши комбо-наборы
      </div>
      <div class="popular-sets__wrapper">
        <div class="popular-sets__wrapper__cards">
          <app-sets-card
              v-for="products in filteredProductsCombo"
              :key="products.id"
              :id="products.id"
              :img="`/imagesFirebase/product/${products.photo[0]}`"
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

</template>

<script>
import {collection, onSnapshot, query} from "firebase/firestore";
import {db} from "@/firebase";
import {ref} from "vue"

export default {
  data() {
    return {
      product: ref([]),
      visibleSetCount: 4, // Количество видимых наборов
    }
  },
  computed: {
    filteredProductsCombo() {
      return this.product
          .filter(product => product.title === 'combo')
          .slice(0, this.visibleSetCount);
    },
    hasMoreSets() {
      return this.visibleSetCount < this.product.filter(product => product.title === 'combo').length;
    }
  },
  methods: {
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
      });
    },
  },
  mounted() {
    this.withdrawalProduct()
  },
}
</script>

<style src="../assets/style/DessertCatalog.css" scoped>

</style>