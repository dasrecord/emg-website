<template>
  <div>
    <ul>
      <TeamItem v-for="member in team" :key="member.id" class="team-member">
        <template #name>
          {{ member.name }}
        </template>
        <template #role>
         <a href="member.link">{{ member.role }}</a>
        </template>
        <!-- <template #link>
          <a :href="member.link">View Profile</a>
        </template> -->
        <a :href="bookingUrl">Booking Link</a>
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: space-evenly; */
  /* flex-wrap: wrap; */
  /* align-items: center; */
  /* max-width: 100px; */
}

.team-member {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 1rem;
  margin-top: 3rem;
}
</style>

<script>
import teamData from '@/stores/team.json'
import TeamItem from '@/components/TeamItem.vue'
console.log(TeamItem)

export default {
  data() {
    return {
      team: teamData
    }
  },
  components: { TeamItem }
}
</script>
