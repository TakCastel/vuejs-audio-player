<template>
  <div>
    <audio id="audio" controls="">
      <source src="http://rivegauche.streamakaci.com/rivegauche.mp3" type="audio/mpeg">
    </audio>
    <div class="player">
      <volume-on/>
      <volume-bar/>
    </div>
  </div>
</template>

<script>
import VolumeBar from '@/components/VolumeControl/VolumeBar';
import VolumeOn from '@/components/VolumeControl/VolumeIcon/VolumeOn';

export default {
  name: 'AudioSource',
  components: {
    VolumeBar,
    VolumeOn,
  },
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
