<template>
  <div>
    <h1>Courses List</h1>
    <ul>
      <li v-for="course in courses" :key="course.id">
        <router-link :to="{name: 'courseDetails', params: { id: course.id }}">{{ course.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: []
    }
  },

  created() {
    this.getCourses();
  },

  methods: {
    getCourses() {
      this.axios.get('http://laravel-study-vue-api-backend.test/api/courses')
        .then(response => {
          this.courses = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
}
</script>

<style>

</style>