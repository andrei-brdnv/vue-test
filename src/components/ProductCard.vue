<template>
  <div class="product-card" @click="$router.push(`/products/${product.id}`)">
    <img class="product-card_image" :src=product.image :alt=product.title />
    <div class="product-card_content">
      <div class="product-card_title">{{ product.title }}</div>
      <div class="product-card_description">{{ product.description }}</div>
      <div class="product-card_price">{{ priceWithThousandthSpaces }} руб.</div>
    </div>
    <div class="product-card_delete-icon" @click.stop="removeProduct">
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
    },
  },

  computed: {
    // Разделяем сумму на тысячные для корректного отображения в карточке товара
    priceWithThousandthSpaces() {
      return this.product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
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
    transition: transform 0.3s ease-out;

    &:hover {
      transform: scale(1.015);

      .product-card_delete-icon {
        display: flex;
      }
    }

    &_image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 5px 5px 0 0;
    }

    &_content {
      padding: 16px;
    }

    &_title {
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;

      margin-bottom: 16px;
      color: #3F3F3F;
    }

    &_description {
      font-size: 16px;
      line-height: 20px;

      color: #3F3F3F;
      margin-bottom: 50px;
    }

    &_price {
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;

      color: #3F3F3F;
      position: absolute;
      bottom: 16px;
      left: 16px;
    }

    &_delete-icon {
      display: none;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: -6px;
      right: -6px;

      width: 32px;
      height: 32px;
      cursor: pointer;
      background-color: $lightred;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      transition: box-shadow 0.15s ease-out;

      &:hover {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.65);

        svg {
          transform: scale(1.15);
        }
      }

      &:active {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.85);
        transform: scale(.95);
      }

      svg {
        color: #ffffff;
        transition: transform 0.15s ease-out;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .product-card {

      &_delete-icon {
        display: flex;
      }
    }
  }
</style>