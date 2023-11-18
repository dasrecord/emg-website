<template>
  <div>
    <ul>
      <TeamItem v-for="placement in placements" :key="placement.artist_name" class="team-member">
        <template #name>
          {{ placement.artist_name }}
        </template>
        <template #role>
          <div v-for="track in placement.tracks" :key="track.track_name">
            <a :href="track.url">{{ track.track_name }}</a>
          </div>
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
  padding: 0%;
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
import placementsData from '@/stores/placements.json'
import TeamItem from '@/components/TeamItem.vue'
console.log(TeamItem)

export default {
  data() {
    return {
      placements: placementsData
    }
  },
  components: { TeamItem }
}
</script>
