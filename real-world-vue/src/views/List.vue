<template>
  <div>
    <h1>Event Listing</h1>
    <EventCard />
    <BaseIcon />
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
