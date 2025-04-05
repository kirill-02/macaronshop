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
          </div>
            <div class="cabinet__wrapper__information__form">

              <div class="cabinet__wrapper__information__form_block">

                <div class="">
                <label for="">Набор для добавления</label>
                  <select v-model="kit" name="kit" id="kit">
                    <option  disabled selected value="">Выберите набор который хотите создать</option>
                    <option value="sets">готовые наборы</option>
                    <option value="combo">комбо - наборы</option>
                    <option value="gift_sets">подарки с печатью</option>
                  </select>
                </div>

                <div class="">
                  <label for="">Цена</label>
                  <input type="text" v-model="price" placeholder="Укажите цену">
                </div>
              </div>

              <div class="cabinet__wrapper__information__form_block">
                <div class="">
                  <label for="">Описание</label>
                  <textarea name="" id="" cols="30" rows="10" v-model="description" placeholder="Укажите описание"></textarea>
                </div>
              </div>

              <div class="cabinet__wrapper__information__form_block">
                <div class="">
                  <label for="">Название набора</label>
                  <input type="text" v-model="name" placeholder="Укажите название">
                </div>
                <div class="">
                  <label for="">Поиск по слову</label>
                  <input type="text" v-model="search" placeholder="напишите слово по которому будет поиск">
                </div>
              </div>

              <div class="cabinet__wrapper__information__form_block">
                <div class="">
                  <label for="">Фото №1 (главная)</label>
                  <input type="image" >
                </div>
                <div class="">
                  <label for="">Фото №2</label>
                  <input type="image" >

                </div>
                <div class="">
                  <label for="">Фото №3</label>
                  <input type="image" >

                </div>
              </div>
              <div class="cabinet__wrapper__information__form_title">Описание -- Состав -- Условия</div>
              <div class="cabinet__wrapper__information__form_description">Описание</div>

              <div class="cabinet__wrapper__information__form_block">
                <div class="">
                  <label for="">Название</label>
                  <textarea name="" id="" cols="30" rows="10" v-model="descriptionTitle" placeholder=""></textarea>
                </div>
                <div class="">
                  <label for="">Описание</label>
                  <textarea name="" id="" cols="30" rows="10" v-model="descriptionDescription" placeholder=""></textarea>
                </div>
              </div>

              <div class="cabinet__wrapper__information__form_description">Состав и пищевая ценность</div>
              <div class="cabinet__wrapper__information__form_block">
                <div class="">
                  <label for="">Название</label>
                  <textarea name="" id="" cols="30" rows="10" v-model="compositionTitle" placeholder=""></textarea>
                </div>
                <div class="">
                  <label for="">Описание</label>
                  <textarea name="" id="" cols="30" rows="10" v-model="compositionDescription" placeholder=""></textarea>
                </div>
              </div>

              <div class="cabinet__wrapper__information__form_description">Условия и срок хранения</div>
              <div class="cabinet__wrapper__information__form_block">
                <div class="">
                  <label for="">Название</label>
                  <textarea name="" id="" cols="30" rows="10" v-model="conditionTitle" placeholder=""></textarea>
                </div>
                <div class="">
                  <label for="">Описание</label>
                  <textarea name="" id="" cols="30" rows="10" v-model="conditionDescription" placeholder=""></textarea>
                </div>
              </div>

              <div class="cabinet__wrapper__information__form_title">Вкусы</div>

              <div class="cabinet__wrapper__information__form_tastes">
                <div v-for="(taste, e) in tastes" :key="taste" class="cabinet__wrapper__information__form_tastes_fields">
                  <div class="">
                    <label for="">Название</label>
                    <input v-model="taste.name" type="text">
                  </div>
                  <div class="">
                    <label for="">Количество</label>
                    <input v-model="taste.quantity" type="number">
                  </div>
                  <button class="cabinet__wrapper__information__form_tastes_button minus" @click="removeTastes(e)">
                    -
                  </button>
                </div>
                <button class="cabinet__wrapper__information__form_tastes_button plus" @click="addTastes">
                    +
                  </button>
              </div>

              <button class="cabinet__wrapper__information__form_button" @click="addProduct">Добавить товар</button>
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
import {ref} from 'vue'
import {addDoc, collection} from "firebase/firestore";
import {db} from "@/firebase";

export default {
  data() {
    return {
      page: 'sets',
      kit: ref(''),
      description: ref(''),
      name: ref(''),
      search: ref(''),
      price: ref(''),
      descriptionTitle: ref(''),
      descriptionDescription: ref(''),
      compositionTitle: ref(''),
      compositionDescription: ref(''),
      conditionTitle: ref(''),
      conditionDescription: ref(''),
      description_composition_condition: ref([]),
      tastes: ref([
        {
          name: '',
          quantity: ''
        }
      ]),
    }
  },
  computed: {},
  methods: {
    movingPage(e) {
      this.page = e
    },

    addTastes() {
      this.tastes.push({name: '', quantity: ''})
    },
    removeTastes(e) {
      if (this.tastes.length > 1) {
      this.tastes.splice(e, 1)
      }
    },
    addProduct: async function () {
      const product = {
        description: this.description,
        name: this.name,
        price: this.price,
        search: this.search,
        title: this.kit,
        tastes: this.tastes,
        description_composition_condition: [
          {
            title: this.descriptionTitle,
            description: this.descriptionDescription,
          },
          {
            title: this.compositionTitle,
            description: this.compositionDescription,
          },
          {
            title: this.conditionTitle,
            description: this.conditionDescription,
          },
        ],
      }
      console.log(product)
      await addDoc(collection(db, 'test'), product)
    }
  },
}
</script>

<style src="@/assets/style/Moderator.css" scoped>

</style>