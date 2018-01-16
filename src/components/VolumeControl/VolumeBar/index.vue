<template>
  <div class="volume-total">
    <div class="volume-set"></div>
  </div>
</template>

<script>
export default {
  name: 'VolumeBar',
  // data() {
  //   return {
  //     volumeBar: 'This is the VolumeBar Component',
  //   };
  // },
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
    top: -5px;
    width: 1em;
    height: 1em;
    border-radius: 0.5em;
    background: var(--primary);
  }
</style>
