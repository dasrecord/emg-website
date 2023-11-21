import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import IntakeView from '../views/IntakeView.vue'
import DemosView from '../views/DemosView.vue'
import TeamView from '../views/TeamView.vue'
import ContactView from '../views/ContactView.vue'
import RosterView from '../views/RosterView.vue'
import RosterMemberView from '../views/RosterMemberView.vue'
import PlacementView from '../views/PlacementsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/intake',
      name: 'intake',
      component: IntakeView
    },
    {
      path: '/demos',
      name: 'demos ',
      component: DemosView
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView
    },
    {
      path: '/roster',
      name: 'roster',
      component: RosterView
    },
    {
      path: '/roster/:id',
      name: 'roster-member',
      component: RosterMemberView
    },
    {
      path: '/placements',
      name: 'placements',
      component: PlacementView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/scoutingform',
      name: 'scoutingform',
      beforeEnter() { 
        location.href = 'https://dasrecord.typeform.com/to/N79PIVG9'
      }
    }
  ]
})

export default router
