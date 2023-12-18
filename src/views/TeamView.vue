<template>
  <div>
    <ul>
      <TeamItem v-for="member in team" :key="member.id" class="team-member">
        <template #image >
          <a :href="member.url" class="image-link">
          <img :src="images[member.name]" class="team-image">
          </a>
        </template>
        <template #name>
          {{ member.name }}
        </template>
        <template #location>
          {{ member.location }}
        </template>
        <template #role>
          <a :href="member.url">{{ member.role }}</a>
        </template>
        <template #quote>
          <p class="quote">
            {{ member.quote }}
          </p>
        </template>
      </TeamItem>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  font-weight: 800;
  color: var(--color-heading);
}

ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 100%;
  width: 100%;
}

.team-member {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  text-align: center;
  padding: 1rem;
  margin: 1rem;
  border-radius: 25px;
}
.team-image {
  width: 100%;
  /* aspect-ratio: 1/1; */
  max-width: 300px;
  /* height: 100%; */
  overflow: hidden;
  position: relative;
  border-radius: 15px;
  transition: box-shadow 250ms ease;
}

.image-link:hover {
  background-color: transparent; /* remove the green background */
}

.image-link:hover .team-image {
  box-shadow: 0 0 20px #fff; /* add the white glow to the image */
}

.quote {
  font-size: 1rem;
  padding-top: 1rem;
  max-width: 300px;
  margin-top: -2rem;
}
</style>

<script>
import teamData from '@/stores/team.json'
import TeamItem from '@/components/TeamItem.vue'
console.log(TeamItem)

export default {
  data() {
    return {
      team: teamData,
      images: {}
    }
  },
  methods: {
    async loadArtistImage(name) {
      const imageModule = await import(`@/assets/${name}.jpg`);
      this.images[name] = imageModule.default;
    },
    formatQuote(quote) {
      return quote.replace(/\\n/g, '<br />');
    }
  },
  created() {
    for (const member of this.team) {
      this.loadArtistImage(member.name);
    }
  },
  components: { TeamItem }
}
</script>
