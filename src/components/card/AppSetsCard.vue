<template>
  <div class="popular-sets__wrapper__cards__card">
    <router-link :to="`/product/${id}`">
      <div class="popular-sets__wrapper__cards__card_img">
        <img :src="img" alt="">
      </div>
      <div class="popular-sets__wrapper__cards__card__information">
        <div class="popular-sets__wrapper__cards__card__information_title">{{ title }}</div>
        <div class="popular-sets__wrapper__cards__card__information_description">{{ description }}</div>
      </div>
    </router-link>
    <div class="popular-sets__wrapper__cards__card__price-basket">
      <div class="popular-sets__wrapper__cards__card__price-basket_price">{{ price }} руб</div>
      <button type="submit" class="popular-sets__wrapper__cards__card__price-basket_basket"><i class="ic_basket"></i>
        <span>В корзину</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'img', 'title', 'price', 'description']
}
</script>

<style scoped lang="scss">
.popular-sets__wrapper__cards__card {
  display: grid;
  background: #FFFFFF;
  outline: 1px solid rgb(237, 237, 240);
  border-radius: 5px;
  position: relative;
  height: 100%;

  &_img {
    width: 100%;

    img {
      width: 100%;
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
    align-items: flex-end;

    &_price {
      display: flex;
      align-items: center;
      width: 100%;
      outline: 1px solid rgb(237, 237, 240);
      padding: 0 0 0 21px;
      color: #E7426A;
      font-size: 18px;
      font-weight: 600;
      height: 49px;

    }

    &_basket {
      cursor: pointer;
      align-content: flex-end;
      width: 70%;
      padding: 13px 22px;
      outline: 1px solid rgb(237, 237, 240);
      font-size: 14px;
      height: 49px;
      font-weight: 600;
      border: none;
      background: #FFFFFF;

      i {
        margin-right: 11px;
      }
    }
  }
}


@media screen and (max-width: 768px) {
  .popular-sets__wrapper__cards__card {
    &__information {
      position: relative;
    }

    &__price-basket {
      &_basket {
        padding: 10px 8px;
      }
    }
  }
}

@media screen and (max-width: 560px) {
  .popular-sets__wrapper__cards__card {
    &_img {
      padding: 10px 10px 0 10px;
    }

    &__information {
      position: relative;
      padding: 10px 12px;

      &_title {
        font-size: 14px;
      }

      &_description {
        font-size: 12px;
      }
    }

    &__price-basket {

      &_price {
        font-size: 14px;
      }

      &_basket {
        padding: 10px 8px;
        font-size: 20px;

        span {
          display: none;
        }
      }
    }
  }
}

@media screen and (max-width: 360px) {
  .popular-sets__wrapper__cards__card {
    &_img {
      padding: 8px 8px 0 8px;
    }

    &__information {
      padding: 6px 12px;

      &_title {
        font-size: 12px;
      }

      &_description {
        font-size: 10px;
        margin-top: 5px;
      }
    }

    &__price-basket {
      font-size: 16px;

      &_price {
        padding: 0 0 0 8px;
      }

      &_basket {
        padding: 0px 0px;
        width: 48%;

        i {
          margin-right: 4px;
        }
      }
    }
  }
}
</style>