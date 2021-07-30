import { createRouter, createWebHistory } from "vue-router"
import EventList from "../views/EventList.vue"
import About from "../views/About.vue"
import Details from "../views/Details.vue"
import Students from "../views/StudentList.vue"

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/details",
    name: "Details",
    component: Details
  },
  {
    path: "/students",
    name: "Students",
    component: Students
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
