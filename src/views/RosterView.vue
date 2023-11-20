<template>
  <div>
    <ul>
      <TeamItem v-for="member in sortedRoster" :key="member.id" class="roster-member">
        <img :src="member.headshot" :alt="member.name" />
        <template #name>
          <RouterLink :to="{ name: 'roster-member', params: { id: member.id } }">
            {{ member.artist_alias }}
          </RouterLink>
          </template>
        <template #role>
          <p>{{ member.act }}</p>
        </template>
        <template #link>
          {{ member.genre }}    
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
  margin: auto;
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
  computed: {
    sortedRoster() {
      return this.roster.slice().sort((a, b) => a.artist_alias.localeCompare(b.artist_alias));
    }
  },
  components: { TeamItem }
}
</script>
