<template>
  <div class="camps">
    <h1>Songwriting Camps</h1>
    <h1>2025</h1>

    <div class="camp">
      <h2>Texas</h2>
      <h3>USA</h3>
      <h3>March 1st-6th, 2025</h3>
      <p>Tickets Coming Soon</p>
      <!-- <a href=""> Buy Passes</a> -->
    </div>
    <div class="camp">
      <h2>Nashville</h2>
      <h3>USA</h3>
      <h3>March 17th - 20th, 2025</h3>
      <p>Tickets Coming Soon</p>
      <!-- <a href=""> Buy Passes</a> -->
    </div>
    <div class="camp">
      <h2>Los Angeles</h2>
      <h3>USA</h3>
      <h3>March 21st - 23rd, 2025</h3>
      <p>Tickets Coming Soon</p>
      <!-- <a href=""> Buy Passes</a> -->
    </div>
    <div class="camp">
      <h2>Miami</h2>
      <h3>USA</h3>
      <h3>March 24th - 27th, 2025</h3>
      <p>Tickets Coming Soon</p>
      <!-- <a href=""> Buy Passes</a> -->
    </div>
    <div class="camp">
      <h2>New York</h2>
      <h3>USA</h3>
      <h3>April 1st - 6th, 2025</h3>
      <p>Tickets Coming Soon</p>
      <!-- <a href=""> Buy Passes</a> -->
    </div>
    <div class="camp">
      <h2>Atlanta</h2>
      <h3>USA</h3>
      <h3>April 8th - 13th, 2025</h3>
      <p>Tickets Coming Soon</p>
      <!-- <a href=""> Buy Passes</a> -->
    </div>
    <div class="camp">
      <h2>Toronto</h2>
      <h3>Canada</h3>
      <h3>April 15th - 17th, 2025</h3>
      <p>Tickets Coming Soon</p>
      <!-- <a href=""> Buy Passes</a> -->
    </div>
    <div class="camp">
      <h2>London</h2>
      <h3>UK</h3>
      <h3>April 18th - 21st, 2025</h3>
      <p>Tickets Coming Soon</p>
      <!-- <a href=""> Buy Passes</a> -->
    </div>
    <div class="camp">
      <h2>Ibiza</h2>
      <h3>Spain</h3>
      <h3>April 19th - 22nd, 2025</h3>
      <p>Tickets Coming Soon</p>
      <!-- <a href=""> Buy Passes</a> -->
    </div>
    <div class="camp">
      <h2>Berlin</h2>
      <h3>Germany</h3>
      <h3>May 10th - 13th, 2025</h3>
      <p>Tickets Coming Soon</p>
      <!-- <a href=""> Buy Passes</a> -->
    </div>
    <div class="camp">
      <h2>Brighton</h2>
      <h3>UK</h3>
      <h3>May 24th - 27th, 2025</h3>
      <p>Tickets Coming Soon</p>
      <!-- <a href=""> Buy Passes</a> -->
    </div>
    <div class="camp">
      <h2>London</h2>
      <h3>UK</h3>
      <h3>May 28th - June 1st, 2025</h3>
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
