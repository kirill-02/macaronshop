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
<style scoped lang="scss">
.popular-sets__wrapper__filters {
  display: flex;
  margin-bottom: 41px;
  align-items: center;
  flex-wrap: wrap;

  div {
    text-align: center;
    padding: 10px 14px;
    height: 39px;
    width: auto;
    border-radius: 100px;
    background-color: #F7EBE5;
    color: rgba(41, 41, 41, 0.83);
    margin-bottom: 10px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 600;
  }

  div:not(:last-child) {
    margin-right: 4px;

  }
}

@media screen and (max-width: 560px) {
  .popular-sets__wrapper__filters {
    margin-bottom: 15px;

    div {
      padding: 7px 7px;
      height: 28px;
      font-size: 12px;
      font-weight: 500;
    }
  }
}
</style>