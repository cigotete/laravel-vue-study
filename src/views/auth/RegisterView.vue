<template>
  <div class="container">

    <h1>Register</h1>

    <div v-if="isRegistered" class="alert alert-success" role="alert">
      User has been registered successfully!
    </div>
    <div v-if="alreadyRegistered" class="alert alert-danger" role="alert">
      Registration failed. The provided information is invalid.
    </div>
    <div v-if="error" class="alert alert-danger" role="alert">
      Registration failed. Please try again later.
    </div>

    <div class="card mx-auto">
      <div class="card-body">
        <form @submit.prevent="register">
          <div class="form-group mb-3">
            <label for="name" class="mb-1">Name</label>
            <input type="text" v-model="name" class="form-control" id="name" placeholder="Enter name">
          </div>
          <div class="form-group mb-3">
            <label for="email" class="mb-1">Email</label>
            <input type="email" v-model="email" class="form-control" id="email" placeholder="Enter email">
          </div>
          <div class="form-group mb-3">
            <label for="password" class="mb-1">Password</label>
            <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
          </div>
          <button class="btn btn-primary" v-bind:class="{
            'disabled': disabled,
          }">Submit</button>
        </form>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      disabled: false,
      isRegistered: false,
      alreadyRegistered: false,
      error: false
    }
  },

  methods: {
    register() {
      this.disabled = true;
      this.error = false;
      this.alreadyRegistered = false;
      this.axios.post('/register', {
        name: this.name,
        email: this.email,
        password: this.password,
      })
        .then(response => {
          console.log(response.data);
          this.disabled = false;
          this.isRegistered = true;
          this.alreadyRegistered = false;
        })
        .catch(error => {
          if (error.response && error.response.status === 422) {
            this.alreadyRegistered = true;
          }
          this.error = true;
          this.disabled = false;
          this.isRegistered = false;
          console.log(error);
        });
    }
  }
}
</script>

<style scoped>

</style>