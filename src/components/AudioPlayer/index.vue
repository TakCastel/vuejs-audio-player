<template>
  <div class="container">
    <md-content md-theme="selection-orange">
      <h1>javascript audio player</h1>
      <p>this is an example of a javascript audio player built with vuejs</p>
    </md-content>
    <audio-source/>
    <div class="player">
      <audio-control/>
      <volume-icon/>
      <volume-bar/>
    </div>
    <!-- <md-button>Fork this project</md-button> -->
  </div>
</template>

<script>
import AudioSource from '@/components/AudioPlayer/AudioSource';
import AudioControl from '@/components/AudioPlayer/AudioControl';
import VolumeBar from '@/components/AudioPlayer/VolumeControl/VolumeBar';
import VolumeIcon from '@/components/AudioPlayer/VolumeControl/VolumeIcon';

export default {
  name: 'AudioPlayer',
  components: {
    AudioSource,
    AudioControl,
    VolumeBar,
    VolumeIcon,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.player > * {
  margin: 0 0.5em;
}
.player {
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0.5em 0.5em 2em -1.5em rgba(0,0,0, 0.5);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 2em;
  margin: 1em;
  padding: 1em;
}
.player:hover {
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0.5em 0.5em 2em -1.5em rgba(0,0,0, 1);
}
</style>
