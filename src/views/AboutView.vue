<template>
  <div>
    <h1>About</h1>
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
    fetch('/path/to/answer.txt')
      .then(response => response.text())
      .then(data => {
        this.content = data;
      });
  },
};
</script>