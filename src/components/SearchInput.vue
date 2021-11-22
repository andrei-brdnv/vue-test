<template>
  <div class="search-input">
    <input
      type="text"
      @input="searchQueryVal"
      placeholder="Поиск..."
    >
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      setSearchQuery: 'products/setSearchQuery',
    }),
    // Связываем поле поиска с ключом searchQuery в vuex
    searchQueryVal(event) {
      this.setSearchQuery(event.target.value)
    }
  },

  computed: {
    ...mapState({
      searchQuery: state => state.products.searchQuery,
    })
  }
}
</script>

<style lang="scss" scoped>
  .search-input {
    width: 100%;
    margin-right: 20px;

    input {
      font-size: 16px;

      &::placeholder {
        font-size: 16px;
        color: #B4B4B4;
      }
    }
  }

  @media screen and (max-width: 480px) {
    .search-input {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
</style>