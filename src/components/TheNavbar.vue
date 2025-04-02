<template>
  <div class="the-navbar">
    <div class="information__menu">
      <div class="container">


        <ul>
          <div class="burger" @click="toggleMenu">
            <span class="line" :class="{ active: isMenuOpen }"></span>
            <span class="line" :class="{ active: isMenuOpen }"></span>
            <span class="line" :class="{ active: isMenuOpen }"></span>
          </div>
          <div class="information__menu-guarantee">
            <li>
              <router-link class="router-link" to="quality-assurance">
                Гарантия свежести
              </router-link>
            </li>
            <li>
              <router-link class="router-link" to="/delivery">Доставка и оплата</router-link>
            </li>


            <li v-if="dataUser">
              <router-link
                  v-if="dataUser.role === 'модератор'"
                  class="router-link"
                  to="/moderator">
                Панель модератора
              </router-link>
            </li>
            <li v-if="isLoggedIn">
              <router-link class="router-link" to="/cabinet">Кабинет</router-link>
            </li>
            <li v-else>
              <router-link class="router-link" to="/auth">Вход</router-link>
            </li>
          </div>

          <router-link to="/">
            <div class="information__menu__logo">
              <i class="ic_cap"></i>
              <i class="ic_LogoName"></i>

              <div class="information__menu__logo_arrow ">
                <i class="ic_VectorRight"></i>
                <i class="ic_VectorLeft"></i>
              </div>
            </div>
          </router-link>

          <div class="information__menu-contact">
            <li @click="toggleDropdown('city')">
              <span><i class="ic_location"></i></span>Санкт-Петербург
              <span><i class="ic_VectorButton"></i></span>
              <ul class="dropdown-menu" v-if="isDropdownOpen.city">
                <li class="dropdown-menu_group">
                  <a href="#">Москва</a>
                </li>
                <li class="dropdown-menu_group">
                  <a href="#">Ижеввск</a>
                </li>
                <li class="dropdown-menu_group">
                  <a href="#">Питер</a>
                </li>
                <li class="dropdown-menu_group">
                  <a href="#">Омск</a>
                </li>
              </ul>
            </li>


            <li><span><i class="ic_phone2"></i></span>8 812 309-82-88</li>
            <li v-if="isLoggedIn">
              <router-link class="router-link" to="/basket">
                <span><i class="ic_basket"></i></span>
                <span>{{ carts.length }}</span>
                <!--                 (4 товара)-->
                <span> {{ carts.length > 0 ? `В корзине (${carts.length} товара)` : 'корзина пуста' }}</span>
              </router-link>
            </li>
            <li v-else>

            </li>
          </div>

          <div class="information__menu-social">
            <li><span><i class="ic_telegram"></i></span></li>
            <li><span><i class="ic_vk"></i></span></li>
          </div>
        </ul>
      </div>
    </div>
    <header class="header">
      <div class="container">

        <nav class="menu" :class="{ open: isMenuOpen }">

          <ul class="menu-ul">
            <li @click="toggleDropdown('city'); closeMenu" class="menu-ul_burger">
              <span><i class="ic_location"></i></span>
              <span><strong> Санкт-Петербург</strong></span>
              <span><i class="ic_VectorButton"></i></span>

              <ul v-if="isDropdownOpen.city" class="dropdown-menu">
                <hr>
                <li class="dropdown-menu_group" @click="closeMenu">
                  <a href="#">Челны</a>
                </li>
                <li class="dropdown-menu_group" @click="closeMenu">
                  <a href="#">Питер</a>
                </li>
                <li class="dropdown-menu_group" @click="closeMenu">
                  <a href="#">Москва</a>
                </li>
                <li class="dropdown-menu_group" @click="closeMenu">
                  <a href="#">Ижевск</a>
                </li>
              </ul>
            </li>
            <hr v-if="isLoggedIn">
            <li v-if="isLoggedIn">
              <router-link @click=" closeMenu" class="menu-ul_burger" to="/cabinet">Кабинет</router-link>
            </li>
            <hr v-if="!isLoggedIn">
            <li v-if="!isLoggedIn">
              <router-link @click=" closeMenu" class="menu-ul_burger" to="/auth">Вход</router-link>
            </li>
            <hr>
            <router-link to="/ready-sets" @click="closeMenu">
              <li>
                Готовые наборы
                <!--              <span class="percent"><i class="ic_percent"></i></span>-->
              </li>
            </router-link>
            <hr>
            <li @click="toggleDropdown('kit'); closeMenu">
              подарочные наборы
              <span><i class="ic_VectorButton"></i></span>
              <ul v-if="isDropdownOpen.kit" class="dropdown-menu">
                <hr>
                <li class="dropdown-menu_group" @click="closeMenu">
                  <a href="#">Пирожные макарон</a>
                </li>
                <li class="dropdown-menu_group" @click="closeMenu">
                  <a href="#">Эклеры</a>
                </li>
                <li class="dropdown-menu_group" @click="closeMenu">
                  <a href="#">Вафельные трубочки</a>
                </li>
                <li class="dropdown-menu_group" @click="closeMenu">
                  <a href="#">Профитроли</a>
                </li>
              </ul>
            </li>

            <!--            <li>Собрать набор</li>-->
            <router-link to="/">
              <div class="menu__logo">
                <i class="ic_cap"></i>
                <i class="ic_LogoName"></i>

                <div class="menu__logo_arrow ">
                  <i class="ic_VectorRight"></i>
                  <i class="ic_VectorLeft"></i>
                </div>
              </div>
            </router-link>
            <!--            <li>Создать дизайн</li>-->
            <hr>
            <li @click="toggleDropdown('companies'); closeMenu">
              КОМПАНИЯМ
              <span><i class="ic_VectorButton"></i></span>
              <ul v-if="isDropdownOpen.companies" class="dropdown-menu">
                <hr>
                <router-link to="/wedding">
                  <li class="dropdown-menu_group" @click="closeMenu">
                    <a href="#">Свадебные предложения </a>
                  </li>
                </router-link>
              </ul>
            </li>
            <hr>
            <li @click="toggleDropdown('catalog'); closeMenu">
              ВЕСЬ КАТАЛОГ
              <span><i class="ic_VectorButton"></i></span>
              <ul class="dropdown-menu" v-if="isDropdownOpen.catalog">
                <hr>

                <router-link to="/dessert-catalog">
                  <li class="dropdown-menu_group" @click="closeMenu">
                    <a href="#">Каталог десертов</a>
                  </li>
                </router-link>

                <router-link to="/quality-assurance">
                  <li class="dropdown-menu_group" @click="closeMenu">
                    <a href="#">Гарантия свежесит</a>
                  </li>
                </router-link>
                <router-link to="/delivery">
                  <li class="dropdown-menu_group" @click="closeMenu">
                    <a href="">
                      Доставка и оплата
                    </a>
                  </li>
                </router-link>
                <router-link to="/wholesale-supplies">
                  <li class="dropdown-menu_group" @click="closeMenu">
                    <a href="#">Оптовые поставки</a>
                  </li>
                </router-link>
                <router-link to="/contacts">
                  <li class="dropdown-menu_group" @click="closeMenu">
                    <a href="#">Контакты</a>
                  </li>
                </router-link>
                <router-link to="/news">
                  <li class="dropdown-menu_group" @click="closeMenu">
                    <a href="#">Новости</a>
                  </li>
                </router-link>
              </ul>
            </li>
            <hr v-if="isLoggedIn">
            <li v-if="isLoggedIn" @click="closeMenu">
              <span @click="signOut" class="menu-ul_burger">Выход</span>
            </li>
            <hr>
            <li class="menu-ul_burger">
              <span><strong>8 812 309-82-88</strong></span>
              <!--              <span><i class="ic_VectorButton"></i></span>-->
            </li>
            <li class="menu-ul_burger">
              <span><i class="ic_telegram"></i></span>
              <span><i class="ic_vk"></i></span>

            </li>
          </ul>

        </nav>

      </div>
    </header>
  </div>
