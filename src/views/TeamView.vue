<template>
  <div>
    <ul>
      <TeamItem v-for="member in team" :key="member.id" class="team-member">
      <!-- <i><slot name="icon"></slot></i> -->
      <img :src="member.image" :alt="member.name" />
      <h2>{{ member.name }}</h2>
      <p>{{ member.role }}</p>
      <p>{{ member.location }}</p>
      </TeamItem>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  font-weight: 800;
  color: var(--color-heading);
}

ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;  
  /* justify-content: space-evenly; */
  /* flex-wrap: wrap; */
  /* align-items: center; */
  /* max-width: 100px; */
}
.team-member {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 1rem;
  /* margin-top: 3rem; */
  /* min-width: 300px; */

}
</style>

<script>
import teamData from '@/stores/team.json'
import TeamItem from '@/components/TeamItem.vue'

export default {
  data() {
    return {
      team: teamData
    }
  },
  components: { TeamItem }
}
</script>