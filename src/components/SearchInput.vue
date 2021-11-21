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
  }

  input {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 16px;

    width: 100%;
    padding: 10px 16px;
    background: #FFFEFB;
    border: none;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    height: 36px;
    line-height: 36px;

    &:focus,
    &:hover {
      outline: none;
    }

    &::placeholder {
      font-size: 16px;
      color: #B4B4B4;
    }
  }

  @media screen and (max-width: 480px) {
    .search-input {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
</style>