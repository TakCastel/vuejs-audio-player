<template>
  <div class="pointer" v-on:click="toggle()">
    <md-icon v-show="upOpen">volume_up</md-icon>
    <md-icon v-show="offOpen">volume_off</md-icon>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'VolumeOff',
    data: function() {
      return {
        upOpen: true,
        offOpen: false,
      }
    },
  methods:{
    toggle: function() {
      this.upOpen = !this.upOpen
      this.offOpen = !this.offOpen
      audio.muted = !audio.muted
      console.log('test')
    }
  }
};
</script>

<style scoped>
</style>
