<template>
  <div class="pointer" v-on:click="toggle()">
    <md-icon v-show="!this.$store.state.volumeMute">volume_up</md-icon>
    <md-icon v-show="this.$store.state.volumeMute">volume_off</md-icon>
  </div>
</template>

<script>
/* eslint-disable */
import { store } from '@/store';

export default {
  name: 'VolumeIcon',
  methods:{
    toggle: function() {
      this.$store.commit('volumeToggle');
    }
  },
};

</script>

<style scoped>
</style>
