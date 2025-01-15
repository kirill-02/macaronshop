<template>

  <div class="news">
    <div class="container">
      <div class="title">Готовые наборы</div>
      <div class="news__wrapper">
        <app-filter-card :filters="filters"
                         @search="searchByTag"
                         @clear="clearFilters"></app-filter-card>
        <div class="news__wrapper__cards">
          <app-news-card
              v-for="lotOfNews in visibleSets"
              :key="lotOfNews.id"
              :id="lotOfNews.id"
              :img="require(`@/../public/img/home/6/${lotOfNews.img}`)"
              :date="lotOfNews.date"
              :description="lotOfNews.description"
              :title="lotOfNews.title"
          ></app-news-card>

        </div>
        <!--            v-if="hasMoreSets"-->
        <app-border-button
            text='Показать еще'
            :hasMoreSets="hasMoreNews"
            @show-more="showMoreNews">
        </app-border-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      searchQuery: '',
      news: [
        {
          id: 1,
          img: '1.jpeg',
          date: '25.02.2023',
          title: 'Скоро главный праздник весны!',
          description: 'Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы'
        },
        {
          id: 2,
          img: '2.jpeg',
          date: '17.02.2023',
          title: 'Конкурс на 23 февраля!',
          description: 'День Защитника Отечества уже совсем скоро! Порадуйте своего сладкоежку с помощью аппетитных наборов от МакаронШоп'
        },
        {
          id: 3,
          img: '3.jpeg',
          date: '11.02.2023',
          title: 'Экспресс-конкурс ко дню Святого Валентина',
          description: 'Подарок уже через 2 дня. День всех влюблённых не за горами. Расскажи о своих чувствах с помощью сладкой валентинки от МакаронШоп'
        },
        {
          id: 4,
          img: '1.jpeg',
          date: '11.02.2023',
          title: 'Экспресс-конкурс ко дню Святого Валентина',
          description: 'Подарок уже через 2 дня. День всех влюблённых не за горами. Расскажи о своих чувствах с помощью сладкой валентинки от МакаронШоп'
        },
        {
          id: 5,
          img: '2.jpeg',
          date: '11.02.2023',
          title: 'Экспресс-конкурс ко дню Святого Валентина',
          description: 'Подарок уже через 2 дня. День всех влюблённых не за горами. Расскажи о своих чувствах с помощью сладкой валентинки от МакаронШоп'
        },
        {
          id: 6,
          img: '3.jpeg',
          date: '11.02.2023',
          title: 'Экспресс-конкурс ко дню Святого Валентина',
          description: 'Подарок уже через 2 дня. День всех влюблённых не за горами. Расскажи о своих чувствах с помощью сладкой валентинки от МакаронШоп'
        },
      ],
      visibleNewsCount: 3, // Количество видимых новостей
      filters: [
        {id: 2, title: 'Обновления ассортимента'},
        {id: 3, title: 'Акции'},
        {id: 4, title: 'Конкурсы'},
        {id: 5, title: 'подарок на 8 марта'},
        {id: 6, title: 'весна'},
        {id: 7, title: 'День учителя'},
        {id: 8, title: 'День тренера'},
        {id: 9, title: '1 сентября'},
      ],
    }
  },

  computed: {
    visibleSets() {
      let filteredSets = this.news

      // Фильтрация по поисковому запросу
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filteredSets = filteredSets.filter(set =>
            set.title.toLowerCase().includes(query) ||
            set.description.toLowerCase().includes(query)
        )
      }
      return filteredSets.slice(0, this.visibleNewsCount);
    },
    hasMoreNews() {
      return this.visibleNewsCount < this.news.length;
    }
  },
  methods: {
    searchByTag(tag) {
      this.searchQuery = tag
      this.visibleNewsCount = 3
    },
    showMoreNews() {
      this.visibleNewsCount += 3;
    },
    clearFilters() {
      this.searchQuery = ''
      this.visibleNewsCount = 3
    }
  }

}
</script>

<style src="@/assets/style/News.css" scoped>

</style>