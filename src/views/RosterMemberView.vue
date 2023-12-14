<template>
  <div v-if="artist" class="artist">
    <div class="artist-image">
      <img :src="artistImage" alt="Artist Image" />
    </div>
    <!-- <h1>{{ artist.artist_alias }}</h1> -->
    <img :src="`/src/assets/${artist.artist_alias}_logo.png`" class="artist-logo" alt="Artist Logo" />
    <p>{{ artist.act }}</p>
    <p>{{ artist.genre }}</p>
    <div class="socials">
      <a :href="artist.facebook_link"><IconFacebook width="24" height="24" color="white" /></a>
      <a :href="artist.instagram_link"><IconInstagram width="24" height="24" color="white" /></a>
      <a :href="artist.spotify_link"><IconSpotify width="24" height="24" color="white" /></a>
      <a :href="artist.soundcloud_link"><IconSoundcloud width="24" height="24" color="white" /></a>
      <a :href="artist.youtube_link"><IconYoutube width="24" height="24" color="white" /></a>
      <a :href="artist.twitch_link"><IconTwitch width="24" height="24" color="white" /></a>
    </div>
    <p v-html="artist.short_bio"></p>
    <a :href="`https://dasrecord.typeform.com/to/OCJRuEEY?artist=${artist.artist_alias}`">CLICK HERE TO BOOK</a>
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
      artistImage: null
    }
  },
  methods: {
    async loadArtistImage() {
      if (!this.artist) {
        return
      }
      const imageModule = await import(`@/assets/${this.artist.artist_alias}.jpg`)
      this.artistImage = imageModule.default
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
  border-radius: 25px;
}

.artist-logo {
  max-width: 300px;
  height: auto;
}

.socials {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
}

.tl-timeline {
  background-color: var(--color-background);
  min-height: 800px;
}
</style>
