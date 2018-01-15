import Vue from 'vue';
import Router from 'vue-router';
import AudioPlayer from '@/components/AudioPlayer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PLAYER',
      component: AudioPlayer,
    },
  ],
});
