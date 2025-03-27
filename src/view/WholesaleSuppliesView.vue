<template>
  <div class="wholesale-supplies">
    <div class="container">
      <div class="wholesale-supplies__wrapper">

        <div class="wholesale-supplies__wrapper__offer">

          <div class="wholesale-supplies__wrapper__offer__informations">
            <div class="wholesale-supplies__wrapper__offer__informations__title">Поставки пирожных оптом</div>
            <div class="wholesale-supplies__wrapper__offer__informations__description">Наши макаронсы и трубочки
              продаются в крупнейших кондитерских и кофейных сетях Санкт-Петербурга. Присоединяйтесь!
            </div>
          </div>

          <div class="wholesale-supplies__wrapper__offer__images">
            <img src="../../public/img/wholesaleSupplies/1/1.png" alt="">
          </div>

          <div class="wholesale-supplies__wrapper__offer__information">
            <div class="wholesale-supplies__wrapper__offer__information__title">Поставки пирожных оптом</div>
            <div class="wholesale-supplies__wrapper__offer__information__description">Наши макаронсы и трубочки
              продаются в крупнейших кондитерских и кофейных сетях Санкт-Петербурга. Присоединяйтесь!
            </div>
            <div class="wholesale-supplies__wrapper__offer__information__btn">
              <button type="submit">Презентация</button>
              <button type="submit">Прайс-лист</button>
            </div>

            <p>Мы предлагаем: </p>
            <p>• прямые поставки от производителя, всегда свежая продукция; </p>
            <p>• ассортимент с высоким средним чеком и маржой; </p>
            <p>• бесплатные акриловые шоубоксы для витрины; </p>
            <p>• продукцию для дегустации или снижение цены для проведения промо-акций; </p>
            <p>• гибкие условия сотрудничества и поставок. </p>

            <div class="one"><img src="../../public/img/corporateGifts/1/3.png" alt=""></div>
            <div class="two"><img src="../../public/img/corporateGifts/1/4.png" alt=""></div>
            <div class="three"><img src="../../public/img/corporateGifts/1/5.png" alt=""></div>
            <div class="four"><img src="../../public/img/corporateGifts/1/2.png" alt=""></div>
          </div>


        </div>

        <div class="wholesale-supplies__wrapper__for-what">
          <div class="wholesale-supplies__wrapper__for-what_title">Что мы можем вам предложить:</div>
          <div class="wholesale-supplies__wrapper__for-what__cards">

            <div class="wholesale-supplies__wrapper__for-what__cards__card">
              <div class="wholesale-supplies__wrapper__for-what__cards__card_icon"><i class="ic_present"></i></div>
              <div class="wholesale-supplies__wrapper__for-what__cards__card__description">Корпоративные подарки</div>
            </div>

            <div class="wholesale-supplies__wrapper__for-what__cards__card">
              <div class="wholesale-supplies__wrapper__for-what__cards__card_icon"><i class="ic_cart"></i></div>
              <div class="wholesale-supplies__wrapper__for-what__cards__card__description">Сотрудничество с интернет
                магазинами
              </div>
            </div>

            <div class="wholesale-supplies__wrapper__for-what__cards__card">
              <div class="wholesale-supplies__wrapper__for-what__cards__card_icon"><i class="ic_chair"></i></div>
              <div class="wholesale-supplies__wrapper__for-what__cards__card__description">Сотрудничество с кафе и
                ресторанами
              </div>
            </div>

            <div class="wholesale-supplies__wrapper__for-what__cards__card">
              <div class="wholesale-supplies__wrapper__for-what__cards__card_icon"><i class="ic_machine"></i></div>
              <div class="wholesale-supplies__wrapper__for-what__cards__card__description">Сотрудничество с кофейнями
              </div>
            </div>

            <div class="wholesale-supplies__wrapper__for-what__cards__card">
              <div class="wholesale-supplies__wrapper__for-what__cards__card_icon"><i class="ic_house"></i></div>
              <div class="wholesale-supplies__wrapper__for-what__cards__card__description">Сотрудничество с отелями
              </div>
            </div>

            <div class="wholesale-supplies__wrapper__for-what__cards__card">
              <div class="wholesale-supplies__wrapper__for-what__cards__card_icon"><i class="ic_shop"></i></div>
              <div class="wholesale-supplies__wrapper__for-what__cards__card__description">Для Retail</div>
            </div>

            <div class="wholesale-supplies__wrapper__for-what__cards__card">
              <div class="wholesale-supplies__wrapper__for-what__cards__card_icon"><i class="ic_cake"></i></div>
              <div class="wholesale-supplies__wrapper__for-what__cards__card__description">Кенди бары для мероприятий
              </div>
            </div>

            <div class="wholesale-supplies__wrapper__for-what__cards__card">
              <div class="wholesale-supplies__wrapper__for-what__cards__card_icon"><i class="ic_mine"></i></div>
              <div class="wholesale-supplies__wrapper__for-what__cards__card__description">И для других сфер бизнеса
              </div>
            </div>
          </div>
        </div>


        <div class="wholesale-supplies__wrapper__answers-questions">
          <div class="wholesale-supplies__wrapper__answers-questions_title">Нас рекомендуют</div>
          <div class="wholesale-supplies__wrapper__answers-questions__cards">
            <swiper
                :spaceBetween="30"
                :pagination="{clickable: true,}"
                :modules="modules"
                class="mySwiper"
            >
              <swiper-slide
                  v-for="recommendation in recommendations"
                  :key="recommendation.id">
                <app-reviews-slider
                    class="wholesale-supplies__wrapper__answers-questions-reviews"
                    :title="recommendation.title"
                    :description="recommendation.description"
                    :name="recommendation.name"
                    :organization="recommendation.organization"
                ></app-reviews-slider>
              </swiper-slide>
            </swiper>

          </div>
        </div>


      </div>
    </div>
  </div>


