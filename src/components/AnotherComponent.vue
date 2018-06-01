<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>blh blah blah</h2>
  </div>
</template>

<script>
export default {
  name: 'AnotherComponent',
  data () {
    return {
      msg: 'Another component',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  border: 1px dashed green;
  margin: 10px;
}
</style>
