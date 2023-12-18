<template>
  <div v-if="artist" class="artist">
    <h1>{{ artist.artist_alias }}</h1>
    <h2>Internal Management Timeline</h2>
  </div>
  <div id="timeline"></div>
</template>

<script>
import rosterData from '@/stores/roster.json'
import TimeLine from '@/components/TimeLine.vue'

export default {
  name: 'InternalView',
  components: {
    TimeLine
  },
  data() {
    return {
      artist: null,
      artistImage: null
    }
  },
  methods: {
    async fetchArtistData(artistName) {
      console.log(rosterData, artistName)
      const artist = rosterData.find((artist) => artist.artist_alias === artistName)
      return artist
    },
    async loadArtistImage() {
      if (!this.artist) {
        return
      }
      const imageModule = await import(`@/assets/${this.artist.artist_alias}.jpg`)
      this.artistImage = imageModule.default
    }
  },
  created() {
    console.log(this.$route.params)
  },
  async mounted() {
    try {
      console.log(this.$route.params.artist_alias)
      this.artist = await this.fetchArtistData(this.$route.params.artist_alias)
      console.log(this.artist)
      if (this.artist && this.artist.management_timeline) {
        console.log(this.artist.management_timeline)
        this.$nextTick(() => {
          const options = {
            width: window.innerWidth,
            base_class: 'tl-timeline',
            initial_zoom: 2,
            start_at_end: false,
            timenav_position: 'top',
            default_bg_color: getComputedStyle(document.documentElement)
              .getPropertyValue('--color-background')
              .trim(),
            font: 'default',
            // other options...
            scale_factor: 1,
            // hash_bookmark: true,
            // debug: false,
            // is_embed: false,
            // optimal_tick_width: 100,
            // timenav_height: 150,
            // timenav_height_percentage: 10
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
          }
          const timeline = new TL.Timeline('timeline', this.artist.management_timeline, options)
        })
      }
    } catch (error) {
      console.error('Error in mounted hook:', error)
    }
  }
}
</script>

<style scoped>
.artist {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.artist-image {
  width: 300px;
  height: 300px;
  overflow: hidden;
  position: relative;
}

.artist-image img {
  width: auto;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

.tl-timeline {
  background-color: var(--color-background);
  min-height: 800px;
  width: 100vw;
  margin-top: 2rem;

}
</style>
