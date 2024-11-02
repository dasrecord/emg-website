<template>
  <div class="camps">
    <h1>Songwriting Camps</h1>
    <div class="camp">
      <h2>Texas</h2>
      <h3>March 1st-6th, 2025</h3>
      <p>Tickets Coming Soon</p>
      <!-- <a href=""> Buy Passes</a> -->
    </div>
    <div class="camp">
      <h2>Miami</h2>
      <h3>April 18th - 21st, 2025</h3>
      <p>Tickets Coming Soon</p>
      <!-- <a href=""> Buy Passes</a> -->
    </div>
    <div class="camp">
      <h2>Ibiza</h2>
      <h3>April 19th - 22nd, 2025</h3>
      <p>Tickets Coming Soon</p>
      <!-- <a href=""> Buy Passes</a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'SongwritingCampsView',
  data() {
    return {
      // Add your data properties here
    }
  },
  methods: {
    // Add your methods here
  },
  mounted() {
    // Add your mounted logic here
  }
}
</script>

<style scoped>
h2 {
  margin-bottom: 0.5rem;
}
.camps {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.camp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid var(--color-text);
  border-radius: 25px;
  background-color: var(--color-background);
}
</style>
