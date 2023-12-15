<template>
  <div v-if="artist" class="artist">
    <!-- <h1>{{ artist.artist_alias }}</h1> -->
    <div class="artist-image" alt="Artist Image" ><img :src="artistImage"/></div>
    <p>{{ artist.act }}</p>
    <p>{{ artist.genre }}</p>
    <br>
    <div class="artist-logo" alt="Artist Image" ><img :src="artistLogo"/></div>
    <br>
    <div>
      <a :href="artist.facebook_link"><IconFacebook width="32" height="32" color="white" /></a>
      <a :href="artist.instagram_link"><IconInstagram width="32" height="32" color="white" /></a>
      <a :href="artist.spotify_link"><IconSpotify width="32" height="32" color="white" /></a>
      <a :href="artist.soundcloud_link"><IconSoundcloud width="32" height="32" color="white" /></a>
      <a :href="artist.youtube_link"><IconYoutube width="32" height="32" color="white" /></a>
      <a :href="artist.twitch_link"><IconTwitch width="32" height="32" color="white" /></a>
    </div>
    <br>
    <p v-html="artist.short_bio"></p>
    <br>
    <a :href="`https://dasrecord.typeform.com/to/OCJRuEEY?artist=${artist.artist_alias}`">CLICK HERE TO BOOK {{ artist.artist_alias.toUpperCase() }}</a>
    <br>
  </div>
  <div id="timeline"></div>
</template>

<script>
import rosterData from '@/stores/roster.json'
import TimeLine from '@/components/TimeLine.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'
import IconX from '@/components/icons/IconX.vue'
import IconSpotify from '@/components/icons/IconSpotify.vue'
import IconSoundcloud from '@/components/icons/IconSoundcloud.vue'
import IconYoutube from '@/components/icons/IconYoutube.vue'
import IconTwitch from '@/components/icons/IconTwitch.vue'

export default {
  name: 'RosterMemberView',
  components: {
    TimeLine,
    IconFacebook,
    IconInstagram,
    IconX,
    IconSpotify,
    IconSoundcloud,
    IconYoutube,
    IconTwitch
  },
  data() {
    return {
      artist: null,
      artistImage: null,
      artistLogo: null
    }
  },
  methods: {
    async loadArtistImage() {
      if (!this.artist) {
        return
      }
      const imageModule = await import(`@/assets/${this.artist.artist_alias}.jpg`)
      this.artistImage = imageModule.default
    },
    async loadArtistLogo() {
      if (!this.artist) {
        return
      }
      const imageModule = await import(`@/assets/${this.artist.artist_alias}_logo.png`)
      this.artistLogo = imageModule.default
    }
  },
  mounted() {
    const id = Number(this.$route.params.id)
    this.artist = rosterData.find((artist) => artist.id === id)
    const options = {
      width: window.innerWidth,
      base_class: 'tl-timeline',
      initial_zoom: 4,
      start_at_end: true,
      timenav_position: 'top',
      default_bg_color: getComputedStyle(document.documentElement)
        .getPropertyValue('--color-background')
        .trim(),
      font: 'default',
      // other options...
      scale_factor: 2,
      // hash_bookmark: true,
      // debug: false,
      is_embed: false,
      // optimal_tick_width: 100,
      // timenav_height: 5,
      // timenav_height_percentage: 15,
      // timenav_mobile_height_percentage: 40,
      timenav_height_min: 150,
      marker_height_min: 30,
      // marker_width_min: 100,
      // marker_padding: 5,
      // start_at_slide: 0,
      // menubar_height: 0,
      // use_bc: false,
      duration: 1000,
      // ease: TL.Ease.easeInOutQuint,
      // dragging: true,
      // trackResize: true,
      // slide_padding_lr: 100,
      // slide_default_fade: '0%',
      // language: 'en'
    }
    const timeline = new TL.Timeline('timeline', this.artist.other_link, options)
    this.loadArtistImage()
    this.loadArtistLogo()
  }
}
</script>

<style>
.artist {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: 0 auto;
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
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 25px;
}
.artist-logo img {
  max-width: 450px;
  height: auto;
}

.socials {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
}

p {
  max-width: 900px;
  font-size: 2rem;
}

.tl-timeline {
  background-color: var(--color-background);
  min-height: 800px;
}
</style>
