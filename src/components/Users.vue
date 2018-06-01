<template>
  <div class='users'>
    <h1>Users</h1>
    <p>API URL: {{curUrl}}</p>
    <button v-on:click='getUsers'>Refresh users</button>
    <template v-if='error == null'>
      <my-awesome-user 
        v-for='person in people' 
        v-bind:key='person.id' 
        v-bind:userObj='person'
      ></my-awesome-user>
    </template>
    <template v-else>
      <error-tile v-bind:errorObj='error'></error-tile>
    </template>
  </div>
</template>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script>
import AnIndividualUser from './User.vue'
import ErrorTile from './ErrorTile.vue'

function getUrl() {
  let url = 'https://jsonplaceholder.typicode.com/users';
  if (Math.floor(Math.random() * 2) > 0) // Randomly generate 0 or 1
    url = url + '_NO_SUCH_FILE'; // Create an invalid url in ~half the case so we could test the error flow  
  return url;
}

export default {
  name: 'ListOfUsers',
  components: {
    'my-awesome-user': AnIndividualUser,
    'error-tile': ErrorTile,
  },
  mounted() {
    this.getUsers();
  },  
  methods: {
    getUsers: function() {
      this.curUrl = getUrl();
      axios.get(this.curUrl)
        // .then(response => console.log(JSON.stringify(response.data, null, '\t')))
        .then(response => { this.people = response.data; this.error = null; })
        .catch(error => { this.people =  null; this.error = error; console.log(error); });
    },
  },
  data () {
    return {
      curUrl: '',
      people: null,
      error: null,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.users {
  border: 1px dashed blue;
  margin: 10px;
}
button {
  margin: 10px;
}
</style>
