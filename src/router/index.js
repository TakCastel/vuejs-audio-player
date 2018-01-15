import Vue from 'vue';
import Router from 'vue-router';
import AudioSource from '@/components/AudioSource';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AudioSource',
      component: AudioSource,
    },
  ],
});
