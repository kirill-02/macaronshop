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

            <tr v-for="user in users" :key="user.id">
              <td>{{ user.uid }}</td>
              <td>{{ user.phone }}</td>
              <td>{{ user.company || "пользователь не добавил" }}</td>
              <td>{{ user.role }}</td>
              <td>
                <button>Изменить</button>
                <button @click="deleteUser(user.id, user.uid)">Удалить</button>
                <button>Сохранить</button>
                <button>Отменить</button>
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
  doc
} from "firebase/firestore";
import {db} from "@/firebase";
// import firebase from 'firebase/app';
import 'firebase/auth';
// import {getAuth} from "firebase/auth";

// const auth = getAuth();
const baseUrl = `${process.env.VUE_APP_API_URL || 'http://localhost:3000'}/upload`; // для локалки
// const baseUrl = '/upload'; // для хоста
export default {
  data() {

    return {
      users: ref([]),
      basket: ref([]),
      page: 'user',
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

  computed: {},
  methods: {
    movingPage(e) {
      this.page = e;
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
        this[imageType] = file; // Сохраняем файл в состояние компонента
      } else {
        this[imageType] = null; // Убедитесь, что переменная сбрасывается, если файл не выбран
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
        productData.photo = data.filePaths; // Сохраняем пути к изображениям

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
        sealData.photo = data.filePaths[0]; // Получаем путь к изображению

        await addDoc(collection(db, 'completed'), sealData); // добавляем в коллекцию seal
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
        promotionlData.photo = data.filePaths[0]; // Получаем путь к изображению

        await addDoc(collection(db, 'promotion'), promotionlData); // добавляем в коллекцию seal
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
        newsData.photo = data.filePaths[0]; // Получаем путь к изображению

        await addDoc(collection(db, 'news'), newsData); // добавляем в коллекцию seal
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
        conditionsData.photo = data.filePaths[0]; // Получаем путь к изображению

        await addDoc(collection(db, 'conditions'), conditionsData); // добавляем в коллекцию seal
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

      await addDoc(collection(db, 'filtersNews'), conditionsData); // добавляем в коллекцию seal
      alert('Фильтр для новостей успешно добавлено!');
    },

    async addFilterSets() {
      const conditionsData = {
        title: this.name,
      };

      await addDoc(collection(db, 'filtersSets'), conditionsData); // добавляем в коллекцию seal
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

    withdrawalBasket: function () {
      const basketQuery = query(collection(db, "basket"));

      onSnapshot(basketQuery, (snapshot) => {
        this.basket = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            cartsId: doc.data().cartsId,
            userId: doc.data().userId,
          }
        })
        // console.log(this.users);
        // const currentUser = this.basket.filter(basket => basket.userId === this.users.uid);
        // console.log(currentUser);
        // if (currentUser) {
        //   this.currentCartId = currentUser.cartsId;
        //   this.deleteUser(this.currentCartId);
        //
        // } else {
        //   console.error("Корзина для пользователя не найдена.");
        // }
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

        await fetch("http://localhost:3000/delete-user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({uid: userUid})
        });

      } catch (err) {
        console.error("Ошибка при удалении:", err);
      }
    }
  },
  mounted() {
    this.withdrawalUsers();
    this.withdrawalBasket();
  }
}
</script>

<style src="@/assets/style/Moderator.css" scoped>

</style>