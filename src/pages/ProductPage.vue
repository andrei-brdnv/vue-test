<template>
  <!-- Страница товара -->
  <div class="product-page">
    <div class="product-page_arrow-icon" @click="$router.push('/')">
      <font-awesome-icon icon="arrow-left" />
    </div>

    <div class="product-page_content">
      <h3>Страница товара с id: {{ $route.params.id }}</h3>
      <img
          class="product-page_image"
          :src="product.image"
          :alt="product.title"
      />
      <div class="product-page_title">{{ product.title }}</div>
      <div class="product-page_description">{{ product.description }}</div>
      <div class="product-page_price">{{ priceWithThousandthSpaces }} &#8381;</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowLeft)

export default {
  computed: {
    ...mapState({
      products: state => state.products.products,
    }),
    product() {
      // Фильтруем список товаров по this.$route.params.id
      const p = this.products.filter(product => product.id === Number(this.$route.params.id))
      // Получаем доступ к Proxy https://stackoverflow.com/questions/66605274/accessing-a-proxy-object-in-vue3
      return JSON.parse(JSON.stringify(...p))
    },
    // Разделяем сумму на тысячные для корректного отображения в карточке товара
    priceWithThousandthSpaces() {
      return this.product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }
  },
}
</script>

<style lang="scss" scoped>
  .product-page {
    display: flex;
    flex-direction: column;

    max-width: 500px;
    margin: 0 auto;
    padding: 12px;

    &_arrow-icon {
      font-size: 30px;
      cursor: pointer;

      svg {
        color: #90a4ae;
      }
    }

    h3 {
      font-size: 20px;
      padding: 20px 0;
    }

    &_content {
      font-family: "Source Sans Pro", sans-serif;
      font-style: normal;
      font-weight: normal;
      text-align: left;

      width: 100%;
    }

    &_image {
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: 5px;
      margin-bottom: 20px;
    }

    &_title {
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;

      margin-bottom: 20px;
      color: #3F3F3F;
    }

    &_description {
      font-size: 18px;
      line-height: 24px;

      color: #3F3F3F;
      margin-bottom: 20px;
    }

    &_price {
      font-weight: 600;
      font-size: 24px;

      color: #3F3F3F;
    }
  }

  @media screen and (max-width: 480px) {
    .product-page {

      &_image {
        max-height: 30vh;
      }
    }
  }
</style>