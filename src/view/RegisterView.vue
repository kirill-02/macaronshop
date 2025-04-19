<template>
  <div class="auth">
    <div class="container">
      <div class="auth__wrapper">
        <div class="auth__wrapper_img_register"><img src="../../public/img/auth/label.png" alt=""></div>
        <form @submit.prevent="register" class="auth__wrapper__form register">
          <div class="auth__wrapper__form_title">Получите доступ к оптовым ценам
            <span>Пройдите регистрацию</span></div>

          <div class="auth__wrapper__form_register">
            <div class="auth__wrapper__form_email" id="errorMessageName">
              <label for="name">Ваше имя</label>
              <input type="text" id="name" v-model="name" placeholder="Ваше имя" :class="{'errorInput': errorMessageName}">
              <div class="errorMessage">
                {{ errorMessageName }}
              </div>
            </div>
            <div class="auth__wrapper__form_email" id="errorMessageCity">
              <label for="city">Город</label>
              <input type="text" id="city" v-model="city" placeholder="Город" :class="{'errorInput': errorMessageCity}">
              <div class="errorMessage">
                {{ errorMessageCity }}
              </div>
            </div>
            <div class="auth__wrapper__form_email" id="errorMessagePhone" >
              <label for="phone">Ваш телефон</label>
              <input type="text" id="phone" v-model="phone"
                     @input="formatPhone"
                     @focus="setInitialPhone"
                     :class="{'errorInput': errorMessagePhone}"
                     placeholder="+7 (___) ___-__-__" >
              <div class="errorMessage">
                {{ errorMessagePhone }}
              </div>
            </div>
            <div class="auth__wrapper__form_email">
              <label for="company">Компания</label>
              <input type="text" id="company" v-model="company" placeholder="Компания">
            </div>
            <div class="auth__wrapper__form_email" id="errorMessageEmail">
              <label for="email">E-mail</label>
              <input type="email" id="email" v-model="email" placeholder="E-mail"
                     :class="{'errorInput': errorMessageEmail}">
              <div class="errorMessage">
                {{ errorMessageEmail }}
              </div>
            </div>
            <div id="errorMessagePassword">
              <label for="password">Придумайте пароль</label>
              <input type="password" id="password" v-model="password" placeholder="Придумайте пароль"
                     :class="{'errorInput': errorMessagePassword}">
              <div class="errorMessage">
                {{ errorMessagePassword }}
              </div>
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
import { ref } from 'vue';
import { useRouter } from "vue-router";
import { useStateStore } from '../store/stateStore';

export default {
  setup() {
    const name = ref('');
    const city = ref('');
    const phone = ref('');
    const company = ref('');
    const email = ref('');
    const password = ref('');
    const errorMessageName = ref(null);
    const errorMessageCity = ref(null);
    const errorMessagePhone = ref(null);
    const errorMessageEmail = ref(null);
    const errorMessagePassword = ref(null);

    const stateStore = useStateStore();
    const router = useRouter();

    const formatPhone = () => {
      let cleaned = phone.value.replace(/\D/g, '');
      if (cleaned.startsWith('9') && cleaned.length === 1) {
        cleaned = '7' + cleaned;
      }
      if (cleaned.length > 11) {
        cleaned = cleaned.substring(0, 11);
      }
      const match = cleaned.match(/^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
      if (match) {
        phone.value = `+7 ${match[2] ? match[2] : ''} ${match[3]} ${match[4]} ${match[5]}`.trim();
      } else {
        phone.value = '';
      }
    };

    const setInitialPhone = () => {
      if (!phone.value) {
        phone.value = '+7 ';
      }
    };

    const validateFields = () => {

      errorMessageName.value = null;
      errorMessageCity.value = null;
      errorMessagePhone.value = null;
      errorMessageEmail.value = null;
      errorMessagePassword.value = null;

      const trimmedName = name.value.trim();
      const trimmedCity = city.value.trim();
      const trimmedPhone = phone.value.trim();
      const trimmedEmail = email.value.trim();
      const trimmedPassword = password.value.trim();

      const errorMessageNameElement = document.getElementById('errorMessageName');
      const errorMessageCityElement = document.getElementById('errorMessageCity');
      const errorMessagePhoneElement = document.getElementById('errorMessagePhone');
      const errorMessageEmailElement = document.getElementById('errorMessageEmail');
      const errorMessagePasswordElement = document.getElementById('errorMessagePassword');

      if (!trimmedName) {
        errorMessageName.value = "Заполните имя";
        errorMessageNameElement.scrollIntoView({ behavior: 'smooth' });
      } else if (!trimmedCity) {
        errorMessageCity.value = "Заполните город";
        errorMessageCityElement.scrollIntoView({ behavior: 'smooth' });
      } else if (!trimmedPhone) {
        errorMessagePhone.value = "Заполните телефон";
        errorMessagePhoneElement.scrollIntoView({ behavior: 'smooth' });
      } else if (!trimmedEmail) {
        errorMessageEmail.value = "Заполните почту";
        errorMessageEmailElement.scrollIntoView({ behavior: 'smooth' });
      } else if (!trimmedPassword) {
        errorMessagePassword.value = "Заполните пароль";
        errorMessagePasswordElement.scrollIntoView({ behavior: 'smooth' });
      }


      return !errorMessageName.value &&
          !errorMessageCity.value &&
          !errorMessagePhone.value &&
          !errorMessageEmail.value &&
          !errorMessagePassword.value;
    };

    const register = async () => {
      if (!validateFields()) {
        return;
      }

      try {
        stateStore.setEmail(email.value);
        stateStore.setPassword(password.value);
        stateStore.setName(name.value);
        stateStore.setCity(city.value);
        stateStore.setPhone(phone.value);
        stateStore.setCompany(company.value);
        await stateStore.registerUser ();
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
      errorMessageName,
      errorMessageCity,
      errorMessagePhone,
      errorMessageEmail,
      errorMessagePassword,
      formatPhone,
      setInitialPhone,
      validateFields,
      register,
    };
  },
}
</script>

<style scoped>
/* Add your styles here if needed */
</style>



<style scoped>
</style>