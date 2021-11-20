<template>
  <div class="product-card" @click="$router.push(`/products/${product.id}`)">
    <img class="product-image" :src=product.image :alt=product.title />
    <div class="product-info">
      <div class="product-title">{{ product.title }}</div>
      <div class="product-description">{{ product.description }}</div>
      <div class="product-price">{{ product.price }} руб.</div>
    </div>
    <div class="delete-icon" @click.stop="removeProduct">
      <font-awesome-icon :icon="['far', 'trash-alt']" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

library.add(faTrashAlt)

export default {
  props: {
    product: {
      type: Object,
      required: true,
    }
  },

  methods: {
    ...mapMutations({
      deleteProduct: 'products/deleteProduct'
    }),
    removeProduct() {
      this.deleteProduct(this.product)
    }
  }
}
</script>

<style lang="scss" scoped>
  .product-card {
    font-family: "Source Sans Pro", sans-serif;
    font-style: normal;
    font-weight: normal;

    text-align: left;
    position: relative;
    cursor: pointer;

    background: #FFFEFB;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    &:hover {
      .delete-icon {
        display: flex;
      }
    }
  }

  .product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }

  .product-info {
    padding: 16px;
  }

  .product-title {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;

    margin-bottom: 16px;
    color: #3F3F3F;
  }

  .product-description {
    font-size: 16px;
    line-height: 20px;

    color: #3F3F3F;
    margin-bottom: 50px;
  }

  .product-price {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;

    color: #3F3F3F;
    position: absolute;
    bottom: 16px;
    left: 16px;
  }

  .delete-icon {
    display: none;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -6px;
    right: -6px;

    width: 32px;
    height: 32px;
    cursor: pointer;
    background-color: #FF8484;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    svg {
      color: #ffffff;
    }
  }
</style>