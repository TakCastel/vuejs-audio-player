<template>
  <div class="pointer" v-on:click="toggle()">
    <md-icon v-show="!this.$store.state.audioPlay">play_arrow</md-icon>
    <md-icon v-show="this.$store.state.audioPlay">pause</md-icon>
  </div>
</template>

<script>
import { store } from '@/store';
export default {
  name: 'AudioControl',
  methods:{
    toggle: function() {
      this.$store.commit('audioToggle');
    }
  }
};
</script>