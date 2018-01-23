<template>
  <div id="app">
    <div class="brand">
      <!-- <a v-link href="#">
        <img id="logo" src="./assets/logo.png">
      </a> -->
    </div>
    <mu-flat-button
      class="md-raised md-accent"
      label="Audio"
      v-link href="#/audio"
      primary>
    </mu-flat-button>
    <mu-flat-button
      class="md-raised md-accent"
      label="Video"
      v-link href="#/video"
      primary>
    </mu-flat-button>
    <!-- <md-button :md-ripple="false">Fork this project</md-button> -->
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);

export default {
  name: 'App',
};
</script>

<style>
:root {
  --primary: #f37022;
  --highlight: #f3c725;
  --secondary: #f5efe9;
  --fogofwar: #716969;
  --darkside: #232020;
}
body {
  background: linear-gradient(-45deg, rgb(243, 112, 34), rgba(233, 172, 36, 0.75));
  background-attachment: fixed;
}
h1 {
  font-size: 3em;
  font-weight: 400;
  line-height: 1.5em;
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
#logo{
  width: 10em;
  margin: 1em 0 1.5em 0;
}
.mu-flat-button {
  border-radius: 1.5em;
  font-weight: 500;
  background: var(--primary);
  color: var(--secondary);
}
.mu-flat-button:hover {
  background: var(--secondary);
  color: var(--primary);
}
.pointer {
  cursor: pointer;
  transition: all .1s
}
.pointer:hover {
  color: var(--primary);
}
.darken {
  color: var(--darkside)
}
</style>
