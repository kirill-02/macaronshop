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
          <div class="product__wrapper__informations__title" >
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
                  @click="currentImage = require(`@/../public/imagesFirebase/sets/${image}`)"
              >
                <img :src="require(`@/../public/imagesFirebase/sets/${image}`)" alt="">
              </div>
            </div>
          </div>
          <div class="product__wrapper__block">
            <div class="product__wrapper__information" >
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

            <div class="product__wrapper__price" >
              <div> {{ productData.price }} руб
              </div>
              <button class="product__wrapper__price_btn"><i class="ic_basket"></i> В корзину</button>
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
          <div class="product__wrapper__description__description" >
            <p v-html="productTitle"></p>
            <p v-html="productDescription"></p>
          </div>
        </div>

        <div class="popular-sets">
          <div class="title">Хотите попробовать всё сразу?</div>
          <div class="popular-sets__wrapper">
            <div class="popular-sets__wrapper__cards">
              <app-sets-card
                  v-for="productSets in visibleSets"
                  :key="productSets.id"
                  :id="productSets.id"
                  :img="require(`@/../public/img/dessertСatalog/${productSets.img}`)"
                  :title="productSets.title"
                  :description="productSets.description"
                  :price="productSets.price"
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
import {collection, doc, onSnapshot, query} from "firebase/firestore";
import {db} from "@/firebase";
import {ref} from "vue";

