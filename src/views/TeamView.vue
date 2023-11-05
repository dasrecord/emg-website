<template>
  <div>
    <h1>Our Team</h1>
    <ul>
      <li v-for="member in team" :key="member.id">
        <h2>{{ member.name }}</h2>
        <p>{{ member.position }}</p>
        <p>{{ member.bio }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import teamData from '@/stores/team.json';

export default {
  data() {
    return {
      team: teamData,
    };
  },
};
</script>
