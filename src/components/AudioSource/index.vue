<template>
  <audio id="audio">
    <source :src="audioSource" type="audio/mpeg">
  </audio>
</template>

<script>
import audio from '@/assets/audio/omiki-walame.mp3';

// You can also use this url for radio test :
// http://rivegauche.streamakaci.com/rivegauche.mp3

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
