<template>
  <div>
    <h1>
      Showing Event
      <br />
      #{{ event.title }}
    </h1>
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'
export default {
  props: ['id'],
  data() {
    return {
      event: {}
    }
  },
  created() {
    this.getEvent(this.id)
  },
  methods: {
    async getEvent(eventId) {
      const response = await EventService.getEvent(eventId) // <--- Send the prop id to our EventService
      this.event = await response.data
    }
  }
}
</script>

<style></style>
