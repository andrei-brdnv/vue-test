<template>
  <div class="container">
    <product-form />
    <div class="main-content">

      <div class="main-upper">
        <search-input />
        <custom-select
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
          :options="sortOptions"
        />
      </div>

      <product-list
          :products="sortedAndSearchedProducts"
      />
    </div>
  </div>
</template>

<script>
import ProductForm from "@/components/ProductForm";
import ProductList from "@/components/ProductList";
import SearchInput from "@/components/SearchInput";
import CustomSelect from "@/components/UI/CustomSelect";
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  components: { ProductForm, ProductList, SearchInput, CustomSelect },

  methods: {
    ...mapMutations({
      setSelectedSort: 'products/setSelectedSort',
      setSearchQuery: 'products/setSearchQuery',
    }),
  },

  computed: {
    ...mapState({
      products: state => state.products.products,
      selectedSort: state => state.products.selectedSort,
      sortOptions: state => state.products.sortOptions,
    }),
    ...mapGetters({
      sortedProducts: 'products/sortedProducts',
      sortedAndSearchedProducts: 'products/sortedAndSearchedProducts',
    }),
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    padding: 32px;
  }

  .main-content {
    width: 100%;
    padding-left: 372px;
  }

  .main-upper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
  }
</style>