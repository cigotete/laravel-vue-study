<template>
  <h1>Create a Course</h1>
  <div>
    <!--
    <div v-if="errors">
        <div v-for="(messages, field) in errors" :key="field">
            <span v-for="(message, index) in messages" :key="index">{{ message }}</span>
        </div>
    </div>
    -->
    <div v-if="errors">
      <div v-for="(error, index) in errors" :key="index">{{ error }}</div>
    </div>

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
      },
      errors: [],
    }
  },

  created() {
    this.getCategories();
  },

  methods: {
    getCategories() {
      this.axios.get('/api/categories')
        .then(response => {
          this.categories = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    saveCourse() {
      this.axios.post('/api/courses', this.course)
        .then(response => {
          this.course = {
            title: '',
            description: '',
            category_id: '',
          };
          console.log(response);
          this.errors = [];
        })
        .catch(error => {
          //this.errors = error.response.data.errors; // Commented html related
          this.errors = Object.values(error.response.data.errors).flat();
        });
    },
  },
}
</script>

<style>

</style>