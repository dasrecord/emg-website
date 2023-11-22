<script setup>
import { RouterLink, RouterView, } from 'vue-router'
import HeadSection from './components/HeadSection.vue'
</script>

<template>
  <img v-if="$route.path == '/'" alt="EMG logo" class="logo" src="@\assets\emg_logo.png" width="125" height="125" />
  <header>
    <div>
      <HeadSection
      site_name="EVOLVED MUSIC GROUP"
      tagline="Empowering Musical Growth" />
      <nav v-if="$route.path != '/'">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About Us</RouterLink>
        <RouterLink to="/intake">Artist Intake</RouterLink>
        <RouterLink to="/demos">Submit Demos</RouterLink>
        <RouterLink to="/team">Our Team</RouterLink>
        <RouterLink to="/roster">Our Roster</RouterLink>
        <RouterLink to="/placements">Our Placements</RouterLink>
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
  line-height: 1.5;
  max-height: 80vh;
  margin: 1rem 1rem 2rem 1rem;
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
  flex-wrap: wrap;
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  font-size: 2rem;
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem 1rem 1rem;
  color: var(--color-heading);
  border-left: 1px solid var(--color-text);
}

nav a:first-of-type {
  border: 0;
}

.typeform-embed {
  display: block;
  width: 100vw;
  min-height: max-content;

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
    justify-content: space-evenly;
    align-items: center;
    place-items: center;
  }

  .logo {
    height: 50px;
    width: 50px;
    margin: 0 0 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    font-size: 0.8rem;
    padding: 1rem 1rem 1rem 1rem;
    margin-top: 1rem;
  }
}
</style>
