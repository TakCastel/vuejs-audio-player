<template>
  <div class="volumeBar">
    <input
      id="volumeInput"
      type="range"
      min="0"
      max="100"
      value=volume
      v-on:input="update()"
      v-model="volume">
  </div>
</template>

<script>
export default {
  name: 'VolumeBar',
  data() {
    return {
      volume: this.$store.state.volumeValue,
    };
  },
  methods: {
    update() {
      this.$store.commit('updateVolume');
    },
  },
};
</script>

<style scoped>
  .volumeBar {
    display:flex;
    width: 5em
  }
  input[type=range] {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-progress-appearance: none;
    position: relative;
    width: 100%;
    height: 0.25em;
    border-radius: 1em;
    cursor: pointer;
    background: var(--primary);
  }
  input[type=range]:focus {
    outline: 0
  }
  /* Webkit */
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 18px;
    width: 18px;
    border-radius: 1em;
    background: var(--primary);
    cursor: pointer;
    }
  /* Firefox  */
  input[type=range]::-moz-range-thumb {
    height: 18px;
    width: 18px;
    border-radius: 1em;
    background: var(--primary);
    cursor: pointer;
  }
  /* IE */
  input[type=range]::-ms-thumb {
    height: 18px;
    width: 18px;
    border-radius: 1em;
    background: var(--primary);
    cursor: pointer;
  }
</style>
