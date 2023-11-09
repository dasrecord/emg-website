<template>
  <div v-if="artist">
    <h1>{{ artist.artist_alias }}</h1>
    <p>{{ `${artist.first_name} ${artist.last_name}` }}</p>
    <p>{{ artist.sector }}</p>
  </div>
  <div id="timeline"></div>
</template>

<script>
import rosterData from '@/stores/roster.json'
import TimeLine from '@/components/TimeLine.vue'
import '/public/timeline.css'

export default {
  name: 'RosterMemberView',
  components: {
    TimeLine
  },
  data() {
    return {
      artist: null,
      timelinedata: 'https://docs.google.com/spreadsheets/d/1cWqQBZCkX9GpzFtxCWHoqFXCHg-ylTVUWlnrdYMzKUI/pubhtml'
    };
  },
  mounted() {
    const id = Number(this.$route.params.id);
    this.artist = rosterData.find(artist => artist.id === id);
    const timeline = new TL.Timeline('timeline', this.timelinedata);
  }
}
</script>
