<template>
  <audio id="audio">
    <source src="http://rivegauche.streamakaci.com/rivegauche.mp3" type="audio/mpeg">
  </audio>
</template>

<script>
export default {
  name: 'AudioSource',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.player:first-child {
  flex: 1;
}
.player {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 1em;
  padding: 1em;
}
</style>
