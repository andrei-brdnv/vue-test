<template>
  <div class="main-page">
    <div
        class="main-page_open-form-icon"
        @click="openMobileForm"
    >
      <font-awesome-icon icon="plus" />
    </div>

    <product-form />
    <div class="main-page_content">

      <div class="main-page_content-header">
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
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus)

export default {
  components: { ProductForm, ProductList, SearchInput, CustomSelect },

  methods: {
    ...mapMutations({
      setSelectedSort: 'products/setSelectedSort',
      setSearchQuery: 'products/setSearchQuery',
      setIsMobileFormOpened: 'products/setIsMobileFormOpened',
    }),
    openMobileForm() {
      this.setIsMobileFormOpened(true)
      document.body.style.overflow = 'hidden'
    }
  },

  computed: {
    ...mapState({
      products: state => state.products.products,
      selectedSort: state => state.products.selectedSort,
      sortOptions: state => state.products.sortOptions,
      //isMobileFormOpened: state => state.products.isMobileFormOpened
    }),
    ...mapGetters({
      sortedProducts: 'products/sortedProducts',
      sortedAndSearchedProducts: 'products/sortedAndSearchedProducts',
    }),
  }
}
</script>

<style lang="scss" scoped>
  .main-page {
    display: flex;
    padding: 32px;

    &_open-form-icon {
      display: none;
    }

    &_content {
      width: 100%;
      padding-left: 372px;
    }

    &_content-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 20px;
    }
  }

  /*.main-content {
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

  .open-form-button {
    display: none;
  }*/

  @media screen and (max-width: 768px) {
    .main-page {
      position: relative;
      flex-direction: column;
      padding: 32px 12px;
      width: 100%;

      &_open-form-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #90a4ae;
        margin-bottom: 20px;

        svg {
          font-size: 20px;
          color: #3F3F3F;
        }
      }

      &_content {
        width: 100%;
        padding-left: 0;
      }
    }
    /*.open-form-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #90a4ae;
      margin-bottom: 20px;

      svg {
        font-size: 20px;
        color: #3F3F3F;
      }
    }*/

    /*.container {
      position: relative;
      flex-direction: column;
      width: 100%;
    }

    .main-content {
      width: 100%;
      padding-left: 0;
    }*/
  }

  @media screen and (max-width: 480px) {
    .main-page {

      &_content-header {
        flex-direction: column;
      }
    }
  }
</style>