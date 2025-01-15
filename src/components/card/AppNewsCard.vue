<template>
  <div class="news__wrapper__cards__card">
    <div class="news__wrapper__cards__card_img"><img :src="img" alt=""></div>
    <div class="news__wrapper__cards__card__information">
      <div class="news__wrapper__cards__card__information_year">{{ date }}</div>
      <div class="news__wrapper__cards__card__information_title">{{ title }}</div>
      <div class="news__wrapper__cards__card__information_description">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['img', 'date', 'title', 'description'],
}
</script>

<style lang="scss" scoped>
.news__wrapper__cards__card {
  height: 420px;
  background: #FFFFFF;
  border-radius: 5px;

  &_img {
    width: 370px;
    height: 210px;
  }

  &__information {
    padding: 20px;

    &_year {
      font-size: 14px;
      font-weight: 400;
      color: #969696;
    }

    &_title {
      margin: 10px 0;
      font-size: 18px;
      font-weight: 600;
    }

    &_description {
      font-size: 14px;
      font-weight: 400;
      color: #292929;
    }
  }
}
</style>