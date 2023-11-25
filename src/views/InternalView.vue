<template>
  <div v-if="artist">
    <h1>{{ artist.artist_alias }}</h1>
    <div id="timeline"></div>
  </div>
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
      artistImage: null,
    }
  },
  methods: {
  async fetchArtistData(artistName) {
    console.log(rosterData, artistName);
    const artist = rosterData.find(artist => artist.artist_alias === artistName);
    return artist;
    },
    async loadArtistImage() {
      if (!this.artist) {
        return;
      }
      const imageModule = await import(`@/assets/${this.artist.artist_alias}.jpg`);
      this.artistImage = imageModule.default;
    }
  },
  created() {
    console.log(this.$route.params);
  },
  async mounted() {
    try {
      console.log(this.$route.params.artist_alias);
      this.artist = await this.fetchArtistData(this.$route.params.artist_alias);
      console.log(this.artist);
      if (this.artist && this.artist.management_timeline) {
        console.log(this.artist.management_timeline);
        this.$nextTick(() => {
          const options = {} // replace with actual options if any
          const timeline = new TL.Timeline('timeline', this.artist.management_timeline, options);
        });
      }
    } catch (error) {
      console.error('Error in mounted hook:', error);
    }
  }
}
</script>

<style>
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
}
</style>
