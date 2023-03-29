<template>
  <div class="container">

    <h1>Login</h1>
    {{ auth }}

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
          <button class="btn btn-primary" v-bind:class="{
            'disabled': disabled,
          }">Submit</button>
        </form>
      </div>
    </div>

  </div>
</template>

<script>

import { mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      email: 'example@example.com',
      password: '12345678',
      disabled: false,
    }
  },

  computed: {
    ...mapState(['auth']),
  },

  methods: {
    ...mapMutations(['setAuth']),
    login() {
      this.disabled = true;
      this.axios.post('/login', {
        grand_type: 'password',
        client_id: '98ca60fd-34df-478f-95f6-6b7bf06ccbbb',
        client_secret: 'L0E3XkUpZ5CYVbmqaiU9OKHHTB0m0zIPOnNbke88',
        username: this.email,
        password: this.password,
      })
        .then(response => {
          console.log(response.data);
          localStorage.setItem('auth', JSON.stringify(response.data));
          this.setAuth(response.data);
          this.disabled = false;

          this.$router.push({ name: 'dashboard' });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>

<style scoped>

</style>