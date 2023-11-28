<template>
  <div v-for="(group, act) in groupedRoster" :key="act">
    <h2>{{ act }}</h2>
    <ul>
      <TeamItem v-for="member in group" :key="member.id" class="roster-member">
        <template #image>
          <img :src="images[member.artist_alias]" alt="Artist Image" class="artist-image">
        </template>
        <template #name>
          <RouterLink :to="{ name: 'roster-member', params: { id: member.id } }">
            {{ member.artist_alias }}
          </RouterLink>
        </template>
        <template #booking>
          <a :href="bookingUrl(member.artist_alias)">CLICK HERE TO BOOK</a>
        </template>
        <!-- <template #role>
          <p>{{ member.act }}</p>
        </template> -->
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
  padding: 2rem;
  margin-top: 3rem;
}
.artist-image {
  /* width: 100%; */
  aspect-ratio: 1/1;
  max-width: 300px;
  /* height: 100%; */
  overflow: hidden;
  position: relative;
  border-radius: 50%;
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
    },
    groupedRoster() {
      return this.sortedRoster.reduce((groups, member) => {
        const key = member.act;
        if (!groups[key]) {
          groups[key] = [];
        }
        groups[key].push(member);
        return groups;
      }, {});
    },
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