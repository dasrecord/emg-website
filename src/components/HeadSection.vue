<script setup>
defineProps({
  site_name: {
    type: String,
    required: true
  },
  tagline: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ site_name }}</h1>
    <h2>{{ tagline }}</h2>
  </div>
</template>

<style>
h1 {
  font-weight: 600;
  font-size: 4.6rem;
  position: relative;
  top: -10px;

  margin-bottom: -1rem;
}

h2 {
  text-align: center;
  margin-top: -1rem;
  margin-bottom: -1rem;
  color: var(--color-heading);
}

h3 {
  font-size: 1.2rem;
}

.greetings {
  display: row;
}
.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (max-width: 768px) {
  .greetings h1 {
    font-size: 2rem;
  }

  .greetings h2 {
    font-size: 1.5rem;
  }
}
</style>
