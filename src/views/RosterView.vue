<template>
  <div>
    <ul>
      <TeamItem v-for="member in sortedRoster" :key="member.id" class="roster-member">
        <template #image>
          <img :src="images[member.artist_alias]" alt="Artist Image" class="artist-image">
        </template>
        <template #name>
          <RouterLink :to="{ name: 'roster-member', params: { id: member.id } }">
            {{ member.artist_alias }}
          </RouterLink>
        </template>
        <template #booking>
          <a :href="bookingUrl(member.artist_alias)">BOOK HERE</a>
        </template>
        <template #role>
          <p>{{ member.act }}</p>
        </template>
        <template #link>
          {{ member.genre }}    
        </template>
      </TeamItem>
    </ul>
  </div>
</template>

<style scoped>
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
h2 {
  font-weight: 800;
  color: var(--color-heading);
}

ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: space-evenly; */
  /* flex-wrap: wrap; */
  /* align-items: center; */
  /* max-width: 100px; */
}
.roster-member {
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
import rosterData from '@/stores/roster.json'
import TeamItem from '@/components/TeamItem.vue'

export default {
  data() {
    return {
      roster: rosterData,
      images: {}
    }
  },
  computed: {
    sortedRoster() {
      return this.roster.slice().sort((a, b) => a.artist_alias.localeCompare(b.artist_alias));
    }
  },
  methods: {
    bookingUrl(artist_alias) {
      const baseURL = "https://dasrecord.typeform.com/to/OCJRuEEY?artist=";
      return `${baseURL}${encodeURIComponent(artist_alias)}`;
    },
    async loadArtistImage(member) {
      if (!member) {
        return;
      }
      const imageModule = await import(`@/assets/${member.artist_alias}.jpg`);
      this.images[member.artist_alias] = imageModule.default;
    }
  },
  async created() {
    for (const member of this.sortedRoster) {
      await this.loadArtistImage(member);
    }
  },
  components: { TeamItem }
}
</script>