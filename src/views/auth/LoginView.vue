<template>
  <div class="container">

    <h1>Login</h1>

    <div class="card mx-auto">
      <div class="card-body">
        <form @submit.prevent="login">
          <div class="form-group mb-3">
            <label for="email" class="mb-1">Email</label>
            <input type="email" v-model="email" class="form-control" id="email" placeholder="Enter email">
          </div>
          <div class="form-group mb-3">
            <label for="password" class="mb-1">Password</label>
            <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
          </div>
          <button class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      console.log('trying to login');
    }
  }
}
</script>

<style scoped>

</style>