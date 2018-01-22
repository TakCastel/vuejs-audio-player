<template>
  <div class="pointer" v-on:click="toggle()">
    <md-icon v-show="playVisible">play_arrow</md-icon>
    <md-icon v-show="pauseVisible">pause</md-icon>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'AudioControl',
    data: function() {
      return {
        playVisible: true,
        pauseVisible: false,
      }
    },
  methods:{
    toggle: function() {
      this.playVisible = !this.playVisible
      this.pauseVisible = !this.pauseVisible
      if (this.playVisible === false) {
        audio.play()
      } else {
        audio.pause()
      }
    }
  }
};
</script>

<style scoped>
</style>
