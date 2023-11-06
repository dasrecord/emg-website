<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeadSection from './components/HeadSection.vue';
</script>

<template>
  <header>
    <img alt="EMG logo" class="logo" src="@\assets\emg_logo.png" width="125" height="125" />
    <div>
      <HeadSection site_name="EVOLVED MUSIC GROUP" />
      <HeadSection tagline="Home of the world's most talented upcoming artists." />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About Us</RouterLink>
        <RouterLink to="/intake">Artist Intake</RouterLink>
        <RouterLink to="/demos">Submit Demos</RouterLink>
        <RouterLink to="/team">Our Team</RouterLink>
        <RouterLink to="/roster">Our Roster</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style>
header {
  line-height: 1.5;
  max-height: 80vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  color: var(--color-heading);
}

nav a.router-link-exact-active {
  color : hsla(160, 100%, 37%, 1)

}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 1rem 1rem;
  color: var(--color-heading);
  border-left: 1px solid var(--color-text);
}

nav a:first-of-type {
  border: 0;
}

.typeform-embed {
  width: 100vw;
  height: 100%;
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

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: center;
    font-size: 1.2rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
