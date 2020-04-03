<template>
  <div>
    <h1>Create Event, {{ user.name }}</h1>
    <p>This event is created by {{ user.id }}</p>
    <ul>
      <li v-for="category in categories" :key="category">{{ category }}</li>
    </ul>
    <p>There are {{ $store.getters.catLength }} categories</p>
    <p>using getEvent</p>
    <p>{{ getEvent(1) }}</p>
    <p>using mapGetters</p>
    <p>{{ getEventById(1) }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    getEvent() {
      return this.$store.getters.getEventById
    },
    ...mapGetters(['getEventById']),
    ...mapState(['user', 'categories'])
  }
}
</script>

<style></style>
