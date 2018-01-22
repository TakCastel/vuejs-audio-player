<template>
  <audio id="audio">
    <source :src="audioSource" type="audio/mpeg">
  </audio>
</template>

<script>
export default {
  name: 'AudioSource',
  data() {
    return {
      audioSource: 'http://rivegauche.streamakaci.com/rivegauche.mp3',
    };
  },
};
</script>