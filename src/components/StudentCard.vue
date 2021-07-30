<template>
  <div class="event-card">
    <img :src="event.image"/><br/>
    <span>{{event.name}} {{event.surname}}</span>
    <h4>{{ event.gpa }}</h4>
    <span>{{event.description}}</span>

  </div>
</template>
<script>
export default {
  name: "EventCard",
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
img {
  width: auto;
  height: 8rem;
}
</style>
