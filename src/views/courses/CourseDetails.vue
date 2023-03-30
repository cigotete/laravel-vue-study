<template>
  <div>
    <h1>Course Details</h1>
    <p>{{ course.title }}</p>
    <p>{{ course.description }}</p>

    <div v-if="course.category">
      Category: {{ course.category.name }}
    </div>
    <div v-if="course.user">
      User: {{ course.user.name }}
    </div>
    <p>
      <router-link v-if="auth && course.user.id == auth.user.id" :to="{name: 'courseEdit'}">
        Edit Course
      </router-link>
    </p>

  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  data() {
    return {
      course: {}
    }
  },
  computed: {
    ...mapState(['auth'])
  },
  created() {
    this.getCourse();
  },
  methods: {
    getCourse() {
      this.axios.get('/courses/' + this.$route.params.id + '?included=category,user')
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