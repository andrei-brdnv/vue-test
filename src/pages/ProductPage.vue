<template>
  <!-- Страница товара -->
  <div class="product-page">
    <div @click="$router.push('/')">
      <font-awesome-icon icon="arrow-left" />
    </div>

    <h3>Страница товара с id = {{ $route.params.id }}</h3>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowLeft)

export default {

}
</script>

<style lang="scss" scoped>
  .product-page {
    padding: 32px;

    h3 {
      font-size: 20px;
      padding: 20px 0;
    }
  }
</style>