<template>
  <div class="auth">
    <div class="container">
      <div class="auth__wrapper ">
        <div class="auth__wrapper_img"><img src="../../public/img/auth/label.png" alt=""></div>
        <form @submit.prevent="singIn" class="auth__wrapper__form authorization">
          <div class="auth__wrapper__form_title">Вход</div>
          <div class="auth__wrapper__form_email" id="errorMessageEmail">
            <label for="email">E-mail</label>
            <input type="email" id="email" v-model="email" placeholder="E-mail" :class="{'errorInput': errorMessageEmail}">
            <div class="errorMessage">
              {{ errorMessageEmail }}
            </div>
          </div>
          <div id="errorMessagePassword">
            <label for="password">Пароль</label>
            <input type="password" id="password" v-model="password" placeholder="Пароль" :class="{'errorInput': errorMessagePassword}">
            <div class="errorMessage">
              {{ errorMessagePassword }}
            </div>
          </div>
          <p v-if="errMsg"> {{ errMsg }}</p>
          <router-link to="/password-recovery-form">
            <div class="auth__wrapper__form_re-password">
              Забыли пароль?
            </div>
          </router-link>
          <button type="submit" class="auth__wrapper__form_btn">Вход</button>
          <div class="auth__wrapper_login">Еще не зарегистрированны?
            <router-link to="/register"><span>Зарегистрироваться</span></router-link>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {useRouter} from "vue-router";

export default {
  data() {
    return {}
  },
  setup() {
    const email = ref('');
    const password = ref('');
    const errMsg = ref('')
    const router = useRouter();

    const errorMessageEmail = ref(null);
    const errorMessagePassword = ref(null);


    const validateFields = () => {

      errorMessageEmail.value = null;
      errorMessagePassword.value = null;


      const trimmedEmail = email.value.trim();
      const trimmedPassword = password.value.trim();

      const errorMessageEmailElement = document.getElementById('errorMessageEmail');
      const errorMessagePasswordElement = document.getElementById('errorMessagePassword');


      if (!trimmedEmail) {
        errorMessageEmail.value = "Заполните email";
        errorMessageEmailElement.scrollIntoView({ behavior: 'smooth' });
      } else if (!trimmedPassword) {
        errorMessagePassword.value = "Заполните пароль";
        errorMessagePasswordElement.scrollIntoView({ behavior: 'smooth' });
      }


      return !errorMessageEmail.value &&
          !errorMessagePassword.value
    };


    const singIn = async () => {
      if (!validateFields()) {
        return;
      }


      const auth = getAuth();
      try {
            await signInWithEmailAndPassword(auth, email.value, password.value);
        router.push('/cabinet');
      } catch (error) {
        switch (error.code) {
          case 'auth/invalid-email':
            errMsg.value = 'Неверный email'
            break;
          case 'auth/user-not-found':
            errMsg.value = 'Аккаунет с таким email не найден'
            break;
          case 'auth/wrong-password':
            errMsg.value = 'Неверный пароль'
            break;
          default:
            errMsg.value = 'Неверный email или пароль';
            break;
        }
      }
    };

    return {
      email,
      password,
      singIn,
      errMsg,
      errorMessageEmail,
      errorMessagePassword,
      validateFields,
    };
  },
}
</script>

<style scoped>
</style>