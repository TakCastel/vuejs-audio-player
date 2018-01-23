import Vue from 'vue';
import Router from 'vue-router';
import AudioPlayer from '@/components/AudioPlayer';
import VideoPlayer from '@/components/VideoPlayer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HOME',
    },
    {
      path: '/audio',
      name: 'AUDIO_PLAYER',
      component: AudioPlayer,
    },
    {
      path: '/video',
      name: 'VIDEO_PLAYER',
      component: VideoPlayer,
    },
  ],
});
