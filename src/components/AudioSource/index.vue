<template>
  <audio id="audio">
    <source :src="audioSource" type="audio/mpeg">
  </audio>
</template>

<script>
import audio from 'http://rivegauche.streamakaci.com/rivegauche.mp3'

export default {
  name: 'AudioSource',
  data() {
    return {
      audioSource: audio,
    };
  },
};
</script>

<style scoped>
</style>
