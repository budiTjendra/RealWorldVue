<template>
  <div>
    <h1>Event Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <BaseIcon />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard'
import axios from 'axios'
export default {
  components: {
    EventCard
  },
  created() {
    this.loadData()
  },
  data() {
    return {
      events: []
    }
  },
  methods: {
    async loadData() {
      const resp = await axios.get('http://localhost:3000/events')
      this.events = resp.data
      console.log('loadData', this.events)
    }
  }
}
</script>

<style></style>
