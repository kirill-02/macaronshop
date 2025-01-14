<template>
  <router-link :to="`/product/${id}`">
    <div class="popular-sets__wrapper__cards__card">
      <div class="popular-sets__wrapper__cards__card_img">
        <img :src="img" alt="">
      </div>
      <div class="popular-sets__wrapper__cards__card__information">
        <div class="popular-sets__wrapper__cards__card__information_title">{{ title }}</div>
        <div class="popular-sets__wrapper__cards__card__information_description">{{ description }}</div>
      </div>
      <div class="popular-sets__wrapper__cards__card__price-basket">
        <div class="popular-sets__wrapper__cards__card__price-basket_price">{{ price }} руб</div>
        <div class="popular-sets__wrapper__cards__card__price-basket_basket"><i class="ic_basket"></i>В корзину</div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['id', 'img', 'title', 'price', 'description']
}
</script>

<style scoped lang="scss">
.popular-sets__wrapper__cards__card {
  background: #FFFFFF;
  outline: 1px solid rgb(237, 237, 240);
  border-radius: 5px;

  &_img {

    img {
    }
  }

  &__information {
    padding: 21px;

    &_title {
      font-size: 18px;
      font-weight: 600;
    }

    &_description {
      margin-top: 14px;
      font-size: 14px;
      font-weight: 400;
      color: #292929;
    }
  }

  &__price-basket {
    display: flex;
    justify-content: space-between;

    &_price {
      display: flex;
      align-items: center;
      width: 100%;
      outline: 1px solid rgb(237, 237, 240);
      padding: 0 0 0 21px;
      color: #E7426A;
      font-size: 18px;
      font-weight: 600;
    }

    &_basket {
      align-content: flex-end;
      width: 70%;
      padding: 13px 22px;
      outline: 1px solid rgb(237, 237, 240);

      i {
        margin-right: 11px;
      }
    }
  }
}
</style>