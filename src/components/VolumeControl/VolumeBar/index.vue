<template>
  <div class="volume-total">
    <div class="volume-set" v-on:click="drag()"></div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'VolumeBar',
  data() {
      return {
        volumeValue: 7.5,
        volumeDrag: false,
      }
    },
  methods: {
    drag: function (event) {
      const volume = document.getElementsByClassName('.volume-set')
      const percentage = 0
      audio.muted = false

      // const updateVolume = function (axis)

      if (this.$store.state.volumeMute === true) {
        this.$store.state.volumeMute = !this.$store.state.volumeMute
      }

      console.log(volume)
    }
    // update: function (event) {
    //   audio.volume = this.volumeValue / 100
    // },
  },
};
</script>

<style scoped>
  .volume-total {
    width: 10em;
    height: 0.25em;
    cursor: pointer;
    background: var(--secondary);
  }
  .volume-set {
    position: relative;
    width: 75%;
    height: 0.25em;
    cursor: pointer;
    background: var(--primary);
  }
  .volume-set:after {
    content: '';
    display: block;
    position: absolute;
    right: -8px;
    top: -50%;
    bottom: -50%;
    margin-top: auto;
    margin-bottom: auto;
    width: 0.75em;
    height: 0.75em;
    border-radius: 0.5em;
    background: var(--primary);
  }
</style>
