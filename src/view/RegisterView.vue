<template>
  <div class="auth">
    <div class="container">
      <div class="auth__wrapper">
        <div class="auth__wrapper_img_register"><img src="../../public/img/auth/label.png" alt=""></div>
        <form @submit.prevent="register" class="auth__wrapper__form register">
          <div class="auth__wrapper__form_title">Получите доступ к оптовым ценам
            <span>Пройдите регистрацию</span></div>

          <div class="auth__wrapper__form_register">
            <div class="auth__wrapper__form_email">
              <label for="name">Ваше имя</label>
              <input type="text" id="name" v-model="name" placeholder="Ваше имя" required>
            </div>
            <div class="auth__wrapper__form_email">
              <label for="city">Город</label>
              <input type="text" id="city" v-model="city" placeholder="Город" required>
            </div>
            <div class="auth__wrapper__form_email">
              <label for="phone">Ваш телефон</label>
              <input type="text" id="phone" v-model="phone" placeholder="+7 (___) ___-__-__" required>
            </div>
            <div class="auth__wrapper__form_email">
              <label for="company">Компания</label>
              <input type="text" id="company" v-model="company" placeholder="Компания" required>
            </div>
            <div class="auth__wrapper__form_email">
              <label for="email">E-mail</label>
              <input type="email" id="email" v-model="email" placeholder="E-mail" required>
            </div>
            <div>
              <label for="password">Придумайте пароль</label>
              <input type="password" id="password" v-model="password" placeholder="Придумайте пароль" required>
            </div>
          </div>
          <button type="submit" class="auth__wrapper__form_btn">Отправить заявку на регистрацию</button>

          <div class="auth__wrapper_login">Уже зарегистрированы?
            <router-link to="/auth"><span>Войти</span></router-link>
          </div>
          <div class="auth__wrapper_rules">Нажимая на кнопку "Отправить заявку на регистрацию" я принимаю и соглашаюсь с
            <a href="../../public/contracts/offer-agreement.docx" download="Договором оферты">Договором оферты </a>
            и разрешаю обработку моих персональных данных в соответствии с
            <a href="../../public/contracts/privacy-policy.docx" download="Политикой конфиденциальности">Политикой
              конфиденциальности</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
// import {getAuth} from 'firebase/auth';
import {useRouter} from "vue-router";
// import {db} from "../firebase.js"
import {useStateStore} from '../store/stateStore'
import {
  // onSnapshot,
  // collection,
  // doc,
  // deleteDoc,
  // setDoc,
  // addDoc,
  // orderBy,
  // query
} from 'firebase/firestore';


export default {
  setup() {
    const stateStore = useStateStore();
    const name = ref('');
    const city = ref('');
    const phone = ref('');
    const company = ref('');
    const email = ref('');
    const password = ref('');


    const router = useRouter();
    const register = async () => {
      try {
        stateStore.setEmail(email.value);
        stateStore.setPassword(password.value);
        stateStore.setName(name.value);
        stateStore.setCity(city.value);
        stateStore.setPhone(phone.value);
        stateStore.setCompany(company.value);
        await stateStore.registerUser();
        router.push('/cabinet');
      } catch (error) {
        console.error('Ошибка при регистрации:', error);
        alert(error.message);
      }
    };
    return {
      name,
      city,
      phone,
      company,
      email,
      password,
      register,
    };
  },
}
</script>

<style scoped>
</style>