<template>
  <div class="pointer" @click="toggle()">
    <mu-icon v-show="!this.$store.state.volumeMute" value="volume_up"/>
    <mu-icon v-show="this.$store.state.volumeMute" value="volume_off"/>
  </div>
</template>

<script>
export default {
  name: 'VolumeIcon',
  methods: {
    toggle() {
      this.$store.commit('volumeToggle');
    },
  },
};
</script>
