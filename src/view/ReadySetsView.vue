<template>

  <div class="popular-sets">
    <div class="container">
      <div class="title">Готовые наборы</div>
      <div class="popular-sets__wrapper">
        <app-filter-card :filters="filters"
                         @search="searchByTag"
                         @clear="clearFilters"></app-filter-card>
        <div class="popular-sets__wrapper__cards">
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
        <!--            v-if="hasMoreSets"-->
        <app-border-button
            text='Показать еще'
            :hasMoreSets="hasMoreSets"
            @show-more="showMoreSets">
        </app-border-button>
      </div>
    </div>
  </div>
</template>

<script>
import AppFilterCard from "@/components/filter/AppFilterCard.vue";

export default {
  components: {AppFilterCard},
  data() {
    return {
      searchQuery: '',
      popularSets: [
        {
          id: 1,
          img: '1.jpeg',
          title: 'Свадьба',
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
          title: 'Набор на 16 ',
          description: 'Набор 16 шт. Вкусы: соленая карамель, голубой сыр, пармезан, шоколад',
          price: '1500'
        },
        {
          id: 6,
          img: '6.jpeg',
          title: 'Сердце ',
          description: '24 штуки в коробке в виде сердца. Ассорти из 6 вкусов',
          price: '2500'
        },
        {
          id: 7,
          img: '4.jpeg',
          title: 'Набор на 9',
          description: 'Набор из 9 штук в квадратной коробке. Вкусы: шоколад, фисташка,',
          price: '950'
        },
        {
          id: 8,
          img: '5.jpeg',
          title: 'Набор на 16',
          description: 'Набор 16 шт. Вкусы: соленая карамель, голубой сыр, пармезан, шоколад  ',
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
      filters: [
        {id: 1, title: 'Свадьба'},
        {id: 2, title: 'Девичник'},
        {id: 3, title: 'День рождения'},
        {id: 4, title: '8 марта'},
        {id: 5, title: '23 февраля'},
        {id: 6, title: 'Новый год'},
        {id: 7, title: 'День учителя'},
        {id: 8, title: 'День тренера'},
        {id: 9, title: '1 сентября'},
      ],
    }
  },

  computed: {
    visibleSets() {
      let filteredSets = this.popularSets

      // Фильтрация по поисковому запросу
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filteredSets = filteredSets.filter(set =>
            set.title.toLowerCase().includes(query) ||
            set.description.toLowerCase().includes(query)
        )
      }
      return filteredSets.slice(0, this.visibleSetCount);
    },
    hasMoreSets() {
      return this.visibleSetCount < this.popularSets.length;
    },
  },
  methods: {
    searchByTag(tag) {
      this.searchQuery = tag
      this.visibleSetCount = 6
    },
    showMoreSets() {
      this.visibleSetCount += 3;
    },
    clearFilters() {
      this.searchQuery = ''
      this.visibleSetCount = 6
    }
  }

}
</script>

<style src="@/assets/style/ReadySets.css" scoped>

</style>