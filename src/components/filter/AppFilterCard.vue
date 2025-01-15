<template>
  <div class="popular-sets__wrapper__filters">
    <router-link
        v-for="filter in filters"
        :key="filter.id"
        @click.prevent="searchByTag(filter.title)"
        to=""
    >
      <div :id="filter.id">{{ filter.title }}</div>
    </router-link>
    <router-link to="" @click.prevent="clearFilters">
      <div>Очистить фильтры</div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    filters: {
      type: Array,
      required: true
    }
  },
  methods: {
    searchByTag(tag) {
      this.$emit('search', tag);
    },
    clearFilters() {
      this.$emit('clear');
    }
  }
};
</script>
<style src="@/assets/style/ReadySets.css" scoped>

</style>