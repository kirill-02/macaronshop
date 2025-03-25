<template>
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
        <div class="promotion__wrapper__cards" >

          <div class='promotion__wrapper__cards_card ' v-for="promotions in promotion" :key="promotions.id" :style="{ background: promotions.color }">
            <div class="promotion__wrapper__cards_card_bookmark " :style="{ background: promotions.color }">{{ promotions.title }}</div>
            <div class="promotion__wrapper__cards_card_img"><img :src="require(`@/../public/imagesFirebase/promotion/${promotions.photo}`)" alt=""></div>
            <div class="promotion__wrapper__cards_card_description "> {{ promotions.name }}
            </div>
          </div>

<!--          <div class="promotion__wrapper__cards_card danger">-->
<!--            <div class="promotion__wrapper__cards_card_bookmark danger">НОВИНКА</div>-->
<!--            <div class="promotion__wrapper__cards_card_img"><img src="../../public/img/home/3/photo_2.jpeg" alt=""></div>-->
<!--            <div class="promotion__wrapper__cards_card_description">Шоколадное пирожное картошка на основе-->
<!--              бисквита!-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="promotion__wrapper__cards_card danger">-->
<!--            <div class="promotion__wrapper__cards_card_bookmark danger">НОВИНКА</div>-->
<!--            <div class="promotion__wrapper__cards_card_img"><img src="../../public/img/home/3/photo_3.jpeg" alt=""></div>-->
<!--            <div class="promotion__wrapper__cards_card_description">Аппетитные конфеты на основе миндального-->
<!--              печенья и-->
<!--              крема-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="promotion__wrapper__cards_card danger">-->
<!--            <div class="promotion__wrapper__cards_card_bookmark danger">СЛАДКАЯ НОВИНКА</div>-->
<!--            <div class="promotion__wrapper__cards_card_img"><img src="../../public/img/home/3/photo_4.jpeg" alt=""></div>-->
<!--            <div class="promotion__wrapper__cards_card_description">Карамель на палочке из натуральных-->
<!--              ингредиентов-->
<!--            </div>-->
<!--          </div>-->

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
              v-for="popularSet in visibleSets"
              :key="popularSet.id"
              :id="popularSet.id"
              :img="require(`@/../public/img/home/5/${popularSet.img}`)"
              :title="popularSet.title"
              :description="popularSet.description"
              :price="popularSet.price"
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
              v-for="lotOfNews in visibleNews"
              :key="lotOfNews.id"
              :id="lotOfNews.id"
              :img="require(`@/../public/img/home/6/${lotOfNews.img}`)"
              :date="lotOfNews.date"
              :description="lotOfNews.description"
              :title="lotOfNews.title"
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

          <div class="guarantee__wrapper__cards_card">
            <div class="guarantee__wrapper__cards_card_img"><img src='../../public/img/home/7/1.jpeg' alt=""></div>
            <div class="guarantee__wrapper__cards_card__information">
              <div class="guarantee__wrapper__cards_card__information_title">Лучшие ингрединты</div>
              <div class="guarantee__wrapper__cards_card__information__description">
                Что-то про суперкачество, лучших поваров, свежесть и т.д.
              </div>
            </div>
          </div>

          <div class="guarantee__wrapper__cards_card">
            <div class="guarantee__wrapper__cards_card_img"><img src='../../public/img/home/7/2.jpeg' alt=""></div>
            <div class="guarantee__wrapper__cards_card__information">
              <div class="guarantee__wrapper__cards_card__information_title">Лучшие ингрединты</div>
              <div class="guarantee__wrapper__cards_card__information__description">
                Что-то про суперкачество, лучших поваров, свежесть и т.д.
              </div>
            </div>
          </div>

          <div class="guarantee__wrapper__cards_card">
            <div class="guarantee__wrapper__cards_card_img"><img src='../../public/img/home/7/3.jpeg' alt=""></div>
            <div class="guarantee__wrapper__cards_card__information">
              <div class="guarantee__wrapper__cards_card__information_title">Лучшие ингрединты</div>
              <div class="guarantee__wrapper__cards_card__information__description">
                Что-то про суперкачество, лучших поваров, свежесть и т.д.
              </div>
            </div>
          </div>

          <div class="guarantee__wrapper__cards_card">
            <div class="guarantee__wrapper__cards_card_img"><img src='../../public/img/home/7/4.jpeg' alt=""></div>
            <div class="guarantee__wrapper__cards_card__information">
              <div class="guarantee__wrapper__cards_card__information_title">Лучшие ингрединты</div>
              <div class="guarantee__wrapper__cards_card__information__description">
                Что-то про суперкачество, лучших поваров, свежесть и т.д.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import {
  // app,
  db} from '../firebase.js';
import {
  // getFirestore,
  onSnapshot,
  collection,
  doc,
  // deleteDoc,
  // setDoc,
  // addDoc,
  // orderBy,
  query
} from 'firebase/firestore';
import {ref} from 'vue';

