<template>
  <div class="container">
    <h1>javascript audio player</h1>
    <p>this is an example of a javascript audio player built with vuejs</p>
    <audio-source/>
    <div class="player">
      <play/>
      <pause/>
      <volume-on/>
      <volume-off/>
      <volume-bar/>
    </div>
    <!-- <md-button>Fork this project</md-button> -->
  </div>
</template>

<script>
import AudioSource from '@/components/AudioSource';
import Play from '@/components/AudioControl/Play';
import Pause from '@/components/AudioControl/Pause';

import VolumeBar from '@/components/VolumeControl/VolumeBar';
import VolumeOn from '@/components/VolumeControl/VolumeIcon/VolumeOn';
import VolumeOff from '@/components/VolumeControl/VolumeIcon/VolumeOff';

export default {
  name: 'AudioPlayer',
  components: {
    AudioSource,
    Play,
    Pause,
    VolumeBar,
    VolumeOn,
    VolumeOff,
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
  transition: all 0.1s;
}
.player:hover {
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0.5em 0.5em 2em -1.5em rgba(0,0,0, 1);
}
</style>
