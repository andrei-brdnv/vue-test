<template>
  <!-- Главная страница -->
  <div class="main-page">
    <!-- Иконка показа формы для добавления на мобильных устройствах -->
    <div
      class="main-page_open-form-icon"
      @click="openMobileForm"
    >
      <font-awesome-icon icon="plus" />
    </div>
    <!-- Компонента формы -->
    <product-form />

    <div class="main-page_content">
      <!-- Верхняя часть страницы с поиском и селектом -->
      <div class="main-page_content-header">
        <search-input />
        <custom-select
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
          :options="sortOptions"
        />
      </div>
      <!-- Список товаров -->
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
import { mapState, mapGetters, mapMutations } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus)

export default {
  components: { ProductForm, ProductList, SearchInput },

  methods: {
    ...mapMutations({
      setSelectedSort: 'products/setSelectedSort',
      setIsMobileFormOpened: 'products/setIsMobileFormOpened',
    }),
    // Функция открытия формы на мобильных устройствах по клику на иконку main-page_open-form-icon
    openMobileForm() {
      this.setIsMobileFormOpened(true)
      document.body.style.overflow = 'hidden'
    }
  },

  computed: {
    ...mapState({
      // Передаём в UI компоненту CustomSelect. Связываем выбранную option c vuex
      selectedSort: state => state.products.selectedSort,
      // Передаём в UI компоненту CustomSelect массив options
      sortOptions: state => state.products.sortOptions,
    }),
    ...mapGetters({
      // Передаём в компоненту ProductList, уже отсортированные товары по селекту и поиску
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
  }

  @media screen and (max-width: 480px) {
    .main-page {

      &_content-header {
        flex-direction: column;
      }
    }
  }
</style>