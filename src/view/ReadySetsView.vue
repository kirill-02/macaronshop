<template>

  <div class="popular-sets">
    <div class="container">
      <div class="title">Готовые наборы</div>
      <div class="popular-sets__wrapper">
        <app-filter-card
            :filters="filtersSets"
            @search="searchByTag"
            @clear="clearFilters">

        </app-filter-card>
        <div class="popular-sets__wrapper__cards">
          <app-sets-card
              v-for="products in visibleSets"
              :key="products.id"
              :id="products.id"
              :img="require(`@/../public/imagesFirebase/product/${products.photo[0]}`)"
              :title="products.name"
              :description="products.description"
              :price="products.price"
          ></app-sets-card>

        </div>
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
import {collection, onSnapshot, query} from "firebase/firestore";
import {db} from "@/firebase";
import {ref} from "vue"


export default {
  data() {
    return {
      product: ref([]),
      filtersSets: ref([]),
      searchQuery: '',
      visibleSetCount: 6,
    }
  },

  computed: {
    visibleSets() {
      let filteredSets = this.product.filter(product => product.title === 'sets')

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filteredSets = filteredSets.filter(set =>
            set.name.toLowerCase().includes(query) ||
            set.description.toLowerCase().includes(query) ||
            set.search.toLowerCase().includes(query)
        )
      }
      return filteredSets.slice(0, this.visibleSetCount);
    },
    hasMoreSets() {
      return this.visibleSetCount < this.product.filter(product => product.title === 'sets').length;
    },
  },
  methods: {
    searchByTag(tag) {
      this.searchQuery = tag;
      this.visibleSetCount = 6;
    },
    showMoreSets() {
      this.visibleSetCount += 3;
    },
    clearFilters() {
      this.searchQuery = ''
      this.visibleSetCount = 6
    },

    withdrawalProduct: function () {
      const productQuery = query(collection(db, "product"));

      onSnapshot(productQuery, (snapshot) => {
        this.product = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            name: doc.data().name,
            price: doc.data().price,
            description: doc.data().description,
            photo: doc.data().photo || [],
            storage_conditions: doc.data().storage_conditions || [],
            description_composition_condition: doc.data().description_composition_condition || [],
            tastes: doc.data().tastes || [],
            title: doc.data().title,
            search: doc.data().search,
          }
        });
      });
    },

    withdrawalFiltersSets: function () {
      const filtersQuery = query(collection(db, "filtersSets"));

      onSnapshot(filtersQuery, (snapshot) => {
        this.filtersSets = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            title: doc.data().title,
          }
        });
      });
    },
  },

  mounted() {
    this.withdrawalProduct()
    this.withdrawalFiltersSets()
  },

}
</script>

<style src="@/assets/style/ReadySets.css" scoped>

</style>