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
              @click="movingPage('user')"
              :class="{'page_active': page === 'user'}"
          >
            Вывод пользователей
          </div>

          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('product')"
              :class="{'page_active': page === 'product'}"
          >
            Вывод продуктов
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
                  <option disabled selected value="">Выберите набор который хотите создать</option>
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
                <textarea name="" id="" cols="30" rows="10" v-model="description"
                          placeholder="Укажите описание"></textarea>
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
                <input type="file" @change="handleFileUpload($event, 'mainImage')" accept="image/*">
              </div>
              <div class="">
                <label for="">Фото №2</label>
                <input type="file" @change="handleFileUpload($event, 'image2')" accept="image/*">
              </div>
              <div class="">
                <label for="">Фото №3</label>
                <input type="file" @change="handleFileUpload($event, 'image3')" accept="image/*">
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
          <div class="cabinet__wrapper__information__form">
            <div class="cabinet__wrapper__information__form_block">
              <div class="">
                <label for="">Название выполненного набора</label>
                <input type="text" v-model="name" placeholder="Укажите название">
              </div>
              <div class="">
                <label for="">Фото</label>
                <input type="file" @change="handleFileUpload($event, 'mainImage')" accept="image/*">
              </div>
            </div>
            <button class="cabinet__wrapper__information__form_button" @click="addSeal">
              >Добавить выполненные заказы с печатью
            </button>
          </div>

        </div>

        <div class="cabinet__wrapper__information" v-if="page === 'promotion'">
          <div class="cabinet__wrapper__information_title">
            Добавить "акции"
          </div>

          <div class="cabinet__wrapper__information__form">


            <div class="cabinet__wrapper__information__form_block">
              <div class="">
                <label for="">Название акции</label>
                <input type="text" v-model="name" placeholder="Укажите название">
              </div>
              <div class="">
                <label for="">Цвет</label>
                <select v-model="color" name="color" id="color">
                  <option disabled selected value="">Выберите название цвета (#000)</option>
                  <option value="#FF4D6D">Красный</option>
                  <option value="#8CC4EC">Синий</option>
                </select>
              </div>
            </div>

            <div class="cabinet__wrapper__information__form_block">


              <div class="">
                <label for="">Фото №1 (главная)</label>
                <input type="file" @change="handleFileUpload($event, 'mainImage')" accept="image/*">
              </div>
              <div class="">
                <label for="">Заголовок (Новинка)</label>
                <input type="text" v-model="title" placeholder="Заголовок (новинка)">
              </div>


            </div>

            <button class="cabinet__wrapper__information__form_button" @click="addPromotion">Добавить акции</button>
          </div>


        </div>

        <div class="cabinet__wrapper__information" v-if="page === 'news'">
          <div class="cabinet__wrapper__information_title">
            Добавить "новости"
          </div>

          <div class="cabinet__wrapper__information__form">

            <div class="cabinet__wrapper__information__form_block">

              <div class="">
                <label for="">Название</label>
                <input type="text" v-model="name" placeholder="Укажите название">
              </div>

              <div class="">
                <label for="">Поиск по слову</label>
                <input type="text" v-model="search" placeholder="напишите слово по которому будет поиск">
              </div>
            </div>

            <div class="cabinet__wrapper__information__form_block">
              <div class="">
                <label for="">Описание</label>
                <textarea name="" id="" cols="30" rows="10"
                          v-model="description"
                          placeholder="Укажите описание"></textarea>
              </div>
            </div>

            <div class="cabinet__wrapper__information__form_block">
              <div class="">
                <label for="">Дата</label>
                <input type="date" v-model="date" placeholder="Укажите дату">
              </div>
              <div class="">
                <label for="">Фото</label>
                <input type="file" @change="handleFileUpload($event, 'mainImage')" accept="image/*">
              </div>
            </div>

            <button class="cabinet__wrapper__information__form_button" @click="addNews">Добавить новость</button>
          </div>

        </div>

        <div class="cabinet__wrapper__information" v-if="page === 'conditions'">
          <div class="cabinet__wrapper__information_title">
            Добавить "условия"
          </div>

          <div class="cabinet__wrapper__information__form">

            <div class="cabinet__wrapper__information__form_block">

              <div class="">
                <label for="">Название</label>
                <input type="text" v-model="name" placeholder="Укажите название">
              </div>
              <div class="">
                <label for="">Фото</label>
                <input type="file" @change="handleFileUpload($event, 'mainImage')" accept="image/*">
              </div>

            </div>

            <div class="cabinet__wrapper__information__form_block">
              <div class="">
                <label for="">Описание</label>
                <textarea name="" id="" cols="30" rows="10"
                          v-model="description"
                          placeholder="Укажите описание"></textarea>
              </div>
            </div>

            <button class="cabinet__wrapper__information__form_button" @click="addConditions">Добавить условия</button>
          </div>

        </div>

        <div class="cabinet__wrapper__information" v-if="page === 'filterNews'">
          <div class="cabinet__wrapper__information_title">
            Добавить "фильтры для новостей"
          </div>

          <div class="cabinet__wrapper__information__form">


            <div class="cabinet__wrapper__information__form_block">
              <div class="">
                <label for="">Название фильтра</label>
                <input type="text" v-model="name" placeholder="Укажите название">
              </div>
            </div>

            <button
                class="cabinet__wrapper__information__form_button"
                @click="addFilterNews">
              Добавить фильтр для новостей
            </button>
          </div>

        </div>

        <div class="cabinet__wrapper__information" v-if="page === 'filterSets'">
          <div class="cabinet__wrapper__information_title">
            Добавить "фильтры для готовых наборов"
          </div>

          <div class="cabinet__wrapper__information__form">

            <div class="cabinet__wrapper__information__form_block">
              <div class="">
                <label for="">Название фильтра</label>
                <input type="text" v-model="name" placeholder="Укажите название">
              </div>
            </div>

            <button class="cabinet__wrapper__information__form_button" @click="addFilterSets">Добавить фильтр для
              продуктов
            </button>
          </div>

        </div>


        <div class="cabinet__wrapper__information user" v-if="page === 'user'">
          <div class="cabinet__wrapper__information_title">
            Вывод пользователя
          </div>

          <table>
            <thead>
            <tr>
              <th>uid</th>
              <th>phone</th>
              <th>company</th>
              <th>role</th>
              <th>кнопки</th>
            </tr>
            </thead>
            <tbody>

            <tr v-for="user in filteredUsers" :key="user.id">
              <td>{{ user.uid }}</td>
              <td>{{ user.phone }}</td>
              <td>{{ user.company || "пользователь не добавил" }}</td>
              <td v-if="update !== user.id">{{ user.role }}</td>
              <td v-if="update === user.id">
                {{ (role === "" || role === null) ? user.role : role }}
                <input v-model="role" type="text" name="" id="" placeholder="изменить">
              </td>
              <td>
                <button @click="updateUser(user.id)" v-if="update !== user.id">Изменить</button>
                <button v-if="update !== user.id" @click="deleteUser(user.id, user.uid)">Удалить</button>
                <button v-if="update === user.id" @click="saveUser(null, user)">Сохранить</button>
                <button v-if="update === user.id" @click="cancellationUser(null)">Отменить</button>
              </td>
            </tr>
            </tbody>
          </table>


        </div>

        <div class="cabinet__wrapper__information " v-if="page === 'product'">
          <div class="cabinet__wrapper__information_title">
            Вывод продуктов
          </div>
          <div>
            <button class="cabinet__wrapper__menu_button product"
                    :class="{'page_active': tableProduct === 'sets'}"
                    @click="tableKit('sets')">Популярные наборы
            </button>
            <button class="cabinet__wrapper__menu_button product"
                    :class="{'page_active': tableProduct === 'combo'}"
                    @click="tableKit('combo')">Комбо наборы
            </button>
            <button class="cabinet__wrapper__menu_button product"
                    :class="{'page_active': tableProduct === 'gift_sets'}"
                    @click="tableKit('gift_sets')">Подарочные наборы
            </button>
          </div>


          <table>
            <thead>
            <tr>
              <th>Описание</th>
              <th>Описание - состав - условия</th>
              <th>Имя</th>
              <th>Цена</th>
              <th>Поиск</th>
              <th>Вкусы</th>
              <th>Тип продукта</th>
              <th>кнопки</th>
            </tr>
            </thead>
            <tbody v-if="tableProduct === 'sets'">
            <tr v-for="product in filteredProductsSets" :key="product.id">
              <td v-if="updateProduct !== product.id">
                {{ product.description }}
              </td>
              <td v-if="updateProduct === product.id">
                {{ (description === "" || description === null) ? product.description : description }}
                <br><input v-model="description" type="text">
              </td>
              <td v-if="updateProduct !== product.id">
                <hr>
                <span>Описание: </span>
                <br>
                НАЗВАНИЕ: {{ product.description_composition_condition[0].title }}
                <br><br>
                ОПИСАНИЕ: {{ product.description_composition_condition[0].description }}
                <br>
                <hr>
                <span>Состав: </span>
                <br>
                НАЗВАНИЕ: {{ product.description_composition_condition[1].title }}
                <br> <br>
                ОПИСАНИЕ: {{ product.description_composition_condition[1].description }}
                <br>
                <hr>
                <span>Условия и срок: </span>
                <br>

                НАЗВАНИЕ: {{ product.description_composition_condition[2].title }}
                <br> <br>
                ОПИСАНИЕ: {{ product.description_composition_condition[2].description }}

                <hr>
              </td>
              <td v-if="updateProduct === product.id">
                <hr>
                <span>Описание: </span>
                <br>
                НАЗВАНИЕ: {{
                  (descriptionTitle === "" || descriptionTitle === null) ? product.description_composition_condition[0].title : descriptionTitle
                }}
                <br><input v-model="descriptionTitle" type="text">
                <br><br>
                ОПИСАНИЕ: {{
                  (descriptionDescription === "" || descriptionDescription === null) ? product.description_composition_condition[0].description : descriptionDescription
                }}
                <br><input v-model="descriptionDescription" type="text">

                <br>
                <hr>
                <span>Состав: </span>
                <br>
                НАЗВАНИЕ: {{
                  (compositionTitle === "" || compositionTitle === null) ? product.description_composition_condition[1].title : compositionTitle
                }}
                <br><input v-model="compositionTitle" type="text">

                <br> <br>
                ОПИСАНИЕ: {{
                  (compositionDescription === "" || compositionDescription === null) ? product.description_composition_condition[0].description : compositionDescription
                }}
                <br><input v-model="compositionDescription" type="text">
                <br>
                <hr>
                <span>Условия и срок: </span>
                <br>

                НАЗВАНИЕ: {{
                  (conditionTitle === "" || conditionTitle === null) ? product.description_composition_condition[2].title : conditionTitle
                }}
                <br><input v-model="conditionTitle" type="text">

                <br> <br>
                ОПИСАНИЕ: {{
                  (conditionDescription === "" || conditionDescription === null) ? product.description_composition_condition[0].description : conditionDescription
                }}
                <br><input v-model="conditionDescription" type="text">

                <hr>
              </td>
              <td v-if="updateProduct !== product.id">
                {{ product.name }}
              </td>
              <td v-if="updateProduct === product.id">
                {{ (name === "" || name === null) ? product.name : name }}
                <br><input v-model="name" type="text">
              </td>
              <td v-if="updateProduct !== product.id">
                {{ product.price }}р
              </td>
              <td v-if="updateProduct === product.id">
                {{ (price === "" || price === null) ? product.price : price }}
                <br><input v-model="price" type="text">
              </td>
              <td v-if="updateProduct !== product.id">
                {{ product.search }}
              </td>
              <td v-if="updateProduct === product.id">
                {{ (search === "" || search === null) ? product.search : search }}
                <br><input v-model="search" type="text">
              </td>
              <td v-if="updateProduct !== product.id">
                <div v-for="taste in product.tastes" :key="taste.id">
                  <hr>
                  <span>Название: </span>
                  {{ taste.name }}
                  <span>Количество: </span>
                  {{ taste.quantity }}
                </div>
                <hr>
              </td>
              <td v-if="updateProduct === product.id">

                <div v-for="(taste, tasteIndex) in product.tastes" :key="tasteIndex">
                  <hr>
                  <span>Название: </span>
                  <input v-model="taste.name" type="text" placeholder="Введите название">
                  <span>Количество: </span>
                  <input v-model="taste.quantity" type="text" placeholder="Введите количество">
                  <hr>
                </div>
                  <button @click="addTaste(product.tastes)">Добавить новые вкусы</button>
              </td>
              <td v-if="updateProduct !== product.id">
                {{ product.title }}
              </td>
              <td v-if="updateProduct === product.id">
                {{ (title === "" || title === null) ? product.title : title }}
                <br><input v-model="title" type="text">
              </td>
              <td>
                <button @click="updateProducts(product.id)" v-if="updateProduct !== product.id">Изменить</button>
                <button v-if="updateProduct !== product.id">Удалить</button>
                <button v-if="updateProduct === product.id" @click="saveProduct(null)">Сохранить</button>
                <button v-if="updateProduct === product.id" @click="cancellationProduct(null)">Отменить</button>
              </td>
            </tr>
            </tbody>
          </table>


        </div>


      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import {
  addDoc, collection, onSnapshot, query, where, getDocs,
  deleteDoc,
  setDoc,
  doc
} from "firebase/firestore";
import 'firebase/auth';
import {db} from "@/firebase";

const baseUrl = `${process.env.VUE_APP_API_URL || 'http://localhost:3000'}/upload`; // для локалки
// const baseUrl = '/upload'; // для хоста
export default {
  data() {
    return {
      newTastes: ref([]),
      updateProduct: null,
      tableProduct: 'sets',
      update: null,
      role: null,
      products: ref([]),
      users: ref([]),
      basket: ref([]),
      page: 'product',
      date: ref(''),
      color: ref(''),
      title: ref(''),
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
      mainImage: null,
      image2: null,
      image3: null,
      tastes: ref([
        {
          name: '',
          quantity: ''
        }
      ]),
    }
  },

  computed: {
    filteredUsers() {
      const filterUser = this.users.filter(users => users.role !== 'модератор');
      return filterUser
    },
    filteredProductsSets() {
      const filterProduct = this.products.filter(product => product.title === 'sets');
      return filterProduct
    },
    filteredProductsCombo() {
      const filterProduct = this.products.filter(product => product.title === 'combo');
      return filterProduct
    },
    filteredProductsGift_sets() {
      const filterProduct = this.products.filter(product => product.title === 'gift_sets');
      return filterProduct
    },
  },
  methods: {
    movingPage(e) {
      this.page = e;
      this.role = ref([]),
          this.date = ref(''),
          this.color = ref(''),
          this.title = ref(''),
          this.kit = ref(''),
          this.description = ref(''),
          this.name = ref(''),
          this.search = ref(''),
          this.price = ref(''),
          this.descriptionTitle = ref(''),
          this.descriptionDescription = ref(''),
          this.compositionTitle = ref(''),
          this.compositionDescription = ref(''),
          this.conditionTitle = ref(''),
          this.conditionDescription = ref(''),
          this.description_composition_condition = ref([]),
          this.mainImage = null,
          this.image2 = null,
          this.image3 = null,
          this.tastes = ref([
            {
              name: '',
              quantity: ''
            }
          ])
    },
    addTastes() {
      this.tastes.push({name: '', quantity: ''})
    },
    removeTastes(e) {
      if (this.tastes.length > 1) {
        this.tastes.splice(e, 1)
      }
    },
    handleFileUpload(event, imageType) {
      const file = event.target.files[0];
      if (file) {
        this[imageType] = file;
      } else {
        this[imageType] = null;
      }
    },

    async addProduct() {
      if (!this.mainImage || !this.image2 || !this.image3) {
        alert('Пожалуйста, загрузите все три изображения.');
        return;
      }
      const formData = new FormData();
      formData.append('image', this.mainImage);
      formData.append('image2', this.image2);
      formData.append('image3', this.image3);

      const productData = {
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
        photo: [],
      };


      try {
        const response = await fetch(baseUrl, {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        productData.photo = data.filePaths;

        // Сохраните продукт в Firestore
        await addDoc(collection(db, 'product'), productData);
        alert('Продукт успешно добавлен!');

      } catch (error) {
        console.error('Error:', error);
        alert('Произошла ошибка при добавлении продукта. Пожалуйста, попробуйте еще раз.');
      }
    },

    async addSeal() {
      if (!this.mainImage) {
        alert('Пожалуйста, загрузите изображение.');
        return;
      }

      const formData = new FormData();
      formData.append('sealImage', this.mainImage);

      const sealData = {
        name: this.name,
        photo: '',
      };


      try {
        const response = await fetch(baseUrl, {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Ошибка при загрузке изображения');
        }

        const data = await response.json();
        sealData.photo = data.filePaths[0];

        await addDoc(collection(db, 'completed'), sealData);
        alert('Выполненный заказ с печатью успешно добавлен!');
      } catch (error) {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при добавлении выполненного заказа.');
      }
    },

    async addPromotion() {
      if (!this.mainImage) {
        alert('Пожалуйста, загрузите изображение.');
        return;
      }

      const formData = new FormData();
      formData.append('promotionImage', this.mainImage);

      const promotionlData = {
        color: this.color,
        name: this.name,
        title: this.title,
        photo: '',
      };


      try {
        const response = await fetch(baseUrl, {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Ошибка при загрузке изображения');
        }

        const data = await response.json();
        promotionlData.photo = data.filePaths[0];

        await addDoc(collection(db, 'promotion'), promotionlData);
        alert('акция успешно добавлен!');
      } catch (error) {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при добавлении акции.');
      }
    },

    async addNews() {
      if (!this.mainImage) {
        alert('Пожалуйста, загрузите изображение.');
        return;
      }

      const formData = new FormData();
      formData.append('newsImage', this.mainImage);

      const newsData = {
        date: this.date,
        description: this.description,
        name: this.name,
        search: this.search,
        photo: '',
      };


      try {
        const response = await fetch(baseUrl, {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Ошибка при загрузке изображения');
        }

        const data = await response.json();
        newsData.photo = data.filePaths[0];

        await addDoc(collection(db, 'news'), newsData);
        alert('новость успешно добавлен!');
      } catch (error) {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при добавлении новостей.');
      }
    },

    async addConditions() {
      if (!this.mainImage) {
        alert('Пожалуйста, загрузите изображение.');
        return;
      }

      const formData = new FormData();
      formData.append('conditionsImage', this.mainImage);

      const conditionsData = {
        description: this.description,
        name: this.name,
        photo: '',
      };


      try {
        const response = await fetch(baseUrl, {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Ошибка при загрузке изображения');
        }

        const data = await response.json();
        conditionsData.photo = data.filePaths[0];

        await addDoc(collection(db, 'conditions'), conditionsData);
        alert('Условие успешно добавлено!');
      } catch (error) {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при добавлении условия.');
      }
    },

    async addFilterNews() {
      const conditionsData = {
        title: this.name,
      };

      await addDoc(collection(db, 'filtersNews'), conditionsData);
      alert('Фильтр для новостей успешно добавлено!');
    },

    async addFilterSets() {
      const conditionsData = {
        title: this.name,
      };

      await addDoc(collection(db, 'filtersSets'), conditionsData);
      alert('Фильтр для продуктов успешно добавлено!');
    },


    withdrawalUsers: function () {
      const basketQuery = query(collection(db, "users"));

      onSnapshot(basketQuery, (snapshot) => {
        this.users = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            uid: doc.data().uid,
            phone: doc.data().phone,
            name: doc.data().name,
            company: doc.data().company,
            city: doc.data().city,
            role: doc.data().role,
          }
        })
      })
    },

    async deleteUser(userId, userUid) {
      try {
        const basketQuery = query(collection(db, "basket"), where("userId", "==", userUid));
        const querySnapshotBasket = await getDocs(basketQuery);

        if (querySnapshotBasket.empty) {
          console.log("Пользователь не найден в корзине.");
          return;
        }

        let cartsId = '';

        querySnapshotBasket.forEach(async (docItem) => {
          cartsId = docItem.data().cartsId;
          await deleteDoc(docItem.ref); // удаляем basket
        });

        const cartDocsSnapshot = await getDocs(collection(db, "basket", "carts", cartsId));
        cartDocsSnapshot.forEach(async (docItem) => {
          await deleteDoc(docItem.ref); // удаляем товар
        });

        await deleteDoc(doc(db, 'users', userId));

        await fetch(
            "http://localhost:3000/delete-user",
            // "/delete-user",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({uid: userUid})
            });

      } catch (err) {
        console.error("Ошибка при удалении:", err);
      }
    },

    async updateUser(update) {
      this.update = update
      this.role = null
    },

    async cancellationUser(update) {
      this.update = update
      this.role = null
    },

    async saveUser(update, user) {
      setDoc(doc(db, 'users', user.id), {
        id: user.id,
        uid: user.uid,
        phone: user.phone,
        name: user.name,
        company: user.company,
        city: user.city,
        role: this.role,
      });

      this.update = update
      this.role = null
    },


    withdrawalProduct: function () {
      const productQuery = query(collection(db, "product"));

      onSnapshot(productQuery, (snapshot) => {
        this.products = snapshot.docs.map((doc) => {
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
        })
        console.log(this.product);
      })
    },

    tableKit(e) {
      this.tableProduct = e
    },

    async updateProducts(update) {
      this.updateProduct = update;
    },
    async saveProduct(update) {
      this.updateProduct = update;
    },
    async cancellationProduct(update) {
      this.updateProduct = update;
    },
    addTaste(tastes) {
      console.log(tastes);
        // this.newTastes = product.tastes.map(taste => ({
        //   name: taste.name,
        //   quantity: taste.quantity
        // }));
        // console.log(this.newTastes);
    },
  },
  mounted() {
    this.withdrawalUsers();
    this.withdrawalProduct();
  }
}
</script>

<style src="@/assets/style/Moderator.css" scoped>

</style>