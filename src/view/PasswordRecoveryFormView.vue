<template>
  <div class="auth">
    <div class="container">
      <div class="auth__wrapper">
        <div class="auth__wrapper_img"><img src="../../public/img/auth/label.png" alt=""></div>
        <form action="#" class="auth__wrapper__form">
          <div class="auth__wrapper__form_title">Забыли пароль?
            <p>Enter the email address you used when you joined and we’ll send you instructions to reset your
              password.</p>
          </div>
          <div class="auth__wrapper__form_email">
            <label for="">E-mail</label>
            <input type="email" id="" placeholder="E-mail">
          </div>

          <router-link to="/password-recovery">
            <button type="submit" class="auth__wrapper__form_btn">Продолжить</button>
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