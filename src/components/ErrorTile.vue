<template>
  <div class='error'>
    <strong>Error: request failed with status code {{ errorObj.response.status }}</strong>
    <pre>{{ errorObj }}</pre>
  </div>
</template>

<script>
export default {
  name: 'ACardRepresentingError',
  props: [ 'errorObj' ],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  border: 1px solid red;
  background-color: pink;
  margin: 10px;
}
strong {
  font-size: small;
}
pre {
  font-size: x-small;
}
</style>
