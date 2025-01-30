<template>
  <button
      class="btn"
      type="button"
      v-if="hasMoreSets"
      @click="handleClick">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    hasMoreSets: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit('show-more')
    }
  }

}
</script>

<style scoped>
.btn {
  cursor: pointer;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  padding: 17px 48px;
  border: 1px solid rgb(78, 157, 211);
  border-radius: 3px;
  background: #F7F7F7;
  color: #292929;
  font-size: 14px;
  font-weight: 500;
}

@media screen and (max-width: 768px) {
  .btn {
    padding: 12px 44px;
  }
}

@media screen and (max-width: 560px) {
  .btn {
    padding: 8px 32px;
  }
}

@media screen and (max-width: 360px) {
  .btn {
    font-size: 12px;
  }
}
</style>
