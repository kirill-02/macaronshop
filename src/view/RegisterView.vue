<template>

  <div class="auth">
    <div class="container">
      <div class="auth__wrapper">
        <div class="auth__wrapper_img_register"><img src="../../public/img/auth/label.png" alt=""></div>
        <form action="#" class="auth__wrapper__form ">
          <div class="auth__wrapper__form_title">Получите доступ к оптовым ценам
            <span>Пройдите регистрацию</span></div>

          <div class="auth__wrapper__form_register">
            <div class="auth__wrapper__form_email">
              <label for="">Ваше имя</label>
              <input type="email" id="" placeholder="Ваше имя">
            </div>
            <div class="auth__wrapper__form_email">
              <label for="">Город</label>
              <input type="email" id="" placeholder="Город">
            </div>
            <div class="auth__wrapper__form_email">
              <label for="">Ваш телефон</label>
              <input type="email" id="" placeholder="+7 (___) ___-__-__">
            </div>
            <div class="auth__wrapper__form_email">
              <label for="">Компания</label>
              <input type="email" id="" placeholder="Компания">
            </div>
            <div class="auth__wrapper__form_email">
              <label for="">E-mail</label>
              <input type="email" id="" placeholder="E-mail">
            </div>
            <div>
              <label for="auth__wrapper__form_password">Придумайте пароль</label>
              <input type="text" id="" placeholder="Придумайте пароль">
            </div>
          </div>
          <router-link to="/cabinet">
            <button type="submit" class="auth__wrapper__form_btn">Отправить заявку на регистрацию</button>
          </router-link>

          <div class="auth__wrapper_login">Уже зарегистрированы?
            <router-link to="auth"><span>Войти</span></router-link>
          </div>
          <div class="auth__wrapper_rules">Нажимая на кнопку "Отправить заявку на регистрацию" я принимаю и соглашаюсь с
            <a href="../../public/contracts/offer-agreement.docx" download="Договором оферты">Договором оферты </a>
            и разрешаю обработку моих персональных данных в соответствии с
            <a href="../../public/contracts/privacy-policy.docx" download="Политикой
              конфиденциальности">Политикой
              конфиденциальности</a>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
</style>