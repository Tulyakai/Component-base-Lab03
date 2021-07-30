<template>
  <h1>Event Details</h1>
  <div class="eventDetail">
    <EventDetail v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
<script>
import EventDetail from "@/components/EventDetail.vue"
import EventServices from "../services/Eventservices.js"
export default {
  name: "Detail",
  components: {
    EventDetail
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
.eventDetail {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: right;
}
</style>
