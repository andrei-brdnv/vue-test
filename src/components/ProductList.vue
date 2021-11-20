<template>
  <div class="product-list" v-if="products.length > 0">
    <transition-group name="product-list">
      <product-card
          v-for="product in products"
          :key="product.id"
          :product="product"
      />
    </transition-group>
    <h3 v-if="products.length === 0">
      Нет товаров
    </h3>
  </div>
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
</style>