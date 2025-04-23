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

          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('withdrawalNews')"
              :class="{'page_active': page === 'withdrawalNews'}"
          >
            Вывод новостей
          </div>

          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('withdrawalPromotion')"
              :class="{'page_active': page === 'withdrawalPromotion'}"
          >
            Вывод акций
          </div>

          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('withdrawalCompleted')"
              :class="{'page_active': page === 'withdrawalCompleted'}"
          >
            Вывод выполненных заказов с печатью
          </div>

          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('withdrawalConditions')"
              :class="{'page_active': page === 'withdrawalConditions'}"
          >
            Вывод условий
          </div>

          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('withdrawalFilterProduct')"
              :class="{'page_active': page === 'withdrawalFilterProduct'}"
          >
            Вывод фильтров для продуктов
          </div>

          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('withdrawalFilterNews')"
              :class="{'page_active': page === 'withdrawalFilterNews'}"
          >
            Вывод фильтров для новостей
          </div>

          <div
              class="cabinet__wrapper__menu_button"
              @click="movingPage('withdrawalОrderHistory')"
              :class="{'page_active': page === 'withdrawalОrderHistory'}"
          >
            Вывод всех заказов пользователей
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
          <div class="formSearch">
            <input class="search" type="text" v-model="searchUserId" placeholder="Введите ID пользователя"/>
            <button class="searchButton" @click="searchUser ">Поиск</button> <!-- Кнопка для поиска -->
            <button class="searchButton" @click="searchsUser ">Отмена</button> <!-- Кнопка для поиска -->
          </div>
          <table>
            <thead>
            <tr>
              <th>UID</th>
              <th>Email</th>
              <th>Телефон</th>
              <th>Компания</th>
              <th>Роль</th>
              <th>Кнопки</th>
            </tr>
            </thead>
            <tbody>

            <tr v-for="user in filteredUsers" :key="user.id">
              <td>{{ user.uid }}</td>
              <td>{{ user.email }}</td>
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
              <th>id</th>
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
            <tbody>
            <tr v-for="product in filteredProducts" :key="product.id">
              <td>
                {{ product.id }}
              </td>
              <td v-if="updateProduct !== product.id">
                {{ product.description }}
              </td>
              <td v-if="updateProduct === product.id">
                <span class="span"> {{
                    (description === "" || description === null) ? product.description : description
                  }}</span>
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
                НАЗВАНИЕ: <span class="span">{{
                  (descriptionTitle === "" || descriptionTitle === null) ? product.description_composition_condition[0].title : descriptionTitle
                }}</span>
                <br><input v-model="descriptionTitle" type="text">
                <br><br>
                ОПИСАНИЕ: <span class="span">{{
                  (descriptionDescription === "" || descriptionDescription === null) ? product.description_composition_condition[0].description : descriptionDescription
                }}</span>
                <br><input v-model="descriptionDescription" type="text">

                <br>
                <hr>
                <span>Состав: </span>
                <br>
                НАЗВАНИЕ: <span class="span">{{
                  (compositionTitle === "" || compositionTitle === null) ? product.description_composition_condition[1].title : compositionTitle
                }}</span>
                <br><input v-model="compositionTitle" type="text">

                <br> <br>
                ОПИСАНИЕ: <span class="span">{{
                  (compositionDescription === "" || compositionDescription === null) ? product.description_composition_condition[0].description : compositionDescription
                }}</span>
                <br><input v-model="compositionDescription" type="text">
                <br>
                <hr>
                <span>Условия и срок: </span>
                <br>

                НАЗВАНИЕ: <span class="span">{{
                  (conditionTitle === "" || conditionTitle === null) ? product.description_composition_condition[2].title : conditionTitle
                }}</span>
                <br><input v-model="conditionTitle" type="text">

                <br> <br>
                ОПИСАНИЕ: <span class="span">{{
                  (conditionDescription === "" || conditionDescription === null) ? product.description_composition_condition[0].description : conditionDescription
                }}</span>
                <br><input v-model="conditionDescription" type="text">

                <hr>
              </td>
              <td v-if="updateProduct !== product.id">
                {{ product.name }}
              </td>
              <td v-if="updateProduct === product.id">
                <span class="span"> {{ (name === "" || name === null) ? product.name : name }}</span>
                <br><input v-model="name" type="text">
              </td>
              <td v-if="updateProduct !== product.id">
                {{ product.price }}р
              </td>
              <td v-if="updateProduct === product.id">
                <span class="span">{{ (price === "" || price === null) ? product.price : price }}</span>
                <br><input v-model="price" type="text">
              </td>
              <td v-if="updateProduct !== product.id">
                {{ product.search }}
              </td>
              <td v-if="updateProduct === product.id">
                <span class="span"> {{ (search === "" || search === null) ? product.search : search }}</span>
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
                <div v-for="(taste, tasteIndex) in newTastes" :key="tasteIndex">
                  <hr>
                  <span>Название: </span> <span class="span"> {{ taste.name }}</span>
                  <input v-model="taste.name" type="text" placeholder="Введите название">
                  <span>Количество: </span> <span class="span"> {{ taste.quantity }}</span>
                  <input v-model="taste.quantity" type="number" placeholder="Введите количество">
                  <hr>
                </div>
              </td>
              <td v-if="updateProduct !== product.id">
                {{ product.title }}
              </td>
              <td v-if="updateProduct === product.id">
                <span class="span"> {{ (kit === "" || kit === null) ? product.title : kit }}</span>
                <select v-model="kit" name="kit" id="kit">
                  <option disabled selected value="">Исправить набор</option>
                  <option value="sets">готовые наборы</option>
                  <option value="combo">комбо - наборы</option>
                  <option value="gift_sets">подарки с печатью</option>
                </select>
              </td>
              <td>
                <button @click="updateProducts(product.id, product.tastes)" v-if="updateProduct !== product.id">
                  Изменить
                </button>
                <button v-if="updateProduct !== product.id" @click="deleteProduct(product.id)">Удалить</button>
                <button v-if="updateProduct === product.id" @click="saveProduct(null, product)">Сохранить</button>
                <button v-if="updateProduct === product.id" @click="cancellationProduct(null)">Отменить</button>
              </td>
            </tr>
            </tbody>

          </table>
        </div>

        <div class="cabinet__wrapper__information " v-if="page === 'withdrawalNews'">
          <div class="cabinet__wrapper__information_title">
            Вывод новостей
          </div>


          <table>
            <thead>
            <tr>
              <th>id</th>
              <th>Описание</th>
              <th>Название</th>
              <th>Поиск</th>
              <th>Дата</th>
              <th>кнопки</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="newsis in news" :key="newsis.id">
              <td>
                {{ newsis.id }}
              </td>
              <td v-if="updateNews !== newsis.id">
                {{ newsis.description }}
              </td>
              <td v-if="updateNews === newsis.id">
                <span class="span"> {{
                    (description === "" || description === null) ? newsis.description : description
                  }}</span>
                <br><input v-model="description" type="text">
              </td>
              <td v-if="updateNews !== newsis.id">
                {{ newsis.name }}
              </td>
              <td v-if="updateNews === newsis.id">
                <span class="span"> {{ (name === "" || name === null) ? newsis.name : name }}</span>
                <br><input v-model="name" type="text">
              </td>
              <td v-if="updateNews !== newsis.id">
                {{ newsis.search }}
              </td>
              <td v-if="updateNews === newsis.id">
                <span class="span"> {{ (search === "" || search === null) ? newsis.search : search }}</span>
                <br><input v-model="search" type="text">
              </td>
              <td v-if="updateNews !== newsis.id">
                {{ newsis.date }}
              </td>
              <td v-if="updateNews === newsis.id">
                <span class="span">{{ (date === "" || date === null) ? newsis.date : date }}</span>
                <br><input v-model="date" type="text">
              </td>
              <td>
                <button @click="updateNewsis(newsis.id)" v-if="updateNews !== newsis.id">
                  Изменить
                </button>
                <button v-if="updateNews !== newsis.id" @click="deleteNews(newsis.id)">Удалить</button>
                <button v-if="updateNews === newsis.id" @click="saveNews(null, newsis)">Сохранить</button>
                <button v-if="updateNews === newsis.id" @click="cancellationNews(null)">Отменить</button>
              </td>
            </tr>
            </tbody>

          </table>
        </div>

        <div class="cabinet__wrapper__information " v-if="page === 'withdrawalPromotion'">
          <div class="cabinet__wrapper__information_title">
            Вывод акций
          </div>


          <table>
            <thead>
            <tr>
              <th>id</th>
              <th>Название</th>
              <th>Цвет</th>
              <th>Тип акции</th>
              <th>Кнопки</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="promotions in promotion" :key="promotions.id">
              <td>
                {{ promotions.id }}
              </td>
              <td v-if="updatePromotion !== promotions.id">
                {{ promotions.name }}
              </td>
              <td v-if="updatePromotion === promotions.id">
                <span class="span"> {{
                    (name === "" || name === null) ? promotions.name : name
                  }}</span>
                <br><input v-model="name" type="text">
              </td>
              <td v-if="updatePromotion !== promotions.id">
                {{ promotions.color }}
              </td>
              <td v-if="updatePromotion === promotions.id">
                <span class="span"> {{ (color === "" || color === null) ? promotions.color : color }}</span>
                <br><input v-model="color" type="text">
              </td>
              <td v-if="updatePromotion !== promotions.id">
                {{ promotions.title }}
              </td>
              <td v-if="updatePromotion === promotions.id">
                <span class="span"> {{ (title === "" || title === null) ? promotions.title : title }}</span>
                <br><input v-model="title" type="text">
              </td>
              <td>
                <button @click="updatePromotions(promotions.id)" v-if="updatePromotion !== promotions.id">
                  Изменить
                </button>
                <button v-if="updatePromotion !== promotions.id" @click="deletePromotion(promotions.id)">Удалить
                </button>
                <button v-if="updatePromotion === promotions.id" @click="savePromotion(null, promotions)">Сохранить
                </button>
                <button v-if="updatePromotion === promotions.id" @click="cancellationPromotion(null)">Отменить</button>
              </td>
            </tr>
            </tbody>

          </table>
        </div>

        <div class="cabinet__wrapper__information " v-if="page === 'withdrawalCompleted'">
          <div class="cabinet__wrapper__information_title">
            Вывод выполненных заказов с печатью
          </div>


          <table>
            <thead>
            <tr>
              <th>id</th>
              <th>Название</th>
              <th>Кнопки</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="completeds in completed" :key="completeds.id">
              <td>
                {{ completeds.id }}
              </td>
              <td v-if="updateCompleted !== completeds.id">
                {{ completeds.name }}
              </td>
              <td v-if="updateCompleted === completeds.id">
                <span class="span"> {{
                    (name === "" || name === null) ? completeds.name : name
                  }}</span>
                <br><input v-model="name" type="text">
              </td>
              <td>
                <button @click="updateCompleteds(completeds.id)" v-if="updateCompleted !== completeds.id">
                  Изменить
                </button>
                <button v-if="updateCompleted !== completeds.id" @click="deleteCompleted(completeds.id)">Удалить
                </button>
                <button v-if="updateCompleted === completeds.id" @click="saveCompleted(null, completeds)">Сохранить
                </button>
                <button v-if="updateCompleted === completeds.id" @click="cancellationCompleted(null)">Отменить</button>
              </td>
            </tr>
            </tbody>

          </table>
        </div>


        <div class="cabinet__wrapper__information " v-if="page === 'withdrawalConditions'">
          <div class="cabinet__wrapper__information_title">
            Вывод условий
          </div>


          <table>
            <thead>
            <tr>
              <th>id</th>
              <th>Название</th>
              <th>Описание</th>
              <th>Кнопки</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="condition in conditions" :key="condition.id">
              <td>
                {{ condition.id }}
              </td>
              <td v-if="updateConditions !== condition.id">
                {{ condition.name }}
              </td>
              <td v-if="updateConditions === condition.id">
                <span class="span"> {{
                    (name === "" || name === null) ? condition.name : name
                  }}</span>
                <br><input v-model="name" type="text">
              </td>
              <td v-if="updateConditions !== condition.id">
                {{ condition.description }}
              </td>
              <td v-if="updateConditions === condition.id">
                <span class="span"> {{
                    (description === "" || description === null) ? condition.description : description
                  }}</span>
                <br><input v-model="description" type="text">
              </td>
              <td>
                <button @click="updateCondition(condition.id)" v-if="updateConditions !== condition.id">
                  Изменить
                </button>
                <button v-if="updateConditions !== condition.id" @click="deleteCondition(condition.id)">Удалить
                </button>
                <button v-if="updateConditions === condition.id" @click="saveCondition(null, condition)">Сохранить
                </button>
                <button v-if="updateConditions === condition.id" @click="cancellationCondition(null)">Отменить</button>
              </td>
            </tr>
            </tbody>

          </table>
        </div>


        <div class="cabinet__wrapper__information " v-if="page === 'withdrawalFilterProduct'">
          <div class="cabinet__wrapper__information_title">
            Вывод фильтров для продуктов
          </div>


          <table>
            <thead>
            <tr>
              <th>id</th>
              <th>Название</th>
              <th>Кнопки</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="filterProducts in filterProduct" :key="filterProducts.id">
              <td>
                {{ filterProducts.id }}
              </td>
              <td v-if="updateFiltersProduct !== filterProducts.id">
                {{ filterProducts.title }}
              </td>
              <td v-if="updateFiltersProduct === filterProducts.id">
                <span class="span"> {{
                    (title === "" || title === null) ? filterProducts.title : title
                  }}</span>
                <br><input v-model="title" type="text">
              </td>
              <td>
                <button @click="updateFilterProduct(filterProducts.id)"
                        v-if="updateFiltersProduct !== filterProducts.id">
                  Изменить
                </button>
                <button v-if="updateFiltersProduct !== filterProducts.id"
                        @click="deleteFilterProduct(filterProducts.id)">Удалить
                </button>
                <button v-if="updateFiltersProduct === filterProducts.id"
                        @click="saveFilterProduct(null, filterProducts)">Сохранить
                </button>
                <button v-if="updateFiltersProduct === filterProducts.id" @click="cancellationFilterProduct(null)">
                  Отменить
                </button>
              </td>
            </tr>
            </tbody>

          </table>
        </div>

        <div class="cabinet__wrapper__information " v-if="page === 'withdrawalFilterNews'">
          <div class="cabinet__wrapper__information_title">
            Вывод фильтров для новостей
          </div>


          <table>
            <thead>
            <tr>
              <th>id</th>
              <th>Название</th>
              <th>Кнопки</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="filterNewsis in filterNews" :key="filterNewsis.id">
              <td>
                {{ filterNewsis.id }}
              </td>
              <td v-if="updateFiltersNews !== filterNewsis.id">
                {{ filterNewsis.title }}
              </td>
              <td v-if="updateFiltersNews === filterNewsis.id">
                <span class="span"> {{
                    (title === "" || title === null) ? filterNewsis.title : title
                  }}</span>
                <br><input v-model="title" type="text">
              </td>
              <td>
                <button @click="updateFilterNews(filterNewsis.id)"
                        v-if="updateFiltersNews !== filterNewsis.id">
                  Изменить
                </button>
                <button v-if="updateFiltersNews !== filterNewsis.id"
                        @click="deleteFilterNews(filterNewsis.id)">Удалить
                </button>
                <button v-if="updateFiltersNews === filterNewsis.id"
                        @click="saveFilterNews(null, filterNewsis)">Сохранить
                </button>
                <button v-if="updateFiltersNews === filterNewsis.id" @click="cancellationFilterNews(null)">
                  Отменить
                </button>
              </td>
            </tr>
            </tbody>

          </table>
        </div>

        <div class="cabinet__wrapper__information " v-if="page === 'withdrawalОrderHistory'">
          <div class="cabinet__wrapper__information_title">
            Вывод всех заказов пользователей
          </div>
          <div>
            <button class="cabinet__wrapper__menu_button product"
                    :class="{'page_active': tableOrderHistory === 'accepted'}"
                    @click="tableHistory('accepted')">Статус "Принят"
            </button>
            <button class="cabinet__wrapper__menu_button product"
                    :class="{'page_active': tableOrderHistory === 'processed'}"
                    @click="tableHistory('processed')">Статус "Обрабатывается"
            </button>
            <button class="cabinet__wrapper__menu_button product"
                    :class="{'page_active': tableOrderHistory === 'ready'}"
                    @click="tableHistory('ready')">Статус "Готов"
            </button>
          </div>

          <table>
            <thead>
            <tr>
              <th>id</th>
              <th>Адрес</th>
              <th>Комментарий</th>
              <th>Дата доставки</th>
              <th>Время доставки</th>
              <th>Способ доставки</th>
              <th>Почта</th>
              <th>Дата заказа</th>
              <th>Способ оплаты</th>
              <th>Цена</th>
              <th>Id пользователя</th>
              <th>Продукты</th>
              <th>Статус</th>
              <th>кнопки</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="orderHistorys in filteredProductsSets" :key="orderHistorys.id">
              <td>
                {{ orderHistorys.id }}
              </td>
              <td>
                {{ orderHistorys.address }}
              </td>
              <td>
                {{ orderHistorys.comment }}
              </td>
              <td>
                {{ orderHistorys.date }}
              </td>
              <td>
                {{ orderHistorys.time }}
              </td>
              <td>
                {{ orderHistorys.delivery }}
              </td>
              <td>
                {{ orderHistorys.email }}
              </td>
              <td>
                {{ orderHistorys.orderDate }}
              </td>
              <td>
                {{ orderHistorys.payment }}
              </td>
              <td>
                {{ orderHistorys.price }}
              </td>
              <td>
                {{ orderHistorys.userId }}
              </td>

              <td><br>
                <div v-for="(product, index) in orderHistorys.product" :key="product.id">
                  <span>ID ТОВАРА: </span>
                  <router-link
                      :to="`/product/${orderHistorys.product[index].id}`">
                    {{ orderHistorys.product[index].id }}
                  </router-link>
                  <br>
                  <span>КОЛИЧЕСТВО:</span> {{ orderHistorys.product[index].quantity }}
                  <br><br>
                </div>
              </td>
              <td v-if="updateOrderHistory !== orderHistorys.id">
                {{ orderHistorys.state }}
              </td>
              <td v-if="updateOrderHistory === orderHistorys.id">
                <span class="span">{{ (state === "" || state === null) ? orderHistorys.state : state }}</span>
                <!--                <br><input v-model="state" type="text">-->
                <select v-model="state" name="kit" id="kit">
                  <option disabled selected value="">Выберите статус</option>
                  <option value="принят">Принят</option>
                  <option value="обрабатывается">Обрабатывается</option>
                  <option value="готов">Готов</option>
                </select>
              </td>
              <td>
                <button @click="updateOrderHistorys(orderHistorys.id)" v-if="updateOrderHistory !== orderHistorys.id">
                  Изменить
                </button>
                <button v-if="updateOrderHistory === orderHistorys.id" @click="saveOrderHistory(null, orderHistorys)">
                  Сохранить
                </button>
                <button v-if="updateOrderHistory === orderHistorys.id" @click="cancellationOrderHistory(null)">
                  Отменить
                </button>
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
      searchUserId: ref(''),
      filteredUsers: ref([]),
      orderHistory: ref([]),
      filterProduct: ref([]),
      filterNews: ref([]),
      completed: ref([]),
      tableOrderHistory: 'accepted',
      tableProduct: 'sets',
      updateOrderHistory: null,
      updateFiltersProduct: null,
      updateFiltersNews: null,
      updateConditions: null,
      updateCompleted: null,
      updatePromotion: null,
      updateNews: null,
      updateProduct: null,
      update: null,
      state: ref(''),
      conditions: ref([]),
      newTastes: ref([]),
      promotion: ref([]),
      news: ref([]),
      products: ref([]),
      users: ref([]),
      basket: ref([]),
      page: 'withdrawalОrderHistory',
      role: null,
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
      mainImage: null, originalProduct: null, // Для хранения исходных данных
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
    filteredProducts() {
      let filterProduct = '';
      if (this.tableProduct === 'sets') {
        filterProduct = this.products.filter(product => product.title === 'sets');
      } else if (this.tableProduct === 'combo') {
        filterProduct = this.products.filter(product => product.title === 'combo');
      } else {
        filterProduct = this.products.filter(product => product.title === 'gift_sets');
      }

      return filterProduct
    },
    filteredProductsSets() {
      let filterProduct = '';
      if (this.tableOrderHistory === 'accepted') {
        filterProduct = this.orderHistory.filter(orderHistory => orderHistory.state === 'принят');
      } else if (this.tableOrderHistory === 'processed') {
        filterProduct = this.orderHistory.filter(orderHistory => orderHistory.state === 'обрабатывается');
      } else {
        filterProduct = this.orderHistory.filter(orderHistory => orderHistory.state === 'готов');
      }

      return filterProduct
    },
  },
  methods: {
    reset: function () {
      // this.filteredUsers = ref([]);
      this.searchUserId = ref('');
      this.state = ref('');
      this.updateOrderHistory = null;
      this.updateFiltersProduct = null;
      this.updateFiltersNews = null;
      this.updateConditions = null;
      this.updateCompleted = null;
      this.updatePromotion = null;
      this.updateNews = null;
      this.updateProduct = null;
      this.update = null;
      this.newTastes = ref([]);
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
    movingPage(e) {
      this.page = e;
      this.reset()
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
    searchUser() {


      if (this.searchUserId) {
        this.filteredUsers =
            this.users.filter(user => user.uid.includes(this.searchUserId) ||
                user.phone.includes(this.searchUserId) ||
                user.email.includes(this.searchUserId) &&
                user.role !== 'модератор');
      } else {
        this.filteredUsers = this.users.filter(user => user.role !== 'модератор'); // Показываем всех, если поле пустое
      }
    },
    searchsUser() {
      this.searchUserId = ref('');
      this.filteredUsers = this.users.filter(user => user.role !== 'модератор');
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

        await addDoc(collection(db, 'product'), productData);
        alert('Продукт успешно добавлен!');
        this.reset()
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
        this.reset()
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
        this.reset()
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
        this.reset()
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
        this.reset()
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
      this.reset()
    },

    async addFilterSets() {
      const conditionsData = {
        title: this.name,
      };

      await addDoc(collection(db, 'filtersSets'), conditionsData);
      alert('Фильтр для продуктов успешно добавлено!');
      this.reset()
    },


    withdrawalUsers: function () {
      const basketQuery = query(collection(db, "users"));

      onSnapshot(basketQuery, (snapshot) => {
        this.users = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            email: doc.data().email,
            uid: doc.data().uid,
            phone: doc.data().phone,
            name: doc.data().name,
            company: doc.data().company,
            city: doc.data().city,
            role: doc.data().role,
          }
        })
        this.filteredUsers = this.users.filter(users => users.role !== 'модератор');

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
      this.reset()
    },

    async saveUser(update, user) {
      setDoc(doc(db, 'users', user.id), {
        uid: user.uid,
        phone: user.phone,
        name: user.name,
        company: user.company,
        city: user.city,
        role: this.role,
      });

      this.update = update
      this.reset()
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
      })
    },

    tableKit(e) {
      this.tableProduct = e
      this.reset()
    },
    tableHistory(e) {
      this.tableOrderHistory = e
      this.reset()
    },

    async deleteProduct(productId) {
      await deleteDoc(doc(db, 'product', productId));
    },
    async updateProducts(productId, tastes) {
      this.reset()

      const product = this.products.find(p => p.id === productId);
      this.originalProduct = JSON.parse(JSON.stringify(product));
      this.updateProduct = productId;
      if (Array.isArray(tastes)) {
        tastes.forEach(taste => {
          const exists = this.newTastes.some(t => t.name === taste.name);
          if (!exists) {
            this.newTastes.push({
              name: taste.name,
              quantity: taste.quantity || 0
            });
          }
        });
      }
    },

    async saveProduct(update, product) {

      setDoc(doc(db, 'product', product.id), {
        description: this.description || product.description,
        name: this.name || product.name,
        price: this.price || product.price,
        search: this.search || product.search,
        title: this.kit || product.title,
        tastes: this.newTastes,
        description_composition_condition: [
          {
            title: this.descriptionTitle || product.description_composition_condition[0].title,
            description: this.descriptionDescription || product.description_composition_condition[0].description,
          },
          {
            title: this.compositionTitle || product.description_composition_condition[1].title,
            description: this.compositionDescription || product.description_composition_condition[1].description,
          },
          {
            title: this.conditionTitle || product.description_composition_condition[2].title,
            description: this.conditionDescription || product.description_composition_condition[2].description,
          },
        ],
        photo: product.photo,
      });

      this.updateProduct = update;
      this.reset()
    },

    async cancellationProduct() {
      this.updateProduct = null;
      this.reset()
    },

    withdrawalNews: function () {
      const newsQuery = query(collection(db, "news"));

      onSnapshot(newsQuery, (snapshot) => {
        this.news = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            date: doc.data().date,
            photo: doc.data().photo || [],
            search: doc.data().search,
          }
        })
      })
    },


    async updateNewsis(newsId) {
      this.reset()
      this.updateNews = newsId;
    },
    async deleteNews(newsId) {
      await deleteDoc(doc(db, 'news', newsId));
    },
    async saveNews(newsId, news) {
      setDoc(doc(db, 'news', news.id), {
        date: this.date || news.date,
        description: this.description || news.description,
        name: this.name || news.name,
        search: this.search || news.search,
        photo: news.photo,
      });
      this.updateNews = newsId;
      this.reset()
    },
    async cancellationNews(newsId) {
      this.updateNews = newsId;

      this.reset()
    },


    withdrawalPromotion: function () {
      const promotionQuery = query(collection(db, "promotion"));

      onSnapshot(promotionQuery, (snapshot) => {
        this.promotion = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            name: doc.data().name,
            color: doc.data().color,
            title: doc.data().title,
            photo: doc.data().photo || [],
          }
        })
      })
    },

    async updatePromotions(promotionId) {
      this.reset()
      this.updatePromotion = promotionId;
    },
    async deletePromotion(promotionId) {
      await deleteDoc(doc(db, 'promotion', promotionId));
    },
    async savePromotion(promotionId, promotion) {
      setDoc(doc(db, 'promotion', promotion.id), {
        color: this.color || promotion.color,
        title: this.title || promotion.title,
        name: this.name || promotion.name,
        photo: promotion.photo,
      });
      this.updatePromotion = promotionId;
      this.reset()
    },
    async cancellationPromotion(promotionId) {
      this.updatePromotion = promotionId;

      this.reset()
    },


    withdrawalCompleted: function () {
      const completedQuery = query(collection(db, "completed"));

      onSnapshot(completedQuery, (snapshot) => {
        this.completed = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            name: doc.data().name,
            photo: doc.data().photo || [],
          }
        })
      })
    },

    async updateCompleteds(completedId) {
      this.reset()
      this.updateCompleted = completedId;
    },
    async deleteCompleted(completedId) {
      await deleteDoc(doc(db, 'completed', completedId));
    },
    async saveCompleted(completedId, completed) {
      setDoc(doc(db, 'completed', completed.id), {
        name: this.name || completed.name,
        photo: completed.photo,
      });
      this.updateCompleted = completedId;
      this.reset()
    },
    async cancellationCompleted(completedId) {
      this.updateCompleted = completedId;
      this.reset()
    },


    withdrawalConditions: function () {
      const conditionsQuery = query(collection(db, "conditions"));

      onSnapshot(conditionsQuery, (snapshot) => {
        this.conditions = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            photo: doc.data().photo || [],
          }
        })
      })
    },

    async updateCondition(conditionsId) {
      this.reset()
      this.updateConditions = conditionsId;
    },
    async deleteCondition(conditionsId) {
      await deleteDoc(doc(db, 'conditions', conditionsId));
    },
    async saveCondition(conditionsId, conditions) {
      setDoc(doc(db, 'conditions', conditions.id), {
        name: this.name || conditions.name,
        description: this.description || conditions.description,
        photo: conditions.photo,
      });
      this.updateConditions = conditionsId;
      this.reset()
    },
    async cancellationCondition(conditionsId) {
      this.updateConditions = conditionsId;
      this.reset()
    },


    withdrawalFilterProduct: function () {
      const filtersSetsQuery = query(collection(db, "filtersSets"));

      onSnapshot(filtersSetsQuery, (snapshot) => {
        this.filterProduct = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            title: doc.data().title,
          }
        })
      })
    },

    async updateFilterProduct(filterId) {
      this.reset()
      this.updateFiltersProduct = filterId;
    },
    async deleteFilterProduct(filterId) {
      await deleteDoc(doc(db, 'filtersSets', filterId));
    },
    async saveFilterProduct(filterId, filter) {
      setDoc(doc(db, 'filtersSets', filter.id), {
        title: this.title || filter.title,
      });
      this.updateFiltersProduct = filterId;
      this.reset()
    },
    async cancellationFilterProduct(filterId) {
      this.updateFiltersProduct = filterId;
      this.reset()
    },


    withdrawalFilterNews: function () {
      const filtersNewsQuery = query(collection(db, "filtersNews"));

      onSnapshot(filtersNewsQuery, (snapshot) => {
        this.filterNews = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            title: doc.data().title,
          }
        })
      })
    },

    async updateFilterNews(filterId) {
      this.reset()
      this.updateFiltersNews = filterId;
    },
    async deleteFilterNews(filterId) {
      await deleteDoc(doc(db, 'filtersNews', filterId));
    },
    async saveFilterNews(filterId, filter) {
      setDoc(doc(db, 'filtersNews', filter.id), {
        title: this.title || filter.title,
      });
      this.updateFiltersNews = filterId;
      this.reset()
    },
    async cancellationFilterNews(filterId) {
      this.updateFiltersNews = filterId;
      this.reset()
    },


    withdrawalOrderHistory: function () {
      const orderHistoryQuery = query(collection(db, "orderHistory"));

      onSnapshot(orderHistoryQuery, (snapshot) => {
        this.orderHistory = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            address: doc.data().address,
            date: doc.data().date,
            dateTime: doc.data().dateTime,
            delivery: doc.data().delivery,
            email: doc.data().email,
            name: doc.data().name,
            orderDate: doc.data().orderDate,
            payment: doc.data().payment,
            phone: doc.data().phone,
            price: doc.data().price,
            product: doc.data().product || [],
            state: doc.data().state,
            time: doc.data().time,
            userId: doc.data().userId,
            comment: doc.data().comment,
          }
        })
      })
    },

    async updateOrderHistorys(orderHistoryId) {
      this.reset()
      this.updateOrderHistory = orderHistoryId;
    },
    async saveOrderHistory(orderHistoryId, orderHistory) {
      setDoc(doc(db, 'orderHistory', orderHistory.id), {
        id: orderHistory.id,
        address: orderHistory.address,
        date: orderHistory.date,
        dateTime: orderHistory.dateTime,
        delivery: orderHistory.delivery,
        email: orderHistory.email,
        name: orderHistory.name,
        orderDate: orderHistory.orderDate,
        payment: orderHistory.payment,
        phone: orderHistory.phone,
        price: orderHistory.price,
        product: orderHistory.product,
        state: this.state || orderHistory.state,
        time: orderHistory.time,
        userId: orderHistory.userId,
        comment: orderHistory.comment,
      });
      this.updateOrderHistory = orderHistoryId;
      this.reset()
    },
    async cancellationOrderHistory(orderHistoryId) {
      this.updateOrderHistory = orderHistoryId;
      this.reset()
    },
  },
  mounted() {
    this.withdrawalUsers();
    this.withdrawalProduct();
    this.withdrawalNews();
    this.withdrawalPromotion();
    this.withdrawalCompleted();
    this.withdrawalConditions();
    this.withdrawalFilterProduct();
    this.withdrawalFilterNews();
    this.withdrawalOrderHistory();

  }
}
</script>

<style src="@/assets/style/Moderator.css" scoped>

</style>