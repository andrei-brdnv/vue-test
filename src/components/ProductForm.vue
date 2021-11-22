<template>
  <!-- Динамический класс для показа формы добавления товара на мобильных устройствах -->
  <div :class="[isMobileFormOpened ? 'active' : '', 'product-form']" v-click-outside="onClickOutside">
    <div class="product-form_header">
      <h3>Добавление товара</h3>
      <div class="product-form_close-icon">
        <!-- Иконка закрытия формы на мобильных устройствах -->
        <font-awesome-icon
            icon="times"
            @click="closeMobileForm"
        />
      </div>
    </div>
    <!-- Основной блок формы -->
    <form class="product-form_form" @submit.prevent="submit">
      <!-- Элемент поля добавления наименования товара product.title -->
      <p class="product-form_form-item">
        <label :for=product.title>Наименование товара</label>
        <input
            :class="[errors.title.length ? 'error' : '', 'product-form_form-input']"
            v-model="product.title"
            @input="validateTitle"
            type="text"
            placeholder="Введите наименование товара"
        />
        <span class="product-form_form-error" v-if="errors.title">{{ errors.title[0] }}</span>
      </p>
      <!-- Элемент поля добавления описания товара product.description -->
      <p class="product-form_form-item">
        <label :for="product.description">Описание товара</label>
        <textarea
            class="product-form_form-textarea"
            v-model="product.description"
            placeholder="Введите описание товара"
        >
        </textarea>
      </p>
      <!-- Элемент поля добавления изображения товара product.image -->
      <p class="product-form_form-item">
        <label :for="product.description">Ссылка на изображение товара</label>
        <input
            :class="[errors.image.length ? 'error' : '', 'product-form_form-input']"
            v-model="product.image"
            @input="validateImage"
            type="text"
            placeholder="Введите ссылку"
        />
        <span class="product-form_form-error" v-if="errors.image">{{ errors.image[0] }}</span>
      </p>
      <!-- Элемент поля добавления цены товара product.price -->
      <p class="product-form_form-item">
        <label :for="product.price">Цена товара</label>
        <input
            :class="[errors.price.length ? 'error' : '', 'product-form_form-input']"
            v-model="product.price"
            @input="validatePrice"
            v-maska="formattedInputPrice"
            type="text"
            placeholder="Введите цену"
        />
        <span class="product-form_form-error" v-if="errors.price">{{ errors.price[0] }}</span>
      </p>

      <button class="product-form_form-submit-button" type="submit" value="">Добавить товар</button>
      <!-- Сообщение об успешном добавлении товара -->
      <transition name="message">
        <div
            v-if="isProductCreated"
            class="product-form_success-message"
        >
          Товар успешно добавлен в список
        </div>
      </transition>
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
    // Маска для поля ввода цены
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
      isMobileFormOpened: state => state.products.isMobileFormOpened,
      isProductCreated: state => state.products.isProductCreated
    }),
  },

  methods: {
    ...mapMutations({
      createProduct: 'products/createProduct',
      setIsMobileFormOpened: 'products/setIsMobileFormOpened',
      setIsProductCreated: 'products/setIsProductCreated',
    }),
    // Используем клик вне области формы, чтобы сбросить сообщения об ошибках в инпутах
    onClickOutside() {
      Object.keys(this.errors).map(key => this.errors[key] = [])
    },
    // Обработка закрытия формы на мобильных устройствах, возвращение скролла на body
    closeMobileForm() {
      this.setIsMobileFormOpened(false)
      document.body.style.overflow = 'auto'
    },
    // Валидация названия товара
    validateTitle(event) {
      const { value } = event.target
      this.errors.title = []
      this.product.title = value

      if (!value) this.errors.title.push('Поле является обязательным')
    },
    // Валидация изображения товара
    validateImage(event) {
      const { value } = event.target
      this.errors.image = []
      // Проверяем, что в поле добавлен только URL
      const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      // Если поле ещё пустое, показываем сообщение об ошибке
      if (!value) this.errors.image.push('Поле является обязательным')
      // Если не добавлен URL, показываем сообщение об ошибке
      if (!pattern.test(value)) this.errors.image.push('Пожалуйста, добавьте ссылку')
    },
    // Валидация цены товара
    validatePrice(event) {
      let { value } = event.target
      this.errors.price = []

      if (!value) this.errors.price.push('Поле является обязательным')
      // Проверяем, что введены только числа, иначе показываем сообщение об ошибке
      // if (!value.match(/^[0-9]+$/)) this.errors.price.push('Пожалуйста, введите числа')
    },

    submit() {
      // Проверяем если мы ничего не ввели и объект ошибки ещё пустой, то добавляем сообщение об ошибке к каждому полю соответственно
      if (!this.product.title && !this.errors.title.length) this.errors.title.push('Поле является обязательным')
      if (!this.product.image && !this.errors.image.length) this.errors.image.push('Поле является обязательным')
      if (!this.product.price && !this.errors.price.length) this.errors.price.push('Поле является обязательным')

      if (this.product.title && this.product.image && this.product.price && !this.errors.image.length) {
        this.product.id = Date.now()
        // В массив данных добавляем сумму без пробела
        this.product.price = this.product.price.replace(/\s/g, '')

        this.createProduct(this.product)
        // Показываем сообщение в течение 3 секунд об успешном добавлении под кнопкой добавить товар
        this.setIsProductCreated(true)
        setTimeout(() => {
          this.setIsProductCreated(false)
        }, 3000)
        // Сбрасываем поля ввода
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
  .product-form {
    position: fixed;

    &_header {
      margin-bottom: 20px;

      h3 {
        line-height: 36px;
      }
    }

    &_close-icon {
      display: none;
    }

    &_form {
      display: flex;
      flex-direction: column;
      padding: 24px 24px 14px 24px;
      width: 340px;

      font-family: "Source Sans Pro", sans-serif;
      font-style: normal;
      font-weight: normal;

      background: #FFFEFB;
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
      border-radius: 4px;
    }

    &_form-item {
      display: flex;
      flex-direction: column;
      position: relative;
      margin-bottom: 24px;
    }

    &_form-item:last-of-type {
      margin-bottom: 32px;
    }
    // Ставим красную точку у названий всех полей ввода кроме textarea
    &_form-item:not(:nth-child(2)) label::after {
      content: "\2022";
      position: absolute;
      top: -5px;

      color: $lightred;
    }

    label {
      display: block;
      margin-bottom: 8px;
      font-size: 15px;
      line-height: 15px;
      color: #49485E;
      position: relative;
    }

    &_form-input {

      &.error {
        border: 1px solid $lightred;
      }
    }

    &_form-textarea {
      line-height: 18px;
      resize: vertical;
      min-height: 100px;
      max-height: 200px;

      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: darkgrey;
      }
    }

    &_form-error {
      position: absolute;
      top: 62px;
      left: 0;
      font-size: 12px;
      color: $lightred;
    }

    &_form-submit-button {
      font-family: "Inter", sans-serif;
      font-size: 14px;
      line-height: 14px;

      height: 36px;
      margin-bottom: 10px;
      border: none;
      cursor: pointer;
      color: #FFFFFF;
      background-color: #7BAE73;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 10px;

      &:hover {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        transform: scale(1.015);
      }

      &:active {
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
        transform: scale(.999);
      }
    }

    &_success-message {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      width: 100%;
      text-align: center;

      background: linear-gradient(to right, #388e3c 40%, #fff9c4 48%, #fff9c4 52%, #388e3c 60%);
      background-size: 200% auto;
      animation: shine 3s linear 1s 1;

      @keyframes shine {
        to {
          background-position: 200% center;
        }
      }

      color: white;
      background-clip: content-box;
      text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    // transition для сообщения внизу формы об успешном добавлении товара
    .message-enter-active,
    .message-leave-active {
      transition: opacity 0.75s ease-out;
    }

    .message-enter-from,
    .message-leave-to {
      opacity: 0;
    }
  }

  @media screen and (max-width: 768px) {
    .product-form {
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

      &.active {
        transform: translateX(0);
        opacity: 1;
      }

      &_header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 12px;
        margin-bottom: 0;

        h3 {
          font-size: 20px;
        }
      }

      &_close-icon {
        display: block;
        padding: 10px;
        font-size: 20px;
        color: #3F3F3F;
      }

      &_form {
        width: 100%;
        min-height: 100vh;
        padding: 12px;
      }
    }
  }
</style>