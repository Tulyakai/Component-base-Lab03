<template>
    <h1>Student List</h1>    
    <div class='events'>
        <StudentCard v-for="std in stdlist" :key="std.id" :event="std"/>
    </div>
</template>
<script>
import StudentCard from "../components/StudentCard"
import StudentServices from "../services/StudentServices.js"

export default {
  name: "StudentList",
  components: {
    StudentCard
  },
  data() {
    return {
      stdlist: null
    }
  },
  created() {
    StudentServices.getServices()
      .then((res) => {
        this.stdlist = res.data
      })
      .catch((e) => {
        console.log(e)
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
