<template>
  <h1>Create a Course</h1>
  <div>
    <form>
      <div>
        <label for="title">Course Title</label>
        <br>
        <input type="text" id="title" name="title" placeholder="Course Title">
      </div>
      <br>
      <div>
        <label for="description">Course Description</label>
        <br>
        <textarea id="description" cols="30" rows="10" placeholder="Course Description"></textarea>
      </div>
      <br>
      <div>
        <label for="category">Category</label>
        <br>
        <select id="category">
          <option v-for="category in categories" :key="'category-' + category.id" :value="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: []
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
    }
  },
}
</script>

<style>

</style>