</template>

<script>

// Import Swiper Vue.js components
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
  data() {
    return {
      recommendations: ref([]),
      reviews: [
        {
          id: 1,
          title: "Очень хорошие пироженки и трубочки, рекомендую",
          description: "Банальные, но неопровержимые выводы, а также представители современных социальных резервов ассоциативно распределены- по отраслям. Противоположная точка зрения подразумевает, что многие известные личности могут быть обнародованы.",
          organization: "Генеральный директор ООО “ААА",
          name: "Иванов Иван",
        },
        {
          id: 2,
          title: "Заголовок отзыва",
          description: "Отзыв блаблабла",
          organization: "Генеральный директор ООО “ААА",
          name: "Иванов Иван",
        },
        {
          id: 3,
          title: "Отзыв блаблабла",
          description: "Банальные, но неопровержимые выводы, а также представители современных социальных резервов ассоциативно распределены- по отраслям. Противоположная точка зрения подразумевает, что многие известные личности могут быть обнародованы.",
          organization: "Генеральный директор ООО “ААА",
          name: "Иванов Иван",
        },
        {
          id: 4,
          title: "Очень хорошие пироженки и трубочки, рекомендую",
          description: "Банальные, но неопровержимые выводы, а также представители современных социальных резервов ассоциативно распределены- по отраслям. Противоположная точка зрения подразумевает, что многие известные личности могут быть обнародованы.",
          organization: "Генеральный директор ООО “ААА",
          name: "Иванов Иван",
        },
      ]
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    withdrawalRecommendations: function () {
      const recommendationsQuery = query(collection(db, "recommendations"));

      onSnapshot(recommendationsQuery, (snapshot) => {
        this.recommendations = snapshot.docs.map(doc => {
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
    this.withdrawalRecommendations()
  },
}
</script>

<style src="../assets/style/WholesaleSupplies.css" scoped>

</style>