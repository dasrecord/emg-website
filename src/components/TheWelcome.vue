<script setup>
import WelcomeItem from './WelcomeItem.vue'
import AboutIcon from './icons/IconAbout.vue'
import IntakeIcon from './icons/IconIntake.vue'
import DemosIcon from './icons/IconDemos.vue'
import TeamIcon from './icons/IconTeam.vue'
import RosterIcon from './icons/IconRoster.vue'
import ContactIcon from './icons/IconContact.vue'
import PlacementsIcon from './icons/IconPlacements.vue'
import ConsultancyIcon from './icons/IconConsultancy.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <AboutIcon />
    </template>
    <template #heading>ABOUT US</template>
    Find out more about <RouterLink to="/about">who we are.</RouterLink>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ConsultancyIcon />
    </template>
    <template #heading>CONSULTANCY</template>
    Learn more about <RouterLink to="/consultancy">what we do.</RouterLink>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <IntakeIcon />
    </template>
    <template #heading>ARTIST INTAKE</template>
    Want to be considered for artist management?<br>
    <RouterLink to="/intake">Show us your stuff.</RouterLink>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DemosIcon />
    </template>
    <template #heading>DEMO SUBMISSION</template>
    Want to be considered for our label?<br>
    <RouterLink to="/demos">Send us your demo.</RouterLink>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <TeamIcon />
    </template>
    <template #heading>OUR TEAM</template>
    Meet the team behind the agency.<br>
    <RouterLink to="/team">Get to know us.</RouterLink>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <RosterIcon />
    </template>
    <template #heading>OUR ROSTER</template>
    Want to book one of our talented artists?<br>
    <RouterLink to="/roster">Check them out.</RouterLink>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <PlacementsIcon />
    </template>
    <template #heading>OUR PLACEMENTS</template>
    Want to see where our artists have placed their music?<br>
    <RouterLink to="/placements"> Cick here.</RouterLink>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ContactIcon />
    </template>
    <template #heading>CONTACT</template>
    Want to get in touch?<br>
    <RouterLink to="/contact">Send us a message.</RouterLink>
  </WelcomeItem>
</template>
