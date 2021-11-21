<template>
    <select @change="handleOptionChange">
      <option selected hidden>По умолчанию</option>
      <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
</template>

<script>
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
  select {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 14px;

    padding: 0 10px;
    height: 36px;
    line-height: 36px;
    cursor: pointer;

    border: 1px solid transparent;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    color: #B4B4B4;
  }

  option {
    -webkit-appearance:none;
    -moz-appearance:none;
    appearance:none;
  }

  @media screen and (max-width: 480px) {
    select {
      width: 100%;
    }
  }
</style>