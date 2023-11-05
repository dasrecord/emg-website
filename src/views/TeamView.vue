<template>
  <div>
    <h1>Our Team</h1>
    <ul>
      <WelcomeItem v-for="member in team" :key="member.id">
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
