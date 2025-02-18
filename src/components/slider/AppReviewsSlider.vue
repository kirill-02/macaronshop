<template>

  <div class="reviews-slider ">
    <div class="reviews-slider_title">{{ title }}
    </div>

    <div class="reviews-slider_description">{{ description }}
    </div>
    <hr>
    <div class="reviews-slider__name">
      <div>
        <p>
          {{ name }}
        </p>
        <p>
          {{ organization }}
        </p>
      </div>
      <img src="../../../public/img/wholesaleSupplies/2/1.png" alt="">
    </div>
  </div>

</template>

<script>
export default {
  props: ['title', 'description', 'organization', 'name'],

};
</script>


<style scoped lang="scss">
hr {
  margin: 16px 0;
  border: none;
  border-top: 0.1px solid rgb(237, 237, 240);
}

.reviews-slider {
  margin-top: 17px;
  margin-bottom: 50px;
  outline: 1px solid rgb(237, 237, 240);
  max-width: 370px;
  border-radius: 5px;
  background: #fff;
  padding: 20px;

  &_title {
    font-size: 18px;
    font-weight: 600;
  }

  &_description {
    margin-top: 11px;
    font-size: 16px;
    font-weight: 400;
  }

  &__name {
    display: flex;
    text-align: right;
    align-items: end;
    justify-content: end;

    div {
      margin-right: 13px;

      p {
        font-size: 12px;
        font-weight: 600;

      }
    }
  }
}

@media screen and (max-width: 560px) {
  .reviews-slider {
    max-width: 288px;

    &_title {
      font-size: 14px;
    }

    &_description {
      font-size: 13px;
    }

    &__name {
      div {
        p {
          font-size: 10px;
        }

        img {
          width: 36px;
          height: 36px;
        }
      }
    }
  }
}
</style>