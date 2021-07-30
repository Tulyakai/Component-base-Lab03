<template>
  <h1>Events For Good</h1>

  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue"
import EventServices from "../services/Eventservices.js"
export default {
  name: "EventList",
  components: {
    EventCard
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    EventServices.getEvents().then((res) => {
      this.events = res.data
    })
  }
}
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
