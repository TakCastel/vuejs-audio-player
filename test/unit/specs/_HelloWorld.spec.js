import Vue from 'vue';
import AudioSource from '@/components/AudioSource';

describe('AudioSource.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(AudioSource);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App');
  });
});
