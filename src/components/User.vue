<template>
  <div class='user'>
    <p>{{ msg }} {{ userObj.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'IndividualUser',
  props: [ 'userObj' ],
  data () {
    return {
      msg: 'Hi, my name is',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user {
  border: 1px dashed black;
  margin: 10px;
}
</style>
