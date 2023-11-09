<template>
  <div>
    <ul>
      <TeamItem v-for="member in roster" :key="member.id" class="roster-member">
        <img :src="member.image" :alt="member.name" />
        <template #name>
          <RouterLink :to="{ name: 'roster-member', params: { id: member.id } }">
            {{ member.artist_alias }}
          </RouterLink>
          </template>
        <template #role>
          <p>{{ member.sector }}</p>
        </template>
        <template #link>
          {{ `${member.first_name} ${member.last_name}` }}    
        </template>
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
.roster-member {
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
import rosterData from '@/stores/roster.json'
import TeamItem from '@/components/TeamItem.vue'

export default {
  data() {
    return {
      roster: rosterData
    }
  },
  components: { TeamItem }
}
</script>
