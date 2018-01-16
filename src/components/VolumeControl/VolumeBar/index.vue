<template>
  <div class="volume-total">
    <div class="volume-set"></div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'VolumeBar',
  methods: {
    drag: function (event) {
      event.preventDefault();
      audio.muted = true;
    },
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
    width: 8em;
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
