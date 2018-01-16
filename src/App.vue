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
  font-size: 1.2em;
}
h1 {
  font-size: 3em;
  font-weight: 400;
  line-height: 2em;
}
p {
  font-size: 1.2em;
}
a {
  text-decoration: none;
  color: var(--primary)
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
}
.pointer:hover {
  color: var(--primary);
}
</style>
