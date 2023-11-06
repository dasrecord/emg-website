<template>
  <div class="blocktext">
    <!-- <h1>About</h1> -->
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: '',
    };
  },
  created() {
    fetch('/about_us.txt')
      .then(response => response.text())
      .then(data => {
        this.content = data;
      });
  },
};
</script>