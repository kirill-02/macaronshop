<template>
  <div class="basket">
    <div class="container">
      <div class="title">Ваша корзина</div>
      <div class="description">3 товара / 1030 руб.</div>


      <div class="basket__wrapper">
        <div class="basket__wrapper__information">

          <div class="basket__wrapper__information__product">

            <div class="basket__wrapper__information__product__layout">
              <div class="basket__wrapper__information__product__layout_images"><img
                  src="../../public/img/home/5/1.jpeg" alt=""></div>
              <div class="basket__wrapper__information__product__layout__things">
                <div class="basket__wrapper__information__product__layout__things_title"><strong>Набор макарон 12
                  шт.</strong>
                </div>
                <div class="basket__wrapper__information__product__layout__things__description">
                  <div class="">Трюфель 2 шт.</div>
                  <div class="">Розмарин 3 шт.</div>
                  <div class=""> Ананас 1 шт.</div>
                  <div class="">Кокос 4 шт.</div>
                </div>
              </div>

              <div class="basket__wrapper__information__product__layout__quantity">
                <button class="basket__wrapper__information__product__layout__quantity_minus"><span>-</span></button>
                <div class="basket__wrapper__information__product__layout__quantity_number">1</div>
                <button class="basket__wrapper__information__product__layout__quantity_plus"><span>+</span></button>
              </div>

              <div class="basket__wrapper__information__product__layout__price">
                <div> Цена: <span>950 руб.</span></div>
              </div>
              <div class="basket__wrapper__information__product__layout_cross"><i class="ic_cross"></i></div>

            </div>
            <hr>
            <div class="basket__wrapper__information__product__layout">
              <div class="basket__wrapper__information__product__layout_images"><img
                  src="../../public/img/home/5/1.jpeg" alt=""></div>
              <div class="basket__wrapper__information__product__layout__things">
                <div class="basket__wrapper__information__product__layout__things_title"><strong>Набор макарон 12
                  шт.</strong></div>
                <div class="basket__wrapper__information__product__layout__things__description">
                  <div class="">Трюфель 2 шт.</div>
                  <div class="">Розмарин 3 шт.</div>
                  <div class=""> Ананас 1 шт.</div>
                  <div class="">Кокос 4 шт.</div>
                </div>
              </div>

              <div class="basket__wrapper__information__product__layout__quantity">
                <button class="basket__wrapper__information__product__layout__quantity_minus"><span>-</span></button>
                <div class="basket__wrapper__information__product__layout__quantity_number">1</div>
                <button class="basket__wrapper__information__product__layout__quantity_plus"><span>+</span></button>
              </div>

              <div class="basket__wrapper__information__product__layout__price">
                <div> Цена: <span>950 руб.</span></div>
              </div>
              <div class="basket__wrapper__information__product__layout_cross"><i class="ic_cross"></i></div>

            </div>
            <hr>
            <div class="basket__wrapper__information__product__layout">
              <div class="basket__wrapper__information__product__layout_images"><img
                  src="../../public/img/home/5/1.jpeg" alt=""></div>
              <div class="basket__wrapper__information__product__layout__things">
                <div class="basket__wrapper__information__product__layout__things_title"><strong>Набор макарон 12
                  шт.</strong></div>
                <div class="basket__wrapper__information__product__layout__things__description">
                  <div class="">Трюфель 2 шт.</div>
                  <div class="">Розмарин 3 шт.</div>
                  <div class=""> Ананас 1 шт.</div>
                  <div class="">Кокос 4 шт.</div>
                </div>
              </div>

              <div class="basket__wrapper__information__product__layout__quantity">
                <button class="basket__wrapper__information__product__layout__quantity_minus"><span>-</span></button>
                <div class="basket__wrapper__information__product__layout__quantity_number">1</div>
                <button class="basket__wrapper__information__product__layout__quantity_plus"><span>+</span></button>
              </div>

              <div class="basket__wrapper__information__product__layout__price">
                <div> Цена: <span>950 руб.</span></div>
              </div>
              <div class="basket__wrapper__information__product__layout_cross"><i class="ic_cross"></i></div>
            </div>
            <hr>
            <div class="basket__wrapper__information__product__total-price">
              <div class="basket__wrapper__information__product__total-price_description">Общая стоимость Вашей покупки
                без учета доставки составит:
              </div>
              <div class="basket__wrapper__information__product__total-price_price">1000 руб.</div>
            </div>
          </div>

          <div class="basket__wrapper__information__delivery">
            <div class="basket__wrapper__information__delivery_title">Доставка</div>
            <div class="basket__wrapper__information__delivery_description">Укажите контактные данные и выберите способ
              доставки
            </div>

            <form class="basket__wrapper__information__delivery__forms">

              <div class="basket__wrapper__information__delivery__forms_contact">
                <div class="">
                  <label for="name">Ваше имя*</label>
                  <input type="text" id="name" placeholder="Укажите имя"></div>
                <div class="">
                  <label for="phone">Ваш телефон*</label>
                  <input type="text" id="phone" placeholder="+7 (___) ___-__-__"></div>
              </div>

              <div class="basket__wrapper__information__delivery__forms__way">
                <div class="basket__wrapper__information__delivery__forms_title">Способ доставки:</div>

                <div class="basket__wrapper__information__delivery__forms__way__choice">
                  <div class="basket__wrapper__information__delivery__forms__way__choice__courier"
                       :class="{'selected': selectedDelivery === 'courier'}"
                       @click="selectDelivery('courier')">

                    <i class="ic_wheelbarrow"></i>
                    <div class="basket__wrapper__information__delivery__forms__way__choice__courier_price">
                      <div class="">Курьерская доставка <span>400 руб.</span></div>
                    </div>
                  </div>
                  <div class="basket__wrapper__information__delivery__forms__way__choice__courier"
                       :class="{'selected': selectedDelivery === 'pickup'}"
                       @click="selectDelivery('pickup')">
                    <i class="ic_hand"></i>
                    <div class="basket__wrapper__information__delivery__forms__way__choice__courier_price">
                      <div class="">Самовывоз <span>Бесплатно</span></div>
                    </div>
                  </div>
                </div>

              </div>

              <div class="basket__wrapper__information__delivery__forms_comment">
                <label for="address">Адрес доставки</label>
                <textarea id="address" placeholder="Не нужно заполнять при самовывозе"></textarea>
              </div>

              <div class="basket__wrapper__information__delivery__forms_contact">
                <div class="">
                  <label for="name">Ваше имя*</label>
                  <input type="text" id="name" placeholder="Укажите имя"></div>
                <div class="">
                  <label for="phone">Ваш телефон*</label>
                  <input type="text" id="phone" placeholder="+7 (___) ___-__-__"></div>
              </div>

              <div class="basket__wrapper__information__delivery__forms_comment">
                <label for="comment">Комментарий к заказe</label>
                <textarea id="comment"
                          placeholder="Здесь Вы можете написать пожелания, относительно анонимной доставки, текста открытки и другое."></textarea>
              </div>

              <div class="basket__wrapper__information__delivery__forms__payment">
                <div class="basket__wrapper__information__delivery__forms_title">Метод оплаты</div>

                <div class="basket__wrapper__information__delivery__forms__payment__method">
                  <div>
                    <input
                        @change="selectPayment('card')"
                        type="checkbox"
                        value="card"
                        :checked="selectedPayment === 'card'"
                    >
                    <label for="">Оплата картой онлайн</label>
                  </div>
                  <div>
                    <input
                        @change="selectPayment('cash')"
                        type="checkbox"
                        value="cash"
                        :checked="selectedPayment === 'cash'"
                    >
                    <label for="">Наличными при получении</label>
                  </div>
                  <div>
                    <input
                        @change="selectPayment('yandex')"
                        type="checkbox"
                        value="yandex"
                        :checked="selectedPayment === 'yandex'"
                    >
                    <label for="">Яндекс деньги</label>
                  </div>
                </div>
              </div>

              <hr>

              <div class="basket__wrapper__information__delivery__forms__result">
                <div class="basket__wrapper__information__delivery__forms__result_sum">Итоговая сумма заказа вместе с
                  доставкой:
                </div>
                <div class="basket__wrapper__information__delivery__forms__result_price">1400 руб.</div>
              </div>

              <hr>

              <button class="basket__wrapper__information__delivery__forms_btn">Оформить заказ</button>
              <div class="basket__wrapper__information__delivery__forms_offer">Нажимая на кнопку "Оформить заказ" Я
                принимаю и соглашаюсь с <span> Договором оферты </span> и разрешаю обработку моих персональных данных в
                соответствии с
                <span> Политикой конфиденциальности</span>
              </div>
            </form>
          </div>
        </div>

        <div class="basket__wrapper__result">
          <div class="basket__wrapper__result_title">Итого</div>

          <div class="basket__wrapper__result__information">
            <div class="basket__wrapper__result__information__card">
              <div class="basket__wrapper__result__information__card_title">Стоимость товаров</div>
              <div class="basket__wrapper__result__information__card_dot-one"></div>
              <div class="basket__wrapper__result__information__card_price">700 руб</div>
            </div>
            <div class="basket__wrapper__result__information__card">
              <div class="basket__wrapper__result__information__card_title">Скидка</div>
              <div class="basket__wrapper__result__information__card_dot-two"></div>
              <div class="basket__wrapper__result__information__card_price">0 руб</div>
            </div>
            <div class="basket__wrapper__result__information__card">
              <div class="basket__wrapper__result__information__card_title">Доставка</div>
              <div class="basket__wrapper__result__information__card_dot-three"></div>
              <div class="basket__wrapper__result__information__card_price">400 руб</div>
            </div>
            <hr>
            <div class="basket__wrapper__result__information__card">
              <div class="basket__wrapper__result__information__card_title">К оплате</div>
              <div class="basket__wrapper__result__information__card_price"><strong> 1100 руб</strong></div>
            </div>
          </div>
          <hr>

          <button class="basket__wrapper__result_btn">Оформить заказ</button>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDelivery: 'courier',
      selectedPayment: null,
    }

  },
  methods: {
    selectDelivery(selected) {
      this.selectedDelivery = selected
    },
    selectPayment(selected) {
      if (this.selectedPayment === selected) {
        // Если выбранный метод отличается от текущего, обновляем его
        this.selectedPayment = null; // Сбрасываем выбор, если повторно нажали
      } else {
        this.selectedPayment = selected; // Устанавливаем новый выбранный метод
      }
    }
  }
}
</script>

<style src="@/assets/style/Basket.css" scoped>

</style>