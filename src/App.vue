
import CoursesList from './views/courses/CoursesList.vue';

<template>
  <div class="container">
    <nav class="navigation">
      <router-link to="/">Home</router-link> |
      <router-link :to="{name: 'coursesList'}">Courses</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{name: 'dashboard'}">Dashboard</router-link>
    </nav>
  </div>

  <div v-if="auth" class="mb-3 mt-3">
    <button class="btn btn-danger">
      Close session
    </button>
  </div>

  <div v-else>
    <nav class="navigation">
      <router-link :to="{name: 'login'}">Login</router-link> |
      <router-link :to="{name: 'register'}">Register</router-link>
    </nav>
  </div>
  <router-view/>
</template>

<script>

import { mapState, mapActions } from 'vuex';

export default {

  created() {
    this.setAuth();
  },

  computed: {
    ...mapState(['auth']),
  },

  methods: {
    ...mapActions([
      'setAuth'
    ]),
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navigation {
  padding: 10px;
}

.navigation a {
  font-weight: bold;
  color: #2c3e50;
}

.navigation a.router-link-exact-active {
  color: #42b983;
}
</style>
