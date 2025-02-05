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
              v-for="popularSet in visibleSets"
              :key="popularSet.id"
              :id="popularSet.id"

              :img="require(`@/../public/img/dessertСatalog/${popularSet.img}`)"
              :title="popularSet.title"
              :description="popularSet.description"
              :price="popularSet.price"
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
export default {
  data() {
    return {
      popularSets: [
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
      visibleSetCount: 4, // Количество видимых наборов
    }
  },
  computed: {
    visibleSets() {
      return this.popularSets.slice(0, this.visibleSetCount);
    },
    hasMoreSets() {
      return this.visibleSetCount < this.popularSets.length;
    }
  },
  methods: {
    showMore() {
      return this.visibleSetCount += 4
    }
  }
}
</script>

<style src="../assets/style/DessertCatalog.css" scoped>

</style>