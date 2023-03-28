<template>
  <div v-if="auth" class="container">
    <h1>Welcome {{ auth.user.name }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['auth']),
  }
}
</script>

<style scoped>

</style>