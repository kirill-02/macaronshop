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
            <li>
              <router-link class="router-link" to="/delivery">Оптовые поставки</router-link>
            </li>
            <!--            <li>-->
            <!--              <router-link class="router-link" to="/auth">Вход</router-link>-->
            <!--            </li>-->
            <!--            <li>-->
            <!--              <router-link class="router-link" to="/register">Регистрация</router-link>-->
            <!--            </li>-->
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
            <li>
              <router-link class="router-link" to="/basket">
                <span><i class="ic_basket"></i></span>
                <span>{{ basket.length }}</span>
                <!--                 (4 товара)-->
                <span> {{ basket.length > 0 ? `В корзине (${basket.length} товара)` : 'Закрыть' }}</span>
              </router-link>

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
              Санкт-Петербург
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
            <hr>
            <li>СЛАДКИЕ ДНИ <span class="percent"><i class="ic_percent"></i></span></li>
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

              </ul>
            </li>
            <hr>

            <li class="menu-ul_burger">
              8 812 309-82-88
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
export default {
  data() {
    return {
      isDropdownOpen: {
        kit: false,
        companies: false,
        catalog: false,
        city: false,
      },
      isMenuOpen: false,
      basket: [
        {
          id: 1,
          title: "Kirill",
          price: 100,
        },
        {
          id: 2,
          title: "Kirill",
          price: 100,
        },
        {
          id: 3,
          title: "Kirill",
          price: 100,
        },
        {
          id: 3,
          title: "Kirill",
          price: 100,
        },
      ]
    };
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
    }
  }
}
</script>

<style src="@/assets/style/TheNavbar.css">


</style>