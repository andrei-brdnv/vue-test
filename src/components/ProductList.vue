<template>
  <div class="product-list" v-if="products.length > 0">
    <transition-group name="product-list">
      <product-card
          v-for="product in products"
          :key="product.id"
          :product="product"
      />
    </transition-group>
  </div>
  <h3 v-if="products.length === 0">
    В списке больше нет товаров
  </h3>
</template>

<script>
import ProductCard from "@/components/ProductCard";

export default {
  components: { ProductCard },

  props: {
    products: {
      type: Array,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
  .product-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    grid-gap: 20px;

    width: 100%;
  }

  h3 {
    font-size: 20px;
    text-align: center;
    margin: 50px 0;
  }

  // Transition Group
  .product-list-enter-active {
    transition: all 0.5s ease-out;
  }

  .product-list-leave-active {
    transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .product-list-leave-to {
    transform: translateY(-1000px);
    opacity: 0;
  }

  .product-list-enter-from {
    transform: scale(0.15);
    opacity: 0;
  }

  .product-list-move {
    transition: transform 0.5s ease-out;
  }
</style>