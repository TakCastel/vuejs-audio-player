<template>
  <div>
     <h1>{{ volumeBar }}</h1>
  </div>
</template>

<script>
export default {
  name: 'VolumeBar',
  data() {
    return {
      volumeBar: 'This is the VolumeBar Component',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
