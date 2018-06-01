<template>
  <div id="app">
    <img src="./assets/logo.png" width="50px">
    <router-link to="/">Users</router-link> |
    <router-link to="/AnotherComponent">Some other component</router-link> 
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  margin: 20px;
  border: 1px dashed red;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
div {
  padding: 5px;
}
</style>
