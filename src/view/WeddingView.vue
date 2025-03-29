<template>
  <div class="wedding">
    <div class="container">
      <div class="wedding__wrapper">

        <div class="wedding__wrapper__offer">

          <div class="wedding__wrapper__offer__informations">
            <div class="wedding__wrapper__offer__informations__title">Свадебное предложение</div>
            <div class="wedding__wrapper__offer__informations__description">Нежные пирожные макаронс с разными вкусами
              для украшения вашего свадебного торжества
            </div>
          </div>

          <div class="wedding__wrapper__offer__images">
            <img src="../../public/img/wedding/1/1.png" alt="" class="wedding__wrapper__offer__images_one">
            <img src="../../public/img/wedding/1/2.png" alt="" class="wedding__wrapper__offer__images_two">
            <img src="../../public/img/wedding/1/3.png" alt="" class="wedding__wrapper__offer__images_three">
            <img src="../../public/img/wedding/1/4.png" alt="" class="wedding__wrapper__offer__images_four">
          </div>

          <div class="wedding__wrapper__offer__information">
            <div class="wedding__wrapper__offer__information__title">Свадебное предложение</div>
            <div class="wedding__wrapper__offer__information__description">Нежные пирожные макаронс с разными вкусами
              для украшения вашего свадебного торжества
            </div>

            <div class="wedding__wrapper__offer__information__btn">
              <button type="submit">Презентация</button>
              <button type="submit">Прайс-лист</button>
            </div>

            <p>Рыба-текст предложения</p>
            <p>

              Приятно, граждане, наблюдать, как действия представителей оппозиции, превозмогая сложившуюся непростую
              экономическую ситуацию, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего
              возрастает их статус бесполезности. </p>
            <div class="one"><img src="../../public/img/wedding/1/5.png" alt=""></div>
            <div class="two"><img src="../../public/img/wedding/1/6.png" alt=""></div>
            <div class="three"><img src="../../public/img/wedding/1/7.png" alt=""></div>
            <div class="four"><img src="../../public/img/wedding/1/8.png" alt=""></div>
          </div>


        </div>

        <div class="wedding__wrapper__sets">
          <div class="wedding__wrapper__sets_title">Наборы для свадьбы</div>

          <div class="wedding__wrapper__sets__cards">
            <app-sets-card
                v-for="products in filteredProductsSets"
                :key="products.id"
                :id="products.id"
                :img="require(`@/../public/imagesFirebase/product/${products.photo[0]}`)"
                :title="products.name"
                :description="products.description"
                :price="products.price"
            ></app-sets-card>
          </div>
        </div>

        <div class="wedding__wrapper__solutions">
          <div class="wedding__wrapper__solutions__images"><img src="../../public/img/wedding/2/1.png" alt=""></div>

          <div class="wedding__wrapper__solutions__information">
            <div class="wedding__wrapper__solutions__information_title">Мы открыты для новых идей</div>
            <div class="wedding__wrapper__solutions__information_description">Каждое событие уникально и мы готовы
              предложить индивидуальные решения для Вашего мероптиятия
            </div>
            <div class="wedding__wrapper__solutions__information__form">

              <div class="wedding__wrapper__solutions__information__form__contacts">
                <div>
                  <label for="">Ваше имя*</label>
                  <input type="text" placeholder="Укажите имя">
                </div>
                <div>
                  <label for="">Телефон*</label>
                  <input type="text" placeholder="+7 (___) ___-__-__">
                </div>
              </div>
              <div class="wedding__wrapper__solutions__information__form__text">
                <label for="">Опишите Вашу идею</label>
                <textarea></textarea>
              </div>
              <div class="wedding__wrapper__solutions__information__form_btn">
                <button type="submit">Отправить заявку</button>
              </div>
              <p>Нажимая на кнопку "Оформить заказ" Я принимаю и соглашаюсь с <span> Договором оферты</span> и разрешаю
                обработку моих
                персональных данных в соответствии с <span> Политикой конфиденциальности</span></p>

            </div>
          </div>
        </div>

        <div class="wedding__wrapper__answers-questions">
          <div class="wedding__wrapper__answers-questions_title">Ответы на вопросы</div>
          <div class="wedding__wrapper__answers-questions__cards">
            <div class="wedding__wrapper__answers-questions__cards__card"
                 v-for="answersToQuestion in answersToQuestions" :key="answersToQuestion.id">
              <div class="wedding__wrapper__answers-questions__cards__card_title">
                {{ answersToQuestion.title }}
              </div>
              <hr>
              <div class="wedding__wrapper__answers-questions__cards__card_description">
                {{ answersToQuestion.description }}
              </div>
            </div>

          </div>
        </div>

        <swiper
            :spaceBetween="30"
            :pagination="{
      clickable: true,
    }"
            :modules="modules"
            class="mySwiper"
        >
          <swiper-slide v-for="answersToQuestion in answersToQuestions"
                        :key="answersToQuestion.id">
            <app-reviews-slider class="wedding__wrapper__answers-questions-reviews"
                                :title="answersToQuestion.title"
                                :description="answersToQuestion.description"
            ></app-reviews-slider>
          </swiper-slide>
        </swiper>

      </div>
    </div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


// import required modules
import {Pagination} from 'swiper/modules';
import {collection, onSnapshot, query} from "firebase/firestore";
import {db} from "@/firebase";
import {ref} from "vue"

export default {
  components: {Swiper, SwiperSlide},
  data() {
    return {
      product: ref([]),
      answersToQuestions: ref([]),
      visibleSetCount: 6,
      reviews: [
        {
          id: 1,
          title: "Сколько хранятся пирожные макарон?",
          description: "Срок хранения бла бла бла",
          organization: "ООО 'Квантум'",
          name: "Макароншоп",
        },
        {
          id: 2,
          title: "Как быстро мы выполняем заказы",
          description: "Стандартный срок выполнения заказа 3-5 дней, При большом тираже и в предновогодний сезон может увеличиться. Потому что...",
          organization: "ООО 'Квантум'",
          name: "Макароншоп",
        },
        {
          id: 3,
          title: "А за 2 дня?",
          description: "Текст про дополнительную стоимость при срочных заказах",
          organization: "ООО 'Квантум'",
          name: "Макароншоп",
        },
      ],
    }
  },
  computed: {
    filteredProductsSets() {
      return this.product
          .filter(product => product.title === 'sets')
          .slice(0, this.visibleSetCount);
    },
    // hasMoreSets() {
    //   return this.visibleSetCount < this.product.filter(product => product.title === 'sets').length;
    // },
  },
  methods: {
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
            storage_conditions: doc.data().storage_conditions || [],
            description_composition_condition: doc.data().description_composition_condition || [],
            tastes: doc.data().tastes || [],
            title: doc.data().title,
            search: doc.data().search,
          }
        });
      });
    },


    withdrawalAnswersToQuestions: function () {
      const answersToQuestionsQuery = query(collection(db, "answersToQuestions"));

      onSnapshot(answersToQuestionsQuery, (snapshot) => {
        this.answersToQuestions = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            description: doc.data().description,
            title: doc.data().title,

          }
        });
      });
    },
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  mounted() {
    this.withdrawalProduct()
    this.withdrawalAnswersToQuestions()
  },
}
</script>

<style src="../assets/style/Wedding.css" scoped>

</style>