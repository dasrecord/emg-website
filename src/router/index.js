import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ConsultancyView from '../views/ConsultancyView.vue'
import IntakeView from '../views/IntakeView.vue'
import DemosView from '../views/DemosView.vue'
import TeamView from '../views/TeamView.vue'
import ContactView from '../views/ContactView.vue'
import RosterView from '../views/RosterView.vue'
import RosterMemberView from '../views/RosterMemberView.vue'
import PlacementView from '../views/PlacementsView.vue'
import InternalView from '../views/InternalView.vue'

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
      path: '/consultancy',
      name: 'consultancy',
      component: ConsultancyView
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
      path: '/scouting-form',
      name: 'scoutingform',
      beforeEnter() {
        location.href = 'https://dasrecord.typeform.com/to/N79PIVG9'
      }
    },
    {
      path: '/twitch',
      name: 'twitch',
      beforeEnter() {
        location.href = 'https://www.twitch.tv/evolvedmusicgroup'
      }
    },
    {
      path: '/twitch-assets',
      name: 'twitchassets',
      beforeEnter() {
        location.href =
          'https://drive.google.com/drive/folders/1pa-mBBZRqtt-BHLt1CoSR3At8xoo39Rb?usp=sharing'
      }
    },
    {
      path: '/slack',
      name: 'slack',
      beforeEnter() {
        location.href = 'https://evolvedmusicgroup.slack.com'
      }
    },
    {
      path: '/discord',
      name: 'discord',
      beforeEnter() {
        location.href = 'https://discord.gg/RsRFCZn8'
      }
    },
    {
      path: '/bookings',
      name: 'bookings',
      beforeEnter() {
        location.href = 'https://dasrecord.typeform.com/to/OCJRuEEY#artist=one%20of%20our%20artists'
      }
    },
    {
      path: '/artist-onboarding',
      name: 'artistonboarding',
      beforeEnter() {
        location.href = 'https://dasrecord.typeform.com/to/oA5UYgNv'
      }
    },
    {
      path: '/publishing-contract',
      name: 'publishing-contract',
      beforeEnter() {
        location.href = '/PA2023.pdf'
      }
    },
    {
      path: '/management-contract',
      name: 'management-contract',
      beforeEnter() {
        location.href = '/MA2023.pdf'
      }
    },
    {
      path: '/q&a',
      name: 'q&a',
      beforeEnter() {
        location.href = '/QA2023.pdf'
      }
    },
    {
      path: '/deck',
      name: 'deck',
      beforeEnter() {
        location.href = '/DECK2023.pdf'
      }
    },
    {
      path: '/a&r-meeting',
      name: 'a&rmeeting',
      beforeEnter() {
        location.href =
          'https://calendar.google.com/calendar/selfsched?sstoken=UUczNGlyUVdxVmlMfGRlZmF1bHR8N2EwYjgyODMyNTViMDUzNDNjYTg1MTE3ZmUzZWMyMzk'
      }
    },
    {
      path: '/internal-timelines',
      name: 'internaltimelines',
      beforeEnter() {
        location.href =
          'https://drive.google.com/drive/folders/1zjqqCXxJVy9K5h42nl18gJ4tvkBhPvsA?usp=drive_link'
      }
    },
    {
      path: '/internal/:artist_alias',
      name: 'InternalView',
      component: InternalView
    },
    {
      path: '/scouting/danielsireau',
      name: 'danielsireau',
      beforeEnter() {
        location.href = 'https://dasrecord.typeform.com/to/uNSZDxDB?scout=Daniel%20Sireau'
      }
    },
    {
      path: '/scouting/prasenjitdas',
      name: 'prasenjitdas',
      beforeEnter() {
        location.href = 'https://dasrecord.typeform.com/to/uNSZDxDB?scout=Prasenjit%20Das'
      }
    },
    {
      path: '/livestream-calendar',
      name: 'livestreamcalendar',
      beforeEnter() {
        location.href =
          'https://calendar.google.com/calendar/u/0?cid=Y185NzcwMzczNmU5OWI0ZTc2Nzk4YmY0YjI3Y2E5MThlYTlmOTVlNDQ3ZTljMjUzZTI3MjU2MmNkNmQyMGE1OWUzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20'
      }
    },
    {
      path: '/instagram',
      name: 'instagram',
      beforeEnter() {
        'https://www.instagram.com/evolved_music_group/'
      }
    },
    {
      path: '/facebook',
      name: "facebook",
      beforeEnter() {
        'https://www.facebook.com/evolvedmusicgroup'
      }
    },
    {
      path: '/linkedin',
      name: "linkedin",
      beforeEnter() {
        'https://www.linkedin.com/company/evolvedmusicgroup/'
      }
    },
    {
      path: '/youtube',
      name: "youtube",
      beforeEnter() {
        'https://www.youtube.com/@EvolvedArtists'
     }
    },
    {
      path: '/spotify',
      name: "spotify",
      beforeEnter() {
        'https://open.spotify.com/user/31ptna5z6wj77l2vlid2cwy6i4q4'
      }
    }
  ]
})

export default router
