<template>
  <div class="custom-select">
    <select @change="handleOptionChange">
      <option selected>По умолчанию</option>
      <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
    <span class="custom-select_arrow">
      <font-awesome-icon icon="angle-down" />
    </span>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleDown)

export default {
  name: 'custom-select',

  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    handleOptionChange(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .custom-select {
    position: relative;

    select {
      font-family: "Source Sans Pro", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: normal;

      padding: 0 40px 0 16px;
      height: 36px;
      line-height: 36px;

      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      border: 0;
      background: #FFFEFB;
      border-radius: 4px;
      color: #B4B4B4;
      cursor: pointer;

      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    &_arrow {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: left;

      background: #FFFEFB;
      height: 36px;
      line-height: 36px;
      width: 26px;
      pointer-events: none;

      svg {
        font-size: 16px;

        position: absolute;
        top: 50%;
        transform: translateY(-40%);
        color: #B4B4B4;
      }
    }

    option:checked {
      display: none;
    }
  }


  @media screen and (max-width: 480px) {
    .custom-select {
      width: 100%;

      select {
        width: 100%;
      }
    }
  }
</style>