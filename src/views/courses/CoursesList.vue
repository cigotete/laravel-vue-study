<template>
  <div class="container">
    <h1>Courses List</h1>
    <p v-if="auth"><router-link :to="{name: 'courseCreate'}">Create a Course</router-link></p>
    <br>

    <div class="card mb-4">
      <h2>Search</h2>

      <input v-model="search" type="text" id="" placeholder="Type term to search">
    </div>

    <div class="card mb-4 pt-4">
    <ul style="list-style: none;">
      <li style="text-align: left;" v-for="course in courses" :key="course.id">
        <router-link :to="{name: 'courseDetails', params: { id: course.id }}">{{ course.title }}</router-link>
        <button v-if="auth && course.user.id == auth.user.id" @click="deleteCourse(course.id)" class="btn btn-danger btn-sm">Delete</button>
        &nbsp;
        <router-link v-if="auth && course.user.id == auth.user.id" :to="{name: 'courseEdit', params: { id: course.id}}">
          <button class="btn btn-primary btn-sm">Edit</button>
        </router-link>
      </li>
    </ul>
    </div>

    <!-- Pagination -->
    <div class="card mb-4">
      <nav aria-label="...">
        <ul class="pagination">
          <li v-for="pagination_link in pagination.links"
          :key="'pagination_link-' + pagination_link.label"
          class="page-item"
          :class="{
            disabled: pagination_link.url == null,
            active: pagination_link.active
          }">
            <a class="page-link"
            @click="changePage(pagination_link.url)"
            v-html="pagination_link.label"
            style="cursor: pointer;"></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>

import usePagination from '../../composables/usePagination.js';

import { mapState } from 'vuex';

export default {

  setup() {
    const {
      pagination,
      page,
      setPagination,
      changePage
    } = usePagination();

    return {
      pagination,
      page,
      setPagination,
      changePage
    };
  },

  // Belongs to the component itself.
  data() {
    return {
      courses: [],
      search: ''
    }
  },

  computed: {
    ...mapState(['auth'])
  },

  created() {
    this.getCourses();
  },

  watch: {
    page() {
      this.getCourses();
    },
    search() {
      this.getCourses();
    }
  },

  methods: {
    getCourses() {
      let api_url = '/courses';
      this.axios.get(api_url, {
        params: {
          included: 'user',
          sort: '-id',
          per_page: 10,
          page: this.page,
          'filter[title]': this.search
        }
      })
        .then(response => {
          let res = response.data;
          console.log(res);
          this.courses = res.data;

          this.setPagination(res);
          //this.pagination = {
          //  links: res.links,
          //  last_page: res.last_page
          //}

        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteCourse(id) {
      this.axios.delete('/courses/' + id)
        .then(() => {
          this.getCourses();
          //this.courses = this.courses.filter(course => course.id !== id);
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