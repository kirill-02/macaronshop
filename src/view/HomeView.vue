<template>
  <div v-if="isLoading">
    <div class="container">
      <div class="loader"></div>
    </div>
  </div>

  <div v-else>
    <div class="first-screen">
      <div class="container">
        <div class="first-screen__wrapper">
          <div class="first-screen__wrapper_heart"><img src="../../public/img/home/1/1.png"></div>
          <div class="first-screen__wrapper__information">
            <div class="first-screen__wrapper__information_year">
              <strong>Macaronshop</strong>
              <span>&mdash; since 2013 &mdash;</span>
            </div>
            <div class="first-screen__wrapper__information_description">
              <strong>Настоящая любовь</strong>
              <span>Пирожные макарон и другие десерты из натуральных ингредиентов, приготовленные с любовью</span>
              <img src="../../public/img/home/1/2.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card-offers">
      <div class="container">
        <div class="card-offers__wrapper">
          <router-link to="ready-sets" class="card-offers__wrapper__block">
            <div class="card-offers__wrapper__block-one">
              <div class="card-offers__wrapper__block_one-ready"></div>

              <div class="card-offers__wrapper__block_icon"><i class="ic_ready"></i></div>
              <div class="card-offers__wrapper__block_title">Готовые наборы <span>&#8594;</span></div>
              <div class="card-offers__wrapper__block_description">
                Готовые наборы со скидкой.
                Вы можете подобрать набор на подходящий случай.
              </div>
            </div>
          </router-link>
          <hr>

          <!--        <a href="#" class="card-offers__wrapper__block">-->
          <!--          <div class="card-offers__wrapper__block-two">-->

          <!--            <div class="card-offers__wrapper__block_one-mine"></div>-->

          <!--            <div class="card-offers__wrapper__block_icon"><i class="ic_mine"></i></div>-->
          <!--            <div class="card-offers__wrapper__block_title">Собрать свой набор &#8594;</div>-->
          <!--            <div class="card-offers__wrapper__block_description">-->
          <!--              Выбрать количество макарун, и выбрать вкусы-->
          <!--            </div>-->
          <!--          </div>-->
          <!--        </a>-->

          <!--        <a href="#" class="card-offers__wrapper__block">-->
          <!--          <div class="card-offers__wrapper__block-three">-->

          <!--            <div class="card-offers__wrapper__block_one-palette"></div>-->

          <!--            <div class="card-offers__wrapper__block_icon"><i class="ic_palette"></i></div>-->
          <!--            <div class="card-offers__wrapper__block_title">Набор с индивидуальной печатью &#8594;</div>-->
          <!--            <div class="card-offers__wrapper__block_description">-->
          <!--              Собрать набор макарон с уникальным дизайном.-->
          <!--            </div>-->
          <!--          </div>-->
          <!--        </a>-->

          <router-link to="/wedding" class="card-offers__wrapper__block">
            <div class="card-offers__wrapper__block-four">

              <div class="card-offers__wrapper__block_one-cake"></div>

              <div class="card-offers__wrapper__block_icon"><i class="ic_cake"></i></div>
              <div class="card-offers__wrapper__block_title">Свадебные предложения <span>&#8594;</span></div>
              <div class="card-offers__wrapper__block_description">
                Нежные пирожные макаронс с разными вкусами для украшения вашего свадебного торжества
              </div>
            </div>
          </router-link>
          <hr>
          <router-link to="/corporate-gifts" class="card-offers__wrapper__block">
            <div class="card-offers__wrapper__block-five">

              <div class="card-offers__wrapper__block_one-present"></div>

              <div class="card-offers__wrapper__block_icon"><i class="ic_present"></i></div>
              <div class="card-offers__wrapper__block_title">Корпоративные подарки <span>&#8594;</span></div>
              <div class="card-offers__wrapper__block_description">
                От 85 руб за шт. С уникальным дизайном. Приятный комплимент для коллег и партнеров
              </div>
            </div>
          </router-link>
          <hr>
          <router-link to="/wholesale-supplies" class="card-offers__wrapper__block">
            <div class="card-offers__wrapper__block-six">

              <div class="card-offers__wrapper__block_one-chair"></div>

              <div class="card-offers__wrapper__block_icon"><i class="ic_chair"></i></div>
              <div class="card-offers__wrapper__block_title">Оптовые поставки <span>&#8594;</span></div>
              <div class="card-offers__wrapper__block_description">
                Предложение для кофеен, кафе, отелей и т.д.
                Посмотрите условия сотрудничества и отзывы.
              </div>
            </div>
          </router-link>
          <hr>
        </div>
      </div>
    </div>

    <div class="promotion">
      <div class="container">
        <div class="title">
          Акции
        </div>
        <div class="promotion__wrapper">
          <div class="promotion__wrapper__cards">

            <div class='promotion__wrapper__cards_card ' v-for="promotions in filteredPromotion" :key="promotions.id"
                 :style="{ background: promotions.color }">
              <div class="promotion__wrapper__cards_card_bookmark " :style="{ background: promotions.color }">
                {{ promotions.title }}
              </div>
              <div class="promotion__wrapper__cards_card_img">
                <img :src="require(`@/../public/imagesFirebase/promotion/${promotions.photo}`)" alt="">
              </div>
              <div class="promotion__wrapper__cards_card_description "> {{ promotions.name }}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="popular-sets">
      <div class="container">
        <div class="title">Популярные наборы</div>
        <div class="popular-sets__wrapper">
          <div class="popular-sets__wrapper__cards">
            <app-sets-card
                v-for="products in filteredProductsSets"
                :key="products.id"
                :id="products.id"
                :title="products.name"
                :description="products.description"
                :price="products.price"
                :img="require(`@/../public/imagesFirebase/product/${products.photo[0]}`)"
            ></app-sets-card>
          </div>
          <app-border-button
              text='Показать еще'
              :hasMoreSets="hasMoreSets"
              @show-more="showMore">
          </app-border-button>
        </div>
      </div>
    </div>

    <div class="news">
      <div class="container">
        <div class="title">Новости</div>
        <div class="news__wrapper">
          <div class="news__wrapper__cards">

            <app-news-card
                v-for="news in visibleNews"
                :key="news.id"
                :id="news.id"
                :img="require(`@/../public/imagesFirebase/news/${news.photo}`)"
                :date="news.date"
                :description="news.description"
                :title="news.name"
            ></app-news-card>

          </div>
          <app-border-button
              text='Показать еще'
              :hasMoreSets="hasMoreNews"
              @show-more="showMoreNews">
          </app-border-button>
        </div>
      </div>
    </div>

    <div class="guarantee">
      <div class="container">
        <div class="title">Мы обо всём позаботились</div>
        <div class="guarantee__wrapper">
          <div class="guarantee__wrapper__cards">

            <div class="guarantee__wrapper__cards_card" v-for="condition in conditions" :key="condition.id">
              <div class="guarantee__wrapper__cards_card_img">
                <img :src="require(`@/../public/imagesFirebase/conditions/${condition.photo}`)" alt="">
              </div>
              <div class="guarantee__wrapper__cards_card__information">
                <div class="guarantee__wrapper__cards_card__information_title">{{ condition.name }}</div>
                <div class="guarantee__wrapper__cards_card__information__description">
                  {{ condition.description }}
                </div>
              </div>
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
import {ref} from "vue"

