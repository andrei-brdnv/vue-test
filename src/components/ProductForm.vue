<template>
  <div
      :class="[isMobileFormOpened ? 'active' : '', 'form-container']"
  >
    <div class="form-header">
      <h3>Добавление товара</h3>
      <div class="close-form-button">
        <font-awesome-icon
            icon="times"
            @click="closeMobileForm"
        />
      </div>

    </div>


    <form class="form" @submit.prevent="submit">
      <p class="form-item">
        <label :for=product.title>Наименование товара</label>
        <input
            :class="[errors.title.length ? 'error' : '', 'form-input']"
            v-model="product.title"
            @input="validateTitle"
            type="text"
            placeholder="Введите наименование товара"
        />
        <span class="form-error" v-if="errors.title">{{ errors.title[0] }}</span>
      </p>

      <p class="form-item">
        <label :for="product.description">Описание товара</label>
        <textarea
            class="form-textarea"
            v-model="product.description"
            placeholder="Введите описание товара"
        >
        </textarea>
      </p>

      <p class="form-item">
        <label :for="product.description">Ссылка на изображение товара</label>
        <input
            :class="[errors.image.length ? 'error' : '', 'form-input']"
            v-model="product.image"
            @input="validateImage"
            type="text"
            placeholder="Введите ссылку"
        />
        <span class="form-error" v-if="errors.image">{{ errors.image[0] }}</span>
      </p>

      <p class="form-item">
        <label :for="product.price">Цена товара</label>
        <input
            :class="[errors.price.length ? 'error' : '', 'form-input']"
            v-model="product.price"
            @input="validatePrice"
            v-maska="formattedInputPrice"
            type="text"
            placeholder="Введите цену"
        />
        <span class="form-error" v-if="errors.price">{{ errors.price[0] }}</span>
      </p>

      <button class="submit-button" type="submit" value="">Добавить товар</button>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapState} from "vuex";
import formattedInputPrice from "@/utils/formattedInputPrice";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes)

export default {
  data: () => ({
    formattedInputPrice,
    product: {
      title: null,
      description: null,
      image: null,
      price: null,
    },
    errors: {
      title: [],
      image: [],
      price: []
    }
  }),

  computed: {
    ...mapState({
      isMobileFormOpened: state => state.products.isMobileFormOpened
    }),
  },

  methods: {
    ...mapMutations({
      createProduct: 'products/createProduct',
      setIsMobileFormOpened: 'products/setIsMobileFormOpened',
    }),

    closeMobileForm() {
      this.setIsMobileFormOpened(false)
      document.body.style.overflow = 'auto'
    },

    validateTitle(event) {
      const { value } = event.target
      this.errors.title = []

      if (!value) this.errors.title.push('Поле является обязательным')
    },

    validateImage(event) {
      const { value } = event.target
      this.errors.image = []

      const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

      if (!value) this.errors.image.push('Поле является обязательным')
      if (!pattern.test(value)) this.errors.image.push('Пожалуйста, добавьте ссылку')
    },

    validatePrice(event) {
      let { value } = event.target
      this.errors.price = []

      if (!value) this.errors.price.push('Поле является обязательным')
      //this.product.price.replace(/\s/g, '')
      // if (!value.match(/^[0-9]+$/)) this.errors.price.push('Пожалуйста, введите числа')
    },

    submit() {
      if (!this.product.title) this.errors.title.push('Поле является обязательным')
      if (!this.product.image) this.errors.image.push('Поле является обязательным')
      if (!this.product.price) this.errors.price.push('Поле является обязательным')

      if (this.product.title && this.product.image && this.product.price) {
        this.product.id = Date.now()
        this.product.price = this.product.price.replace(/\s/g, '')

        this.createProduct(this.product)

        this.product = {
          title: null,
          description: null,
          image: null,
          price: null,
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  .form-container {
    position: fixed;
  }

  .form-header {
    margin-bottom: 20px;

    h3 {
      line-height: 36px;
    }

    .close-form-button {
      display: none;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    padding: 24px;
    width: 340px;

    font-family: "Source Sans Pro", sans-serif;
    font-style: normal;
    font-weight: normal;

    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
  }

  .form-item {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 24px;
  }

  .form-item:not(:nth-child(2)) label::after {
    content: "\2022";
    position: absolute;
    top: -5px;

    color: #FF8484;
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 15px;
    line-height: 15px;
    color: #49485E;
    position: relative;
  }

  .form-input,
  .form-textarea {
    font-family: "Source Sans Pro", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 36px;

    padding: 10px 16px;
    height: 36px;
    border: 1px solid transparent;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    &:focus,
    &:hover {
      outline: none;
    }

    &::placeholder {
      font-size: 14px;
      color: #B4B4B4;
    }
  }

  .form-input {
    &.error {
      border: 1px solid #FF8484;
    }
  }

  .form-textarea {
    line-height: 18px;
    resize: vertical;
    min-height: 100px;
    max-height: 200px;
  }

  .form-error {
    position: absolute;
    top: 62px;
    left: 0;
    font-size: 12px;
    color: #FF8484;
  }

  .submit-button {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    line-height: 14px;

    height: 36px;
    border: none;
    cursor: pointer;
    color: #FFFFFF;
    background-color: #7BAE73;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  @media screen and (max-width: 768px) {
    .form-container {
      transform: translateX(-100%);
      top: 0;
      left: 0;
      right: 0;
      z-index: 10;
      width: 100%;
      height: 100vh;
      background: #FFFEFB;
      opacity: 0.75;
      padding-top: 32px;
      transition: all 0.3s ease-out;
    }

    .form-container.active {
      transform: translateX(0);
      opacity: 1;
    }

    .form-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 12px;
      margin-bottom: 0;

      h3 {
        font-size: 20px;
      }

      .close-form-button {
        display: block;
        padding: 10px;
        font-size: 20px;
        color: #3F3F3F;
      }
    }

    .form {
      width: 100%;
      height: 100%;
      padding: 12px;
    }
  }
</style>