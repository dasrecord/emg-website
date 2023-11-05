<template>
  <div>
    <!-- <h2>Our Team</h2> -->
    <ul>
      <WelcomeItem v-for="member in team" :key="member.id">
        <img :src="member.image" :alt=member.name>
        <h2>{{ member.name }}</h2>
        <p>{{ member.role }}</p>
        <p>{{ member.location }}</p>
      </WelcomeItem>
    </ul>
  </div>
</template>

<script>
import teamData from '@/stores/team.json';
import WelcomeItem from '@/components/WelcomeItem.vue';

export default {
    data() {
        return {
            team: teamData,
        };
    },
    components: { WelcomeItem }
};
</script>
