import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* eslint-disable */

// Root state object
const state = {
  audioPlay: false,
  volumeMute: false,
  volumeValue: 75,
  volumeSaved: 75,
};

const mutations = {

  // Toggle play/pause
  audioToggle: function() {
    const playerVisible = document.getElementsByClassName('player')

    state.audioPlay = !state.audioPlay
    
    if (state.audioPlay === true) {
      audio.play()
    } else if (playerVisible === false) {
      state.audioPlay = false
    } else {
      audio.pause()
    }
  },

  // Toggle volume on/off
  volumeToggle: function() {
    // Saves the volume to reset it from last position
    state.volumeSaved = state.volumeValue
    state.volumeMute = !state.volumeMute
    audio.muted = !audio.muted

    // Handle specific volume behavior when toggle
    if (state.volumeMute === true) {
      // Forces the volume bar to switch off
      document.getElementById('volumeInput').value = 0
    } else if (state.volumeMute !== true && state.volumeSaved >= 10) {
      // Forces the volume bar to recover last position
      document.getElementById('volumeInput').value = state.volumeSaved
    } else if (state.volumeMute !== true && state.volumeSaved < 10) {
      // Forces the volume to be at least 10 after toggle
      document.getElementById('volumeInput').value = 10
      audio.volume = 0.1
      audio.muted = false
      state.volumeValue = 10
    }
  },

  // Update volume
  updateVolume: function() {
    const volume = document.getElementById('volumeInput').value;
    const percentage = volume / 100
    
    audio.muted = false
    audio.volume = percentage
    state.volumeValue = volume

    if (state.volumeMute === true) {
      state.volumeMute = false
    } else if (volume <= 0) {
      state.volumeMute = true
      audio.muted
    }
  }

}

export default new Vuex.Store({
  state,
  mutations,
})
