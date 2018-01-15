<template>
  <div>
    <audio-source/>
    <div class="player">
      <volume-on/>
      <volume-bar/>
    </div>
  </div>
</template>

<script>
import AudioSource from '@/components/AudioSource';
import VolumeBar from '@/components/VolumeControl/VolumeBar';
import VolumeOn from '@/components/VolumeControl/VolumeIcon/VolumeOn';

export default {
  name: 'AudioPlayer',
  components: {
    AudioSource,
    VolumeBar,
    VolumeOn,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.player > * {
  margin: 0 0.5em;
}
.player {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 1em;
  padding: 1em;
}
</style>
