
import CoursesList from './views/courses/CoursesList.vue';

<template>
  <div class="container">
    <nav class="navigation">
      <router-link to="/">Home</router-link> |
      <router-link :to="{name: 'coursesList'}">Courses</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </div>
  <router-view/>
</template>

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
