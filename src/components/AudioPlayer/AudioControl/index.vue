<template>
  <div class="pointer" @click="toggle()">
    <mu-icon v-show="!this.$store.state.audioPlay" value="play_arrow"/>
    <mu-icon v-show="this.$store.state.audioPlay" value="pause"/>
  </div>
</template>

<script>
export default {
  name: 'AudioControl',
  methods: {
    toggle() {
      this.$store.commit('audioToggle');
    },
  },
};
</script>
