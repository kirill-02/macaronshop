<template>
  <div class="cabinet">
    <div class="container">
      <div class="cabinet__wrapper">

        <div class="cabinet__wrapper__menu">
          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('sets')"
              :class="{'page_active': page === 'sets'}"
          >
            Добавить "готовые наборы"
          </div>
          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('combo')"
              :class="{'page_active': page === 'combo'}"
          >
            Добавить "комбо - наборы"
          </div>

          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('present')"
              :class="{'page_active': page === 'present'}"
          >
            Добавить "подарки с печатью"
          </div>

          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('seal')"
              :class="{'page_active': page === 'seal'}"
          >
            Добавить "выполненные заказы с печатью"
          </div>

          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('promotion')"
              :class="{'page_active': page === 'promotion'}"
          >
            Добавить "акции"
          </div>

          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('news')"
              :class="{'page_active': page === 'news'}"
          >
            Добавить "новости"
          </div>
          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('conditions')"
              :class="{'page_active': page === 'conditions'}"
          >
            Добавить "условия"
          </div>

          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('filterNews')"
              :class="{'page_active': page === 'filterNews'}"
          >
            Добавить "фильтры для новостей"
          </div>

          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('filterSets')"
              :class="{'page_active': page === 'filterSets'}"
          >
            Добавить "фильтры для готовых наборов"
          </div>

          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('guarantee')"
              :class="{'page_active': page === 'guarantee'}"
          >
            Добавить "Гарантии вкуса и качества"
          </div>

          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('user')"
              :class="{'page_active': page === 'user'}"
          >
            Вывод пользователей
          </div>
        </div>



        <div class="cabinet__wrapper__information" v-if="page === 'sets'">
          <div class="cabinet__wrapper__information_title">
            Добавить "готовые наборы"
            
            <div class="cabinet__wrapper__information__form">

              <div class="">
                <div class="">
                <label for="">title</label>
                <input type="text">
                </div>
                <div class="">
                  <label for="">price</label>
                  <input type="text">
                </div>
              </div>

              <div class="">
                <div class="">
                  <label for="">description</label>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
              </div>
              
              <div class="">
                <div class="">
                  <label for="">name</label>
                  <input type="text">
                </div>
                <div class="">
                  <label for="">search</label>
                  <input type="text">
                </div>
              </div>

              <div class="">
                <div class="">
                  <label for="">photo 1</label>
                  <input type="image" >
                </div>
                <div class="">
                  <label for="">photo 2</label>
                  <input type="image" >

                </div>
                <div class="">
                  <label for="">photo 3</label>
                  <input type="image" >

                </div>
              </div>
              <div class="cabinet__wrapper__information__form_title">description_composition_condition</div>
              <div class="cabinet__wrapper__information__form_title">description</div>

              <div class="">
                <div class="">
                  <label for="">name</label>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div class="">
                  <label for="">description</label>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
              </div>

              <div class="cabinet__wrapper__information__form_title">composition</div>
              <div class="">
                <div class="">
                  <label for="">name</label>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div class="">
                  <label for="">description</label>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
              </div>

              <div class="cabinet__wrapper__information__form_title">condition</div>
              <div class="">
                <div class="">
                  <label for="">name</label>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div class="">
                  <label for="">description</label>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="cabinet__wrapper__information" v-if="page === 'combo'">
          <div class="cabinet__wrapper__information_title">
            Добавить "комбо - наборы"
          </div>
        </div>

        <div class="cabinet__wrapper__information" v-if="page === 'present'">
          <div class="cabinet__wrapper__information_title">
            Добавить "подарки с печатью"
          </div>
        </div>

        <div class="cabinet__wrapper__information" v-if="page === 'seal'">
          <div class="cabinet__wrapper__information_title">
            Добавить "выполненные заказы с печатью"
          </div>
        </div>

        <div class="cabinet__wrapper__information" v-if="page === 'promotion'">
          <div class="cabinet__wrapper__information_title">
            Добавить "акции"
          </div>
        </div>

        <div class="cabinet__wrapper__information" v-if="page === 'news'">
          <div class="cabinet__wrapper__information_title">
            Добавить "новости"
          </div>
        </div>

        <div class="cabinet__wrapper__information" v-if="page === 'conditions'">
          <div class="cabinet__wrapper__information_title">
            Добавить "условия"
          </div>
        </div>

        <div class="cabinet__wrapper__information" v-if="page === 'filterNews'">
          <div class="cabinet__wrapper__information_title">
            Добавить "фильтры для новостей"
          </div>
        </div>

        <div class="cabinet__wrapper__information" v-if="page === 'filterSets'">
          <div class="cabinet__wrapper__information_title">
            Добавить "фильтры для готовых наборов"
          </div>
        </div>

        <div class="cabinet__wrapper__information" v-if="page === 'guarantee'">
          <div class="cabinet__wrapper__information_title">
            Добавить "Гарантии вкуса и качества"
          </div>
        </div>

        <div class="cabinet__wrapper__information" v-if="page === 'user'">
          <div class="cabinet__wrapper__information_title">
           Вывод пользователя
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
      page: 'sets',
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

<style src="@/assets/style/Moderator.css" scoped>

</style>