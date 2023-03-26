<template>
  <div>
    <h1>Course Details</h1>
    <p>{{ course.title }}</p>
    <p>{{ course.description }}</p>

    <div v-if="course.category">
      Category: {{ course.category.name }}
    </div>
    <p>
      <router-link :to="{name: 'courseEdit', params: { id: course.id}}">
        Edit Course
      </router-link>
    </p>

  </div>
</template>

<script>
export default {
  data() {
    return {
      course: {}
    }
  },
  created() {
    this.getCourse();
  },
  methods: {
    getCourse() {
      this.axios.get('http://laravel-study-vue-api-backend.test/api/courses/' + this.$route.params.id + '?included=category')
        .then(response => {
          this.course = response.data;
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