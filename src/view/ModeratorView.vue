<template>
  <div class="cabinet">
    <div class="container">
      <div class="cabinet__wrapper">

        <div class="cabinet__wrapper__menu">
          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('story')"
              :class="{'page_active': page === 'story'}"
          >
            Добавить "готовые наборы"
          </div>
          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('contacts')"
              :class="{'page_active': page === 'contacts'}"
          >
            Добавить "комбо - наборы"
          </div>

          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('contacts')"
              :class="{'page_active': page === 'contacts'}"
          >
            Добавить "подарки с печатью"
          </div>

          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('contacts')"
              :class="{'page_active': page === 'contacts'}"
          >
            Добавить "выполненные заказы с печатью"
          </div>

          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('contacts')"
              :class="{'page_active': page === 'contacts'}"
          >
            Добавить "акции"
          </div>

          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('contacts')"
              :class="{'page_active': page === 'contacts'}"
          >
            Добавить "новости"
          </div>
          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('contacts')"
              :class="{'page_active': page === 'contacts'}"
          >
            Добавить "условия"
          </div>

          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('contacts')"
              :class="{'page_active': page === 'contacts'}"
          >
            Добавить "фильтры для новостей"
          </div>

          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('contacts')"
              :class="{'page_active': page === 'contacts'}"
          >
            Добавить "фильтры для готовых наборов"
          </div>

          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('contacts')"
              :class="{'page_active': page === 'contacts'}"
          >
            Добавить "Гарантии вкуса и качества"
          </div>
        </div>



        <div class="cabinet__wrapper__information" v-if="page === 'story'">
          <div class="cabinet__wrapper__information_title">
            История заказов
          </div>
        </div>

        <div class="cabinet__wrapper__information" v-if="page === 'story'">
          <div class="cabinet__wrapper__information_title">
            История заказов
          </div>
        </div>

        <div class="cabinet__wrapper__information" v-if="page === 'story'">
          <div class="cabinet__wrapper__information_title">
            История заказов
          </div>
        </div>

        <div class="cabinet__wrapper__information" v-if="page === 'story'">
          <div class="cabinet__wrapper__information_title">
            История заказов
          </div>
        </div>

        <div class="cabinet__wrapper__information" v-if="page === 'story'">
          <div class="cabinet__wrapper__information_title">
            История заказов
          </div>
        </div>

        <div class="cabinet__wrapper__information" v-if="page === 'story'">
          <div class="cabinet__wrapper__information_title">
            История заказов
          </div>
        </div>

        <div class="cabinet__wrapper__information" v-if="page === 'story'">
          <div class="cabinet__wrapper__information_title">
            История заказов
          </div>
        </div>

        <div class="cabinet__wrapper__information" v-if="page === 'story'">
          <div class="cabinet__wrapper__information_title">
            История заказов
          </div>
        </div>

        <div class="cabinet__wrapper__information" v-if="page === 'story'">
          <div class="cabinet__wrapper__information_title">
            История заказов
          </div>
        </div>

        <div class="cabinet__wrapper__information" v-if="page === 'story'">
          <div class="cabinet__wrapper__information_title">
            История заказов
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 'story',
    }
  },
  computed: {},
  methods: {
    movingPage(e) {
      this.page = e
    },
  },
}
</script>

<style src="@/assets/style/Cabinet.css" scoped>

</style>