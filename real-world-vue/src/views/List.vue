<template>
  <div>
    <h1>This is list page</h1>
    <EventCard />
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
