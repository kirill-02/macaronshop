<template>
  <div class="corporate-gifts">
    <div class="container">
      <div class="corporate-gifts__wrapper">

        <div class="corporate-gifts__wrapper__offer">

          <div class="corporate-gifts__wrapper__offer__informations">
            <div class="corporate-gifts__wrapper__offer__informations__title">Корпоративные подарки</div>
            <div class="corporate-gifts__wrapper__offer__informations__description">Брендированные пирожные макарон,
              которые
              поднимут аппетит ваших клиентов или порадуют коллектив
            </div>
          </div>

          <div class="corporate-gifts__wrapper__offer__images">
            <img src="../../public/img/corporateGifts/1/1.png" alt="">
          </div>


          <div class="corporate-gifts__wrapper__offer__information">
            <div class="corporate-gifts__wrapper__offer__information__title">Корпоративные подарки</div>
            <div class="corporate-gifts__wrapper__offer__information__description">Брендированные пирожные макарон,
              которые
              поднимут аппетит ваших клиентов или порадуют коллектив
            </div>

            <p>
              Поднять мотивацию сотрудников? Увеличить лояльность клиентов или расположить их к себе перед большой
              сделкой?</p>
            <p>
              Мы приготовим наборы пирожных от 200 руб за шт, сделаем индивидуальный дизайн и нанесём ваши лого. Обычно
              готовим за 2-3 дня. </p>
            <div class="corporate-gifts__wrapper__offer__information__btn">
              <button type="submit">Скачать весь каталог подарков</button>
            </div>
            <div class="one"><img src="../../public/img/corporateGifts/1/3.png" alt=""></div>
            <div class="two"><img src="../../public/img/corporateGifts/1/4.png" alt=""></div>
            <div class="three"><img src="../../public/img/corporateGifts/1/5.png" alt=""></div>
            <div class="four"><img src="../../public/img/corporateGifts/1/2.png" alt=""></div>
          </div>


        </div>

        <div class="corporate-gifts__wrapper__sets">
          <div class="corporate-gifts__wrapper__sets_title">Некоторые варианты подарков</div>

          <div class="corporate-gifts__wrapper__sets__cards">
            <app-sets-card
                v-for="product in filteredProductsSets"
                :key="product.id"
                :id="product.id"
                :img="require(`@/../public/imagesFirebase/product/${product.photo[0]}`)"
                :title="product.name"
                :description="product.description"
                :price="product.price"
            ></app-sets-card>
          </div>

        </div>

        <div class="corporate-gifts__wrapper__completed-orders">
          <div class="corporate-gifts__wrapper__completed-orders_title">Мы уже выполнили заказы</div>
          <div class="corporate-gifts__wrapper__completed-orders__cards">

            <div
                v-for="completeds in completed"
                :key="completeds.id"
                class="corporate-gifts__wrapper__completed-orders__cards_card">
              <div class="corporate-gifts__wrapper__completed-orders__cards_card_img">
                <img :src="require(`@/../public/imagesFirebase/completed/${completeds.photo}`)" alt="">
              </div>
              <div class="corporate-gifts__wrapper__completed-orders__cards_card_description">
                {{ completeds.name }}
              </div>
            </div>
          </div>
        </div>

        <!--        <div class="corporate-gifts__wrapper__answers-questions">-->
        <!--          <div class="corporate-gifts__wrapper__answers-questions_title">Ответы на вопросы</div>-->
        <!--          <div class="corporate-gifts__wrapper__answers-questions__cards">-->
        <!--            <div class="corporate-gifts__wrapper__answers-questions__cards__card one">-->
        <!--              <div class="corporate-gifts__wrapper__answers-questions__cards__card_title">Сколько хранятся пирожные-->
        <!--                макарон?-->
        <!--              </div>-->
        <!--              <hr>-->
        <!--              <div class="corporate-gifts__wrapper__answers-questions__cards__card_description">Срок хранения бла бла-->
        <!--                бла-->
        <!--              </div>-->
        <!--            </div>-->
        <!--            <div class="corporate-gifts__wrapper__answers-questions__cards__card">-->
        <!--              <div class="corporate-gifts__wrapper__answers-questions__cards__card_title">Как быстро мы выполняем заказы-->
        <!--              </div>-->
        <!--              <hr>-->
        <!--              <div class="corporate-gifts__wrapper__answers-questions__cards__card_description">Стандартный срок-->
        <!--                выполнения-->
        <!--                заказа 3-5 дней, При большом тираже и в предновогодний сезон может увеличиться. Потому что...-->
        <!--              </div>-->
        <!--            </div>-->
        <!--            <div class="corporate-gifts__wrapper__answers-questions__cards__card one">-->
        <!--              <div class="corporate-gifts__wrapper__answers-questions__cards__card_title">А за 2 дня?-->
        <!--              </div>-->
        <!--              <hr>-->
        <!--              <div class="corporate-gifts__wrapper__answers-questions__cards__card_description">Текст про дополнительную-->
        <!--                стоимость при срочных заказах-->
        <!--              </div>-->
        <!--            </div>-->

        <!--            <div class="corporate-gifts__wrapper__answers-questions__cards__card two">-->
        <!--              <div class="corporate-gifts__wrapper__answers-questions__cards__card_title">А с НДС работаете?-->
        <!--              </div>-->
        <!--              <hr>-->
        <!--              <div class="corporate-gifts__wrapper__answers-questions__cards__card_description">Для вашего удобства у-->
        <!--                нас есть два варианта взаимодействия: с НДС и без НДС. Всегда уточняйте форму оплаты у менеджера, чтобы-->
        <!--                получить максимально выгодные для вас условия!-->
        <!--              </div>-->
        <!--            </div>-->
        <!--            <div class="corporate-gifts__wrapper__answers-questions__cards__card">-->
        <!--              <div class="corporate-gifts__wrapper__answers-questions__cards__card_title">Что с доставкой?-->
        <!--              </div>-->
        <!--              <hr>-->
        <!--              <div class="corporate-gifts__wrapper__answers-questions__cards__card_description">Мы доставляем ваши-->
        <!--                заказы по всей России: от Камчатки до Калининграда, бережно упаковывая каждую печеньку или набор. Мы-->
        <!--                всегда производим для вас на 2-5% больше от заказанного количества, чтобы ничего не смогло омрачить-->
        <!--                результат нашей работы. Сроки доставки 2-7 дней с момента заказа.-->
        <!--              </div>-->
        <!--            </div>-->
        <!--            <div class="corporate-gifts__wrapper__answers-questions__cards__card two">-->
        <!--              <div class="corporate-gifts__wrapper__answers-questions__cards__card_title">Ещё вопрос-->
        <!--              </div>-->
        <!--              <hr>-->
        <!--              <div class="corporate-gifts__wrapper__answers-questions__cards__card_description">Как уже неоднократно-->
        <!--                упомянуто, сторонники тоталитаризма в науке освещают чрезвычайно интересные особенности картины в целом,-->
        <!--                однако конкретные выводы, разумеется, рассмотрены исключительно в разрезе маркетинговых и финансовых-->
        <!--                предпосылок.-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
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
      completed: ref([]),
      popularSets: [
        {
          id: 1,
          img: '1.png',
          title: '3 макарона с печатью',
          description: 'В пластиковой упаковке самый бюджетный вариант',
          price: 'от 150 ',
          customClass: 'images',
        },
        {
          id: 2,
          img: '1.png',
          title: '9 макарон с печатью',
          description: 'С логотипом Вашей копании, пожеланиями и т.д.',
          price: '750',
          customClass: 'images',
        },
        {
          id: 3,
          img: '3.png',
          title: 'Круглый набор, 40 шт.',
          description: 'Для самых любимых и дорогих клиентов',
          price: '3900',
          customClass: 'images',
        },
        {
          id: 4,
          img: '4.png',
          title: 'Набор на 70 шт.',
          description: 'Роскошный подарок для большой компании',
          price: '950',
          customClass: 'images',
        },
        // Добавьте больше наборов, если необходимо
      ],
      visibleSetCount: 6,
    }
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
            description_composition_condition: doc.data().description_composition_condition || [],
            tastes: doc.data().tastes || [],
            title: doc.data().title,
            search: doc.data().search,
          }
        });
      });
    },
    withdrawalCompleted: function () {
      const completedQuery = query(collection(db, "completed"));

      onSnapshot(completedQuery, (snapshot) => {
        this.completed = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            name: doc.data().name,
            photo: doc.data().photo || [],
          }
        });
      });
    },
  },
  computed: {
    filteredProductsSets() {
      return this.product
          .filter(product => product.title === 'gift_sets')
          .slice(0, this.visibleSetCount);
    },
    visibleSets() {
      return this.popularSets.slice(0, this.visibleSetCount);
    },
  },
  mounted() {
    this.withdrawalProduct()
    this.withdrawalCompleted()
  },

}
</script>

<style src="../assets/style/CorporateGifts.css" scoped>

</style>