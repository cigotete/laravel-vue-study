<template>
  <h1>Create a Course</h1>
  <div>
    <form @submit.prevent="saveCourse">
      <div>
        <label for="title">Course Title</label>
        <br>
        <input v-model="course.title" type="text" id="title" name="title" placeholder="Course Title">
      </div>
      <br>
      <div>
        <label for="description">Course Description</label>
        <br>
        <textarea v-model="course.description" id="description" cols="30" rows="10" placeholder="Course Description"></textarea>
      </div>
      <br>
      <div>
        <label for="category">Category</label>
        <br>
        <select id="category" v-model="course.category_id">
          <option value="" selected disabled>Select a Category</option>
          <option v-for="category in categories" :key="'category-' + category.id" :value="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>
      <br>
      <div>
        <button type="submit">Create a Course</button>
      </div>
    </form>
    {{  course }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
      course: {
        title: '',
        description: '',
        category_id: '',
      }
    }
  },

  created() {
    this.getCategories();
  },

  methods: {
    getCategories() {
      this.axios.get('http://laravel-study-vue-api-backend.test/api/categories')
        .then(response => {
          this.categories = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    saveCourse() {
      this.axios.post('http://laravel-study-vue-api-backend.test/api/courses', this.course)
        .then(response => {
          this.course = {
            title: '',
            description: '',
            category_id: '',
          };
          console.log(response);
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