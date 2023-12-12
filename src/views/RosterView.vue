<template>
  <div v-for="(group, act) in groupedRoster" :key="act">
    <h2>{{ act }}</h2>
    <ul>
      <TeamItem v-for="member in group" :key="member.id" class="roster-member">
        <template #image>
          <img :src="images[member.artist_alias]" alt="Artist Image" class="artist-image" />
        </template>
        <template #name>
          <RouterLink :to="{ name: 'roster-member', params: { id: member.id } }">
            {{ member.artist_alias }}
          </RouterLink>
        </template>
        <template #booking>
          <a :href="bookingUrl(member.artist_alias)">CLICK HERE TO BOOK</a>
        </template>
        <template #facebook>
          <a :href="member.facebook_link">
            <IconFacebook width="24" height="24" color="white" />
          </a>
        </template>
        <template #instagram>
          <a :href="member.instagram_link">
            <IconInstagram width="24" height="24" color="white" />
          </a>
        </template>
        <template #spotify>
          <a :href="member.spotify_link">
            <IconSpotify width="24" height="24" color="white" />
          </a>
        </template>
        <template #soundcloud>
          <a :href="member.soundcloud_link">
            <IconSoundcloud width="24" height="24" color="white" />
          </a>
        </template>
        <template #youtube>
          <a :href="member.youtube_link">
            <iconYoutube width="24" height="24" color="white" />
          </a>
        </template>
        <template #twitch>
          <a :href="member.twitch_link">
            <IconTwitch width="24" height="24" color="white" />
          </a>
        </template>
        <template #link>
          {{ member.genre }}
        </template>
      </TeamItem>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  padding: 2rem;
  padding-bottom: 0;
  font-weight: 800;
  color: var(--color-heading);
  text-align: center;
}

ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  /* flex-wrap: wrap; */
  /* align-items: center; */
  /* max-width: 100px; */
}
.roster-member {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  /* justify-content: space-between; */
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 25px;
}
.artist-image {
  /* width: 100%; */
  aspect-ratio: 1/1;
  max-width: 300px;
  /* height: 100%; */
  overflow: hidden;
  position: relative;
  border-radius: 15px;
}

/* .artist-image img {
  width: auto;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
} */
</style>

<script>
import rosterData from '@/stores/roster.json'
import TeamItem from '@/components/TeamItem.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'
import IconX from '@/components/icons/IconX.vue'
import IconSpotify from '@/components/icons/IconSpotify.vue'
import IconSoundcloud from '@/components/icons/IconSoundcloud.vue'
import IconYoutube from '@/components/icons/IconYoutube.vue'
import IconTwitch from '@/components/icons/IconTwitch.vue'

export default {
  data() {
    return {
      roster: rosterData,
      images: {}
    }
  },
  computed: {
    sortedRoster() {
      return this.roster.slice().sort((a, b) => a.artist_alias.localeCompare(b.artist_alias))
    },
    groupedRoster() {
      return this.sortedRoster.reduce((groups, member) => {
        const key = member.act
        if (!groups[key]) {
          groups[key] = []
        }
        groups[key].push(member)
        return groups
      }, {})
    }
  },
  methods: {
    bookingUrl(artist_alias) {
      const baseURL = 'https://dasrecord.typeform.com/to/OCJRuEEY?artist='
      return `${baseURL}${encodeURIComponent(artist_alias)}`
    },
    async loadArtistImage(member) {
      if (!member) {
        return
      }
      const imageModule = await import(`@/assets/${member.artist_alias}.jpg`)
      this.images[member.artist_alias] = imageModule.default
    }
  },
  async created() {
    for (const member of this.sortedRoster) {
      await this.loadArtistImage(member)
    }
  },
  components: {
    TeamItem,
    IconFacebook,
    IconInstagram,
    IconX,
    IconSpotify,
    IconSoundcloud,
    IconYoutube,
    IconTwitch
  }
}
</script>
