<template>
  <div class="auth">
    <div class="container">
      <div class="auth__wrapper">
        <div class="auth__wrapper_img"><img src="../../public/img/auth/label.png" alt=""></div>
        <form action="#" class="auth__wrapper__form">
          <div class="auth__wrapper__form_title">Забыли пароль?
            <p>Инструкция по восстановлению пароля отправлена на указанный e-mail адрес. Проверьте новые письма. </p>
          </div>
          <router-link to="/auth">
            <button type="submit" class="auth__wrapper__form_btn">На главную</button>
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