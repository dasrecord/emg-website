<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h2>Home of the world's most talented upcoming artists.</h2>
  </div>
</template>

<style>
h1  {
  font-weight: 800;
  font-size: 4.6rem;
  position: relative;
  top: -10px;
  margin-top: -1rem;
  margin-bottom: -1rem;
}

h2 {
  text-align: center;
  margin-top: -1rem;
  margin-bottom: -1rem;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (max-width: 768) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
