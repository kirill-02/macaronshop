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
  height: 100%;
  background: #FFFFFF;
  border-radius: 5px;

  &_img {
    width: 100%;

    img {
      width: 100%;
    }
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

@media screen and (max-width: 768px) {

}

@media screen and (max-width: 560px) {
  .news__wrapper__cards__card {
    &__information {
      padding: 10px 12px;

      &_year {
        font-size: 12px;
      }

      &_title {
        font-size: 14px;
      }

      &_description {
        font-size: 12px;
      }
    }
  }
}

@media screen and (max-width: 360px) {
  .news__wrapper__cards__card {
    &__information {
      padding: 6px 12px;

      &_year {
        font-size: 10px;
      }

      &_title {
        margin: 4px 0;
        font-size: 12px;
      }

      &_description {
        font-size: 10px;
        margin-top: 5px;
      }
    }
  }
}
</style>