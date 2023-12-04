<template>
  <div>
    <ul>
      <TeamItem v-for="placement in placements" :key="placement.artist_name" class="artist">
        <template #name>
          {{ placement.artist_name }}
        </template>
        <template #link>
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: auto;
  /* justify-content: space-evenly; */
  /* flex-wrap: wrap; */
  /* align-items: center; */
  /* max-width: 100px; */
}
.artist {
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

export default {
  data() {
    return {
      placements: placementsData
    }
  },
  mounted() {
    console.log(this.placements)
  },
  components: { TeamItem }
}
</script>
