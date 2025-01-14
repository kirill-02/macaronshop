<template>
  <div class="auth">
    <div class="container">
      <div class="auth__wrapper">
        <div class="auth__wrapper_img"><img src="../../public/img/auth/label.png" alt=""></div>
        <form action="#" class="auth__wrapper__form">
          <div class="auth__wrapper__form_title">Вход</div>
          <div class="auth__wrapper__form_email">
            <label for="">E-mail</label>
            <input type="email" id="" placeholder="E-mail">
          </div>
          <div>
            <label for="auth__wrapper__form_password">Пароль</label>
            <input type="text" id="" placeholder="Пароль">
          </div>
          <router-link to="/password-recovery-form">
            <div class="auth__wrapper__form_re-password">
              Забыли пароль?
            </div>
          </router-link>
          <router-link to="/cabinet">
            <button type="submit" class="auth__wrapper__form_btn">Вход</button>
          </router-link>
        </form>

      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
</style>