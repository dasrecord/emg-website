<template>
  <div v-if="artist">
    <h1>{{ artist.artist_alias }}</h1>
    <p>{{ `${artist.first_name} ${artist.last_name}` }}</p>
    <p>{{ artist.sector }}</p>
  </div>
</template>

<script>
import rosterData from '@/stores/roster.json'
import TimeLine from '@/components/TimeLine.vue'

export default {
  name: 'RosterMemberView',
  components: {
    TimeLine
  },
  data() {
    return {
      artist: null
    }
  },
  mounted() {
    const id = Number(this.$route.params.id)
    this.artist = rosterData.find(artist => artist.id === id)
    console.log(this.artist);
  }
}
</script>