export default {
  data() {

    return {
      sets: ref([]),
      currentImage: '',
      activeSection: 0, // Индекс активной секции
      sections: [
        {
          title: `Текстовая информация и таблички. <br>  Для примера рыба-текст `,
          description: `Банальные, но неопровержимые выводы...`
        },
        {
          title: `Текстовая информация второй таблички. <br>  Для примера второй рыба-текст `,
          description: `Разнообразный и богатый опыт...`
        },
        {
          title: `Текстовая информация третей таблички. <br>  Для примера третей рыба-текст `,
          description: `Идейные соображения высшего порядка...`
        }
      ],
      popularSets: [
        {
          id: 1,
          img: '1.jpeg',
          imgOne: '1.jpeg',
          imgTwo: '2.jpeg',
          imgThree: '3.jpeg',
          title: 'Свадьба',
          description: '24 штуки в коробке в виде сердца. Ассорти из 6 вкусов',
          price: '2800'
        },
        {
          id: 2,
          img: '2.jpeg',
          imgOne: '2.jpeg',
          imgTwo: '2.jpeg',
          imgThree: '2.jpeg',
          title: 'Красота спасёт мир',
          description: 'Набор 16 шт. Вкусы: клубника - базилик, кокос, голубой сыр, пармезан',
          price: '750'
        },
        {
          id: 3,
          img: '3.jpeg',
          imgOne: '3.jpeg',
          imgTwo: '3.jpeg',
          imgThree: '3.jpeg',
          title: 'Круглый набор',
          description: '40 макаронс в круглой коробке с персональной надписью',
          price: '3900'
        },
        {
          id: 4,
          img: '4.jpeg',
          imgOne: '2.jpeg',
          imgTwo: '3.jpeg',
          imgThree: '4.jpeg',
          title: 'Набор на 9',
          description: 'Набор из 9 штук в квадратной коробке. Вкусы: шоколад, фисташка, вишня',
          price: '950'
        },
        {
          id: 5,
          img: '5.jpeg',
          imgOne: '2.jpeg',
          imgTwo: '3.jpeg',
          imgThree: '4.jpeg',
          title: 'Набор на 16 ',
          description: 'Набор 16 шт. Вкусы: соленая карамель, голубой сыр, пармезан, шоколад',
          price: '1500'
        },
        {
          id: 6,
          img: '6.jpeg',
          imgOne: '2.jpeg',
          imgTwo: '3.jpeg',
          imgThree: '4.jpeg',
          title: 'Сердце ',
          description: '24 штуки в коробке в виде сердца. Ассорти из 6 вкусов',
          price: '2500'
        },
        {
          id: 7,
          img: '4.jpeg',
          imgOne: '2.jpeg',
          imgTwo: '3.jpeg',
          imgThree: '4.jpeg',
          title: 'Набор на 9',
          description: 'Набор из 9 штук в квадратной коробке. Вкусы: шоколад, фисташка,',
          price: '950'
        },
        {
          id: 8,
          img: '5.jpeg',
          imgOne: '2.jpeg',
          imgTwo: '3.jpeg',
          imgThree: '4.jpeg',
          title: 'Набор на 16',
          description: 'Набор 16 шт. Вкусы: соленая карамель, голубой сыр, пармезан, шоколад',
          price: '1500'
        },
        {
          id: 9,
          img: '6.jpeg',
          imgOne: '2.jpeg',
          imgTwo: '3.jpeg',
          imgThree: '4.jpeg',
          title: 'Сердце',
          description: '24 штуки в коробке в виде сердца. Ассорти из 6 вкусов',
          price: '2500'
        },
      ],

      productSets: [
        {
          id: 1,
          img: '5.png',
          title: 'Сердце',
          description: '24 штуки в коробке в виде сердца. Ассорти из 6 вкусов',
          price: '2800'
        },
        {
          id: 2,
          img: '6.png',
          title: 'Красота спасёт мир',
          description: 'Набор 16 шт. Вкусы: клубника - базилик, кокос, голубой сыр, пармезан',
          price: '750'
        },
        {
          id: 3,
          img: '7.png',
          title: 'Круглый набор',
          description: '40 макаронс в круглой коробке с персональной надписью',
          price: '3900'
        },
        {
          id: 4,
          img: '8.png',
          title: 'Набор на 9',
          description: 'Набор из 9 штук в квадратной коробке. Вкусы: шоколад, фисташка, вишня',
          price: '950'
        },
        {
          id: 5,
          img: '5.png',
          title: 'Набор на 16',
          description: 'Набор 16 шт. Вкусы: соленая карамель, голубой сыр, пармезан, шоколад',
          price: '1500'
        },
        {
          id: 6,
          img: '6.png',
          title: 'Сердце',
          description: '24 штуки в коробке в виде сердца. Ассорти из 6 вкусов',
          price: '2500'
        },
        {
          id: 7,
          img: '7.png',
          title: 'Набор на 9',
          description: 'Набор из 9 штук в квадратной коробке. Вкусы: шоколад, фисташка, вишня',
          price: '950'
        },
        {
          id: 8,
          img: '8.png',
          title: 'Набор на 16',
          description: 'Набор 16 шт. Вкусы: соленая карамель, голубой сыр, пармезан, шоколад',
          price: '1500'
        },
        {
          id: 9,
          img: '5.png',
          title: 'Сердце',
          description: '24 штуки в коробке в виде сердца. Ассорти из 6 вкусов',
          price: '2500'
        },
        // Добавьте больше наборов, если необходимо
      ],
      visibleSetCount: 4,
    }
  },
  computed: {
    productData() {
      const id = this.$route.params.id; // Получаем id из URL и преобразуем его в число
      return this.sets.find(set => set.id === id) || null; // Ищем продукт по id
    },
    productTitle() {
      return this.productData.description_composition_condition[this.activeSection].title;
    },
    productDescription() {
      return this.productData.description_composition_condition[this.activeSection].description;
    },
    visibleSets() {
      return this.productSets.slice(0, this.visibleSetCount);
    },
    hasMoreSets() {
      return this.visibleSetCount < this.productSets.length;
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
    withdrawalSets: function () {
      const setsDocRef = doc(db, 'product', "sets");
      const setsCollectionRef = collection(setsDocRef, 'sets');
      const setsQuery = query(setsCollectionRef);

      onSnapshot(setsQuery, (snapshot) => {
        this.sets = snapshot.docs.map(doc => {
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
          }
        });
        if (this.productData) {
          this.currentImage = require(`@/../public/imagesFirebase/sets/${this.productData.photo[0]}`); // Устанавливаем первое изображение как текущее
        }
      });
    }
  },
  mounted() {
    this.withdrawalSets();
  },
}
</script>
<style src="../assets/style/Product.css" scoped>

</style>