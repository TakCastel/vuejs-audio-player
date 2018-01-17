<template>
  <div class="volume-total">
    <div class="volume-set" v-on:click="drag()"></div>
    <!-- <input
      orient="horizontal"
      v-model="volumeValue"
      v-on:change="update()"
      type="range"
      min="0"
      max="100"
      class="volume-slider"/> -->
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'VolumeBar',
  data: function() {
      return {
        volumeValue: 7.5,
        volumeDrag: false,
      }
    },
  methods: {
    drag: function (event) {
      const volume = document.getElementsByClassName('.volume-set')
      audio.muted = false

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
