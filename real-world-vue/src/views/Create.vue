<template>
  <div>
    <h1>Create Event, {{ user.name }}</h1>
    <p>This event is created by {{ user.id }}</p>
    <ul>
      <li v-for="category in categories" :key="category">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['user', 'categories'])
  }
}
</script>

<style></style>
