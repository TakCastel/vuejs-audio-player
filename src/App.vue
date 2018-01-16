<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

Vue.use(VueMaterial);

export default {
  name: 'App',
};
</script>

<style>
:root {
  --primary: #e94b24;
  --secondary: #fff;
  --grey: #666;
  --dark-grey: #333;
}
body {
  background: linear-gradient(-45deg, rgba(233, 75, 36, 0.9), rgba(233, 172, 36, 0.75));
}
h1 {
  font-size: 3em;
  font-weight: 400;
  line-height: 3em;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--secondary);
  padding-top: 60px;
}
.pointer {
  cursor: pointer;
  transition: all 0.1s,
}
.pointer:hover {
  color: var(--primary);
}
.svg {
  display: inline-flex;
}
.icon-svg {
  fill: var(--secondary);
  transition: all 0.1s;
}
.svg:hover .icon-svg {
  fill: var(--primary);
}
.hide {
  display: none;
}
</style>
