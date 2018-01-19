<template>
  <div class="volumeBar">
    <input
      id="volumeBarInput"
      type="range"
      min="0"
      max="100"
      v-on:mouseup="updateVolume()"
      v-model="volumeValue"
    >
  </div>
</template>

<script>
/* eslint-disable */
export default {

  name: 'VolumeBar',
  data: function() {
    return {
      volumeValue: 7.5,
    }
  },
  methods: {
    updateVolume: function() {
      const volume = document.getElementById('volumeBarInput').value;
      console.log(volume)
      audio.muted = false
      if (this.$store.state.volumeMute === true) {
        this.$store.state.volumeMute = false
      }
    }
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
