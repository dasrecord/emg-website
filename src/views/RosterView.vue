<template>
  <div>
    <ul>
      <TeamItem v-for="member in roster" :key="member.id" class="roster-member">
        <img :src="member.image" :alt="member.name" />
        <h2>{{ `${member.first_name} ${member.last_name}` }}</h2>
        <p>{{ member.sector }}</p>
        <p>{{ member.url }}</p>
        <template #link>
          <router-link :to="{ name: 'roster-member', params: { id: member.id } }">{{
            member.artist_alias
          }}</router-link>
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
  text-align: center;
  /* justify-content: center; */
  padding: 1rem;
  /* margin-top: 3rem; */
  min-width: 300px;
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