</template>

<script>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import {collection, doc, onSnapshot, query} from "firebase/firestore";
import {db} from "@/firebase";

const auth = getAuth();
export default {
  data() {
    return {
      basket: ref([]),
      carts: ref([]),
      user: ref([]),
      isDropdownOpen: {
        kit: false,
        companies: false,
        catalog: false,
        city: false,
      },
      isMenuOpen: false,
    };
  },
  computed: {
    dataUser() {
      return this.user.find(user => user.uid === auth.lastNotifiedUid);
    },
  },
  methods: {
    toggleDropdown(menu) {
      // Закрыть все списки, кроме выбранного
      Object.keys(this.isDropdownOpen).forEach(key => {
        this.isDropdownOpen[key] = (key === menu) ? !this.isDropdownOpen[key] : false;
      });
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Переключаем состояние меню
    },
    closeMenu() {
      this.isMenuOpen = false; // Закрываем бургер-меню
      // Закрываем все выпадающие списки
      Object.keys(this.isDropdownOpen).forEach(key => {
        this.isDropdownOpen[key] = false;
      });
    },


    withdrawalBasket: function () {
      const basketQuery = query(collection(db, "basket"));
      onSnapshot(basketQuery, (snapshot) => {
        this.basket = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            cartsId: doc.data().cartsId,
            userId: doc.data().userId,
          }
        });
        const currentUser = this.basket.find(basket => basket.userId === auth.lastNotifiedUid);
        if (currentUser) {
          this.currentCartId = currentUser.cartsId;
          this.withdrawalCarts(this.currentCartId);
        } else {
          console.error("Корзина для пользователя не найдена.");
        }
      });
    },

    withdrawalUser: function () {
      const userQuery = query(collection(db, "users"));
      onSnapshot(userQuery, (snapshot) => {
        this.user = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            city: doc.data().city,
            company: doc.data().company,
            name: doc.data().name,
            phone: doc.data().phone,
            role: doc.data().role,
            uid: doc.data().uid,
          }
        });
      });
    },

    withdrawalCarts: function (cartId) {
      if (!cartId) {
        console.error("CartId возможно не найден");
        return;
      }
      const cartsDocRef = doc(db, "basket", "carts");
      const cartsCollectionRef = collection(cartsDocRef, cartId);
      const cartsQuery = query(cartsCollectionRef);
      onSnapshot(cartsQuery, (snapshot) => {
        this.carts = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            product_id: doc.data().product_id,
            quantity: doc.data().quantity,
          }
        });
      });
    },
  },
  setup() {
    const router = useRouter();
    const isLoggedIn = ref(true);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        isLoggedIn.value = true;
      } else {
        isLoggedIn.value = false;
      }
    });
    const signOutUser = async () => {
      await signOut(auth);
      router.push('/');
    }

    return {
      signOut: signOutUser,
      isLoggedIn
    };
  },
  mounted() {
    this.withdrawalBasket();
    this.withdrawalCarts();
    this.withdrawalUser();
  },
}
</script>

<style src="@/assets/style/TheNavbar.css">


</style>