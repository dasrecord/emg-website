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

export default {
  name: 'RosterMemberView',
  components: {
    TimeLine
  },
  data() {
    return {
      artist: null,
      timelinedata: 'https://docs.google.com/spreadsheets/d/1KjYDRCbhGGFOsdqawJ5OowtHBn5JTEBEsayhtpIa23A/edit#gid=0'
    };
  },
  mounted() {
    const id = Number(this.$route.params.id);
    this.artist = rosterData.find(artist => artist.id === id);
    const options = {
      width: window.innerWidth,
      base_class: 'tl-timeline',
      initial_zoom: 2,
      start_at_end: true,
      timenav_position: 'top',
      default_bg_color: getComputedStyle(document.documentElement).getPropertyValue('--color-background').trim(),
      font: 'default',
      // other options...
      // scale_factor: 2,
      // hash_bookmark: true,
      // debug: false,
      // is_embed: false,
      // optimal_tick_width: 100,
      // timenav_height: 150,
      // timenav_height_percentage: 25,
      // timenav_mobile_height_percentage: 40,
      // timenav_height_min: 150,
      // marker_height_min: 30,
      // marker_width_min: 100,
      // marker_padding: 5,
      // start_at_slide: 0,
      // menubar_height: 0,
      // use_bc: false,
      // duration: 1000,
      // ease: TL.Ease.easeInOutQuint,
      // dragging: true,
      // trackResize: true,
      // slide_padding_lr: 100,
      // slide_default_fade: '0%',
      // language: 'en'
    };
    const timeline = new TL.Timeline('timeline', this.timelinedata, options);
  }
}
</script>

<style>
.tl-timeline {
  /* display: flex; */
  flex-direction: column;
  width: 75vw;
  height: 75vh;
}
</style>
