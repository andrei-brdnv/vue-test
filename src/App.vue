<template>
    <router-view></router-view>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  *,
  *:after,
  *:before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
    outline: none;
  }

  html {
    height: 100%;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: darkgrey;
    }
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    font-family: "Source Code Pro", sans-serif;
    background: #FAF9F7;

    text-rendering: optimizeLegibility;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: "liga" on;

    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  #app {
    width: 100%;
    height: 100%;
  }

  h3 {
    font-weight: 600;
    font-size: 28px;
    color: #3F3F3F;
  }

  input,
  textarea {
    font-family: "Source Sans Pro", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 36px;

    padding: 10px 16px;
    height: 36px;
    width: 100%;
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
</style>
