<template>
  <div>
    <h1>Event Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <BaseIcon />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard'
import EventService from '@/services/EventService.js'
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
      const resp = await EventService.getEvents()
      this.events = resp.data
      console.log('loadData', this.events)
    }
  }
}
</script>

<style></style>
