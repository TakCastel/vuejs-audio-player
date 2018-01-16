<template>
  <div v-on:click="play" class="pointer svg">
    <md-icon class="pointer">play_arrow</md-icon>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Play',
  methods: {
    play: function (event) {
      event.preventDefault();
      audio.play();
    },
  },
};
</script>

<style scoped>
</style>
