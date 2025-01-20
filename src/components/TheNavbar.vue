<template>
  <div class="the-navbar">
    <div class="information__menu">
      <div class="container">
        <ul>
          <div class="information__menu-guarantee">
            <li>
              <router-link class="router-link" to="quality-assurance">
                Гарантия свежести
              </router-link>
            </li>
            <li>
              <router-link class="router-link" to="/delivery">Доставка и оплата</router-link>
            </li>
            <li>Оптовые поставки</li>
            <!--            <li>-->
            <!--              <router-link class="router-link" to="/auth">Вход</router-link>-->
            <!--            </li>-->
            <!--            <li>-->
            <!--              <router-link class="router-link" to="/register">Регистрация</router-link>-->
            <!--            </li>-->
          </div>

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
              <router-link class="router-link" to="/basket"><span><i class="ic_basket"></i></span>
                <!--                 (4 товара)-->
                {{ basket.length > 0 ? `В корзине (${basket.length} товара)` : 'Закрыть' }}
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

        <nav class="menu">

          <ul class="menu-ul">
            <li>СЛАДКИЕ ДНИ <span class="percent"><i class="ic_percent"></i></span></li>

            <li @click="toggleDropdown('kit')">
              подарочные наборы
              <span><i class="ic_VectorButton"></i></span>
              <ul v-if="isDropdownOpen.kit" class="dropdown-menu">
                <li class="dropdown-menu_group">
                  <a href="#">Пирожные макарон</a>
                </li>
                <li class="dropdown-menu_group">
                  <a href="#">Эклеры</a>
                </li>
                <li class="dropdown-menu_group">
                  <a href="#">Вафельные трубочки</a>
                </li>
                <li class="dropdown-menu_group">
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

            <li @click="toggleDropdown('companies')">
              КОМПАНИЯМ
              <span><i class="ic_VectorButton"></i></span>
              <ul v-if="isDropdownOpen.companies" class="dropdown-menu">
                <li class="dropdown-menu_group">
                  <a href="#">Свадебные предложения </a>
                </li>
<!--                <li class="dropdown-menu_group">-->
<!--                  <a href="#">Наборы с печатью</a>-->
<!--                </li>-->
<!--                <li class="dropdown-menu_group">-->
<!--                  <a href="#">Гарантии вкуса и свежести</a>-->
<!--                </li>-->
<!--                <li class="dropdown-menu_group">-->
<!--                  <a href="#">Доставка и оплата</a>-->
<!--                </li>-->
<!--                <li class="dropdown-menu_group">-->
<!--                  <a href="#">Контакты</a>-->
<!--                </li>-->
              </ul>
            </li>

            <li @click="toggleDropdown('catalog')">
              ВЕСЬ КАТАЛОГ
              <span><i class="ic_VectorButton"></i></span>
              <ul class="dropdown-menu" v-if="isDropdownOpen.catalog">

                <router-link to="/dessert-catalog">
                  <li class="dropdown-menu_group">
                    <a href="#">Каталог десертов</a>
                  </li>
                </router-link>

                <router-link to="/quality-assurance">
                  <li class="dropdown-menu_group">
                    <a href="#">Гарантия свежесит</a>
                  </li>
                </router-link>
                <router-link to="/delivery">
                  <li class="dropdown-menu_group">
                    <a href="">
                      Доставка и оплата
                    </a>
                  </li>
                </router-link>
                <li class="dropdown-menu_group">
                  <a href="#">Оптовые поставки</a>
                </li>
                <router-link to="/contacts">
                  <li class="dropdown-menu_group">
                    <a href="#">Контакты</a>
                  </li>
                </router-link>

              </ul>
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
      this.isDropdownOpen[menu] = !this.isDropdownOpen[menu];
      if (this.isDropdownOpen[menu]) {
        Object.keys(this.isDropdownOpen).forEach(key => {
          if (key !== menu) {
            this.isDropdownOpen[key] = false;
          }
        });
      }
    }
  }
}
</script>

<style src="@/assets/style/TheNavbar.css">


</style>