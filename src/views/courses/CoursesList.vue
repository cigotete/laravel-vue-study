<template>
  <div>
    <h1>Courses List</h1>
    <p><router-link :to="{name: 'courseCreate'}">Create a Course</router-link></p>
    <br>
    <ul style="list-style: none;">
      <li style="text-align: left;" v-for="course in courses" :key="course.id">
        <router-link :to="{name: 'courseDetails', params: { id: course.id }}">{{ course.title }}</router-link>
        <button @click="deleteCourse(course.id)" class="btn btn-danger btn-sm">Delete</button>
        &nbsp;
        <router-link :to="{name: 'courseEdit', params: { id: course.id}}">
          <button class="btn btn-primary btn-sm">Edit</button>
        </router-link>
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
    deleteCourse(id) {
      this.axios.delete('http://laravel-study-vue-api-backend.test/api/courses/' + id)
        .then(() => {
          this.getCourses();
          //this.courses = this.courses.filter(course => course.id !== id);
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