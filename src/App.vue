<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
  * {
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
  }

  html, body {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: fixed;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #001E32;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    overflow-y: hidden;
  }


</style>
