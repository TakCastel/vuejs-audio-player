<template>
  <div v-on:click="pause" class="pointer svg">
    <md-icon class="pointer">pause</md-icon>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Pause',
  methods: {
    pause: function (event) {
      event.preventDefault();
      audio.pause();
    },
  },
};
</script>

<style scoped>
</style>
