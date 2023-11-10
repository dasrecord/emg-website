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
    const options = {
      width: 100,
      height: 100,
      // scale_factor: 2,
      // initial_zoom: 0,
      // hash_bookmark: true,
      // default_bg_color: { r: 100, g: 100, b: 100 },
      // timenav_position: 'bottom',
      // font: 'default',
      // debug: false,
      // is_embed: false,
      // optimal_tick_width: 100,
      // base_class: 'tl-timeline',
      // timenav_height: 150,
      // timenav_height_percentage: 25,
      // timenav_mobile_height_percentage: 40,
      // timenav_height_min: 150,
      // marker_height_min: 30,
      // marker_width_min: 100,
      // marker_padding: 5,
      // start_at_slide: 0,
      // start_at_end: false,
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