export default {


  data() {
    return {
      promotion: ref([]),
      popularSets: [
        {
          id: 1,
          img: '1.jpeg',
          title: 'Сердце',
          description: '24 штуки в коробке в виде сердца. Ассорти из 6 вкусов',
          price: '2800'
        },
        {
          id: 2,
          img: '2.jpeg',
          title: 'Красота спасёт мир',
          description: 'Набор 16 шт. Вкусы: клубника - базилик, кокос, голубой сыр, пармезан',
          price: '750'
        },
        {
          id: 3,
          img: '3.jpeg',
          title: 'Круглый набор',
          description: '40 макаронс в круглой коробке с персональной надписью',
          price: '3900'
        },
        {
          id: 4,
          img: '4.jpeg',
          title: 'Набор на 9',
          description: 'Набор из 9 штук в квадратной коробке. Вкусы: шоколад, фисташка, вишняНабор из 9 штук в квадратной коробке. Вкусы: шоколад, фисташка, вишняНабор из 9 штук в квадратной коробке. Вкусы: шоколад, фисташка, вишня',
          price: '950'
        },
        {
          id: 5,
          img: '5.jpeg',
          title: 'Набор на 16',
          description: 'Набор 16 шт. Вкусы: соленая карамель, голубой сыр, пармезан, шоколад',
          price: '1500'
        },
        {
          id: 6,
          img: '6.jpeg',
          title: 'Сердце',
          description: '24 штуки в коробке в виде сердца. Ассорти из 6 вкусов',
          price: '2500'
        },
        {
          id: 7,
          img: 'photo_4.jpeg',
          title: 'Набор на 9',
          description: 'Набор из 9 штук в квадратной коробке. Вкусы: шоколад, фисташка, вишня',
          price: '950'
        },
        {
          id: 8,
          img: '5.jpeg',
          title: 'Набор на 16',
          description: 'Набор 16 шт. Вкусы: соленая карамель, голубой сыр, пармезан, шоколад',
          price: '1500'
        },
        {
          id: 9,
          img: '6.jpeg',
          title: 'Сердце',
          description: '24 штуки в коробке в виде сердца. Ассорти из 6 вкусов',
          price: '2500'
        },
        // Добавьте больше наборов, если необходимо
      ],
      visibleSetCount: 6, // Количество видимых наборов
      news: [
        {
          id: 1,
          img: '1.jpeg',
          date: '25.02.2023',
          title: 'Скоро главный праздник весны!',
          description: 'Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы'
        },
        {
          id: 2,
          img: '2.jpeg',
          date: '17.02.2023',
          title: 'Конкурс на 23 февраля!',
          description: 'День Защитника Отечества уже совсем скоро! Порадуйте своего сладкоежку с помощью аппетитных наборов от МакаронШоп'
        },
        {
          id: 3,
          img: '3.jpeg',
          date: '11.02.2023',
          title: 'Экспресс-конкурс ко дню Святого Валентина',
          description: 'Подарок уже через 2 дня. День всех влюблённых не за горами. Расскажи о своих чувствах с помощью сладкой валентинки от МакаронШоп'
        },
        {
          id: 4,
          img: '1.jpeg',
          date: '11.02.2023',
          title: 'Экспресс-конкурс ко дню Святого Валентина',
          description: 'Подарок уже через 2 дня. День всех влюблённых не за горами. Расскажи о своих чувствах с помощью сладкой валентинки от МакаронШоп'
        },
        {
          id: 5,
          img: '2.jpeg',
          date: '11.02.2023',
          title: 'Экспресс-конкурс ко дню Святого Валентина',
          description: 'Подарок уже через 2 дня. День всех влюблённых не за горами. Расскажи о своих чувствах с помощью сладкой валентинки от МакаронШоп'
        },
        {
          id: 6,
          img: '3.jpeg',
          date: '11.02.2023',
          title: 'Экспресс-конкурс ко дню Святого Валентина',
          description: 'Подарок уже через 2 дня. День всех влюблённых не за горами. Расскажи о своих чувствах с помощью сладкой валентинки от МакаронШоп'
        },
      ],
      visibleNewsCount: 3 // Количество видимых новостей
    };
  },

  computed: {
    visibleSets() {
      return this.popularSets.slice(0, this.visibleSetCount);
    },
    hasMoreSets() {
      return this.visibleSetCount < this.popularSets.length;
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
      this.visibleNewsCount += 3; // Увеличиваем количество видимых новостей
    },
    loadPromotion: function () {
      const promotionDocRef = doc(db, 'product', "promotion");
      const promotionCollectionRef = collection(promotionDocRef, 'promotion');
      const promotionQuery = query(promotionCollectionRef);

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
      });
    },

  },
  mounted() {
    this.loadPromotion();
  }
};
</script>

<style src="@/assets/style/Home.css" scoped>
</style>
