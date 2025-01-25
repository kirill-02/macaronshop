<template>
  <div :class="notFoundClass" class="not-found">
    <div class="container">
      <div class="not-found__wrapper">
        <div class="not-found__wrapper_information">Извините, страница не найдена</div>
        <div class="not-found__wrapper_title">404</div>
        <div class="not-found__wrapper__images">
          <img class="not-found__wrapper__images_morning" src="../../public/img/error/1/1.png" alt="">
          <img class="not-found__wrapper__images_morning" src="../../public/img/error/1/2.png" alt="">
          <img class="not-found__wrapper__images_night" src="../../public/img/error/1/3.png" alt="">
          <img class="not-found__wrapper__images_night" src="../../public/img/error/1/4.png" alt="">
          <img class="not-found__wrapper__images_night" src="../../public/img/error/1/5.png" alt="">
          <img class="not-found__wrapper__images_night" src="../../public/img/error/1/6.png" alt="">
        </div>
        <div class="not-found__wrapper_btn">
          <button @click="goBlack" type="submit">Назад</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notFoundClass: {},
    }
  },
  created() {
    this.setNotFound()
  },

  methods: {
    goBlack() {
      this.$router.go(-1);
    },
    setNotFound() {
      const currentHour = new Date().getHours()
      if (currentHour >= 6 && currentHour < 18) {
        this.notFoundClass = 'morning'
      } else {
        this.notFoundClass = 'night'
      }
    }
  }

}
</script>

<style src="../assets/style/NotFound.css" scoped>

</style>