export default {


  data() {
    return {
      promotion: ref([]),
      product: ref([]),
      news: ref([]),
      conditions: ref([]),
      visibleSetCount: 6,
      visibleNewsCount: 3,
      visibleNewsPromotion: 4,
      isLoading: true,
    };
  },

  computed: {
    filteredProductsSets() {
      return this.product
          .filter(product => product.title === 'sets')
          .slice(0, this.visibleSetCount);
    },
    filteredPromotion() {
      return this.promotion.slice(0, this.visibleNewsPromotion);
    },
    hasMoreSets() {
      return this.visibleSetCount < this.product.filter(product => product.title === 'sets').length;
    },
    visibleNews() {
      return this.news.slice(0, this.visibleNewsCount);
    },
    hasMoreNews() {
      return this.visibleNewsCount < this.news.length;
    }
  },

  methods: {
    showMore() {
      this.visibleSetCount += 3
    },
    showMoreNews() {
      this.visibleNewsCount += 3;
    },

    withdrawalPromotion: function () {
      const promotionQuery = query(collection(db, "promotion"));

      onSnapshot(promotionQuery, (snapshot) => {
        this.promotion = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            name: doc.data().name,
            photo: doc.data().photo,
            title: doc.data().title,
            color: doc.data().color,
          }
        });
        this.checkLoadingComplete();
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
        this.checkLoadingComplete();
      });
    },
    withdrawalNews: function () {
      const newsQuery = query(collection(db, "news"));

      onSnapshot(newsQuery, (snapshot) => {
        this.news = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            date: doc.data().date,
            photo: doc.data().photo || [],
            search: doc.data().search,
          }
        });
        this.checkLoadingComplete();
      });
    },
    withdrawalConditions: function () {
      const conditionsQuery = query(collection(db, "conditions"));

      onSnapshot(conditionsQuery, (snapshot) => {
        this.conditions = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            photo: doc.data().photo || [],
          }
        })
        this.checkLoadingComplete();
      })
    },

    checkLoadingComplete() {
      if (this.promotion.length && this.product.length && this.news.length && this.conditions.length) {
        this.isLoading = false;
      }
    }
  },
  mounted() {
    this.withdrawalPromotion()
    this.withdrawalProduct()
    this.withdrawalNews()
    this.withdrawalConditions()
  },
};
</script>

<style src="@/assets/style/Home.css" scoped>

</style>
