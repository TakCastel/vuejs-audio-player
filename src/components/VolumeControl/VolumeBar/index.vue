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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .volume-total {
    width: 10em;
    height: 0.25em;
    cursor: pointer;
    background: #999;
  }
  .volume-set {
    position: relative;
    width: 8em;
    height: 0.25em;
    cursor: pointer;
    background: #e94b24;
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
    background: #e94b24;
  }
</style>
