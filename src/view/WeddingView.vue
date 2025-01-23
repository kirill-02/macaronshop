<template>
  <div class="wedding">
    <div class="container">
      <div class="wedding__wrapper">

        <div class="wedding__wrapper__offer">

          <div class="wedding__wrapper__offer__images">
            <img src="../../public/img/wedding/1/1.png" alt="" class="wedding__wrapper__offer__images_one">
            <img src="../../public/img/wedding/1/2.png" alt="" class="wedding__wrapper__offer__images_two">
            <img src="../../public/img/wedding/1/3.png" alt="" class="wedding__wrapper__offer__images_three">
            <img src="../../public/img/wedding/1/4.png" alt="" class="wedding__wrapper__offer__images_four">
          </div>

          <div class="wedding__wrapper__offer__information">
            <div class="wedding__wrapper__offer__information__title">Свадебное предложение</div>
            <div class="wedding__wrapper__offer__information__description">Нежные пирожные макаронс с разными вкусами
              для украшения вашего свадебного торжества
            </div>

            <div class="wedding__wrapper__offer__information__btn">
              <button type="submit">Презентация</button>
              <button type="submit">Прайс-лист</button>
            </div>

            <p>Рыба-текст предложения</p>
            <p>

              Приятно, граждане, наблюдать, как действия представителей оппозиции, превозмогая сложившуюся непростую
              экономическую ситуацию, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего
              возрастает их статус бесполезности. </p>
            <div class="one"><img src="../../public/img/wedding/1/5.png" alt=""></div>
            <div class="two"><img src="../../public/img/wedding/1/6.png" alt=""></div>
            <div class="three"><img src="../../public/img/wedding/1/7.png" alt=""></div>
            <div class="four"><img src="../../public/img/wedding/1/8.png" alt=""></div>
          </div>


        </div>

        <div class="wedding__wrapper__sets">
          <div class="wedding__wrapper__sets_title">Наборы для свадьбы</div>

          <div class="wedding__wrapper__sets__cards">
            <app-sets-card
                v-for="popularSet in visibleSets"
                :key="popularSet.id"
                :id="popularSet.id"
                :img="require(`@/../public/img/home/5/${popularSet.img}`)"
                :title="popularSet.title"
                :description="popularSet.description"
                :price="popularSet.price"
            ></app-sets-card>
          </div>
          <!--          <app-border-button-->
          <!--              text='Показать еще'-->
          <!--              :hasMoreSets="hasMoreSets"-->
          <!--              @show-more="showMore">-->
          <!--          </app-border-button>-->

        </div>

        <div class="wedding__wrapper__solutions">
          <div class="wedding__wrapper__solutions__images"><img src="../../public/img/wedding/2/1.png" alt=""></div>

          <div class="wedding__wrapper__solutions__information">
            <div class="wedding__wrapper__solutions__information_title">Мы открыты для новых идей</div>
            <div class="wedding__wrapper__solutions__information_description">Каждое событие уникально и мы готовы
              предложить индивидуальные решения для Вашего мероптиятия
            </div>
            <div class="wedding__wrapper__solutions__information__form">

              <div class="wedding__wrapper__solutions__information__form__contacts">
                <div>
                  <label for="">Ваше имя*</label>
                  <input type="text" placeholder="Укажите имя">
                </div>
                <div>
                  <label for="">Телефон*</label>
                  <input type="text" placeholder="+7 (___) ___-__-__">
                </div>
              </div>
              <div class="wedding__wrapper__solutions__information__form__text">
                <label for="">Опишите Вашу идею</label>
                <textarea></textarea>
              </div>
              <div class="wedding__wrapper__solutions__information__form_btn">
                <button type="submit">Отправить заявку</button>
              </div>
              <p>Нажимая на кнопку "Оформить заказ" Я принимаю и соглашаюсь с <span> Договором оферты</span> и разрешаю
                обработку моих
                персональных данных в соответствии с <span> Политикой конфиденциальности</span></p>

            </div>
          </div>
        </div>

        <div class="wedding__wrapper__answers-questions">
          <div class="wedding__wrapper__answers-questions_title">Ответы на вопросы</div>
          <div class="wedding__wrapper__answers-questions__cards">
            <div class="wedding__wrapper__answers-questions__cards__card one">
              <div class="wedding__wrapper__answers-questions__cards__card_title">Сколько хранятся пирожные макарон?
              </div>
              <hr>
              <div class="wedding__wrapper__answers-questions__cards__card_description">Срок хранения бла бла бла</div>
            </div>
            <div class="wedding__wrapper__answers-questions__cards__card">
              <div class="wedding__wrapper__answers-questions__cards__card_title">Как быстро мы выполняем заказы
              </div>
              <hr>
              <div class="wedding__wrapper__answers-questions__cards__card_description">Стандартный срок выполнения
                заказа 3-5 дней, При большом тираже и в предновогодний сезон может увеличиться. Потому что...
              </div>
            </div>
            <div class="wedding__wrapper__answers-questions__cards__card one">
              <div class="wedding__wrapper__answers-questions__cards__card_title">А за 2 дня?
              </div>
              <hr>
              <div class="wedding__wrapper__answers-questions__cards__card_description">Текст про дополнительную
                стоимость при срочных заказах
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popularSets: [
        {
          id: 1,
          img: '1.jpeg',
          title: 'Сердце',
          description: '24 штуки в коробке в виде сердца. Ассорти из 6 вкусов',
          price: '2800'
        },
        {
          id: 2,
          img: '2.jpeg',
          title: 'Красота спасёт мир',
          description: 'Набор 16 шт. Вкусы: клубника - базилик, кокос, голубой сыр, пармезан',
          price: '750'
        },
        {
          id: 3,
          img: '3.jpeg',
          title: 'Круглый набор',
          description: '40 макаронс в круглой коробке с персональной надписью',
          price: '3900'
        },
        {
          id: 4,
          img: '4.jpeg',
          title: 'Набор на 9',
          description: 'Набор из 9 штук в квадратной коробке. Вкусы: шоколад, фисташка, вишня',
          price: '950'
        },
        {
          id: 5,
          img: '5.jpeg',
          title: 'Набор на 16',
          description: 'Набор 16 шт. Вкусы: соленая карамель, голубой сыр, пармезан, шоколад',
          price: '1500'
        },
        {
          id: 6,
          img: '6.jpeg',
          title: 'Сердце',
          description: '24 штуки в коробке в виде сердца. Ассорти из 6 вкусов',
          price: '2500'
        },
        {
          id: 7,
          img: '4.jpeg',
          title: 'Набор на 9',
          description: 'Набор из 9 штук в квадратной коробке. Вкусы: шоколад, фисташка, вишня',
          price: '950'
        },
        {
          id: 8,
          img: '5.jpeg',
          title: 'Набор на 16',
          description: 'Набор 16 шт. Вкусы: соленая карамель, голубой сыр, пармезан, шоколад',
          price: '1500'
        },
        {
          id: 9,
          img: '6.jpeg',
          title: 'Сердце',
          description: '24 штуки в коробке в виде сердца. Ассорти из 6 вкусов',
          price: '2500'
        },
        // Добавьте больше наборов, если необходимо
      ],
      visibleSetCount: 6,
    }
  },
  computed: {
    visibleSets() {
      return this.popularSets.slice(0, this.visibleSetCount);
    },
    // hasMoreSets() {
    //   return this.visibleSetCount < this.popularSets.length;
    // },
  },
  methods: {
    // showMore() {
    //   this.visibleSetCount += 3
    // }
  }
}
</script>

<style src="../assets/style/Wedding.css" scoped>

</style>