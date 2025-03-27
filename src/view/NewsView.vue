<template>

  <div class="news">
    <div class="container">
      <div class="title">Готовые наборы</div>
      <div class="news__wrapper">
        <app-filter-card :filters="filtersNews"
                         @search="searchByTag"
                         @clear="clearFilters"></app-filter-card>
        <div class="news__wrapper__cards">
          <app-news-card
              v-for="news in visibleSets"
              :key="news.id"
              :id="news.id"
              :img="require(`@/../public/imagesFirebase/news/${news.photo}`)"
              :date="news.date"
              :description="news.description"
              :title="news.name"
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

import {collection, onSnapshot, query} from "firebase/firestore";
import {db} from "@/firebase";
import {ref} from "vue"

export default {
  data() {
    return {
      filtersNews: ref([]),
      news: ref([]),
      searchQuery: '',
      visibleNewsCount: 3, // Количество видимых новостей

    }
  },

  computed: {
    visibleSets() {
      let filteredSets = this.news

      // Фильтрация по поисковому запросу
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filteredSets = filteredSets.filter(set =>
            set.name.toLowerCase().includes(query) ||
            set.description.toLowerCase().includes(query) ||
            set.search.toLowerCase().includes(query)
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
    },
    withdrawalFiltersNews: function () {
      const filtersQuery = query(collection(db, "filtersNews"));

      onSnapshot(filtersQuery, (snapshot) => {
        this.filtersNews = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            title: doc.data().title,
          }
        });
      });
    },
    withdrawalNews: function () {
      const newsQuery = query(collection(db, "news"));

      onSnapshot(newsQuery, (snapshot) => {
        this.news = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            date: doc.data().date,
            photo: doc.data().photo || [],
            search: doc.data().search,
          }
        });
      });
    },
  },
  mounted() {
    this.withdrawalFiltersNews()
    this.withdrawalNews()
  },

}
</script>

<style src="@/assets/style/News.css" scoped>

</style>