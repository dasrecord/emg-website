<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeadSection from './components/HeadSection.vue'
</script>

<template>
  <img
    v-if="$route.path == '/'"
    alt="EMG logo"
    class="logo"
    src="@\assets\emg_logo.png"
    width="125"
    height="125"
  />
  <header>
    <div>
      <HeadSection site_name="EVOLVED MUSIC GROUP" tagline="Empowering Musical Growth" />
      <nav v-if="!($route.path == '/' || $route.path.toLowerCase().includes('/internal/'))">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/consultancy">Consultancy</RouterLink>
        <RouterLink to="/intake">Intake</RouterLink>
        <RouterLink to="/songwritingcamps">Camps</RouterLink>
        <RouterLink to="/demos">Demos</RouterLink>
        <RouterLink to="/team">Team</RouterLink>
        <RouterLink to="/roster">Roster</RouterLink>
        <RouterLink to="/twitch">Livestream</RouterLink>
        <RouterLink to="/placements">Placements</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style>
header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* max-height: 80vh; */
  font-size: 2rem;
  margin-bottom: 1rem;
}

.logo {
  float: left;
  align-self: center;
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

nav {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
  font-size: 1.5rem;
  color: var(--color-heading);
}

nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin: 0.5rem;
  color: var(--color-heading);
  border-left: 1px solid var(--color-text);
  border-right: 1px solid var(--color-text);
  /* border-top: 1px solid var(--color-text); */
  /* border-bottom: 1px solid var(--color-text); */
  border-radius: 10px;
  /* background-color: black; */
}

/* nav a:first-of-type {
  border: 0;
} */

.typeform-embed {
  width: 100%;
  margin: 0;
  padding: 0;
}

.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

@media (max-width: 768px) {
  header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    /* place-items: center; */
    padding: 1rem;
  }

  .logo {
    height: 50px;
    width: 50px;
    margin: 0 0 2rem 0 0;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.25rem;
    align-items: center;
    text-align: center;
    font-size: 1rem;
    /* margin-top: 1rem; */
  }

  nav a {
    width: 40%;
    border: 1px solid var(--color-text);
    justify-content: center;
    padding: 0.2rem 0.1rem 0.2rem 0.1rem;
    margin: 0.25rem;
    font-size: small;
    border-radius: 5px;
  }
  nav a:first-of-type {
    border: 1px solid var(--color-text);
  }
}
</style>
