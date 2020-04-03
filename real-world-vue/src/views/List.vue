<template>
  <div>
    <h1>This is list page</h1>

    <EventCard v-for="index in 3" :key="index" />

    <router-link :to="{ name: 'Show', params: { id: 1 } }"
      >Show Event #1</router-link
    >|
  </div>
</template>

<script>
import EventCard from '@/components/EventCard'
export default {
  components: {
    EventCard
  },
  data() {
    return {
      numbers: 1
    }
  }
}
</script>

<style></style>
