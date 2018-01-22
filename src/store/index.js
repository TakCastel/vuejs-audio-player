import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* eslint-disable */

// Root state object
const state = {
  volumeMute: false,
  volumeValue: 75,
  volumeSaved: 75,
};

const mutations = {

  // Toggle volume on/off
  volumeToggle: function(state) {
    state.volumeSaved = state.volumeValue

    state.volumeMute = !state.volumeMute
    audio.muted = !audio.muted

    // Handle specific volume behavior when toggle
    if (audio.muted === true) {
      // Forces the volume bar to switch off
      document.getElementById('volumeInput').value = 0
    } else if (audio.muted !== true && state.volumeSaved >= 10) {
      // Forces the volume bar to recover last position
      document.getElementById('volumeInput').value = state.volumeSaved
    } else if (audio.muted !== true && state.volumeSaved < 10) {
      // Forces the volume to be at least 10 after toggle
      document.getElementById('volumeInput').value = 10
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

const actions = {

}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
// const mutations = {
//   // increment (state) {
//   //   state.count++
//   // },
//   // decrement (state) {
//   //   state.count--
//   // }
// };

// actions are functions that cause side effects and can involve
// asynchronous operations.
// const actions = {
//   // increment: ({ commit }) => commit('increment'),
//   // decrement: ({ commit }) => commit('decrement'),
//   // incrementIfOdd ({ commit, state }) {
//   //   if ((state.count + 1) % 2 === 0) {
//   //     commit('increment')
//   //   }
//   // },
//   // incrementAsync ({ commit }) {
//   //   return new Promise((resolve, reject) => {
//   //     setTimeout(() => {
//   //       commit('increment')
//   //       resolve()
//   //     }, 1000)
//   //   })
//   // }
// };

// getters are functions
// const getters = {
//   onVisible: statestate.onVisible,
// };

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  mutations,
  // getters,
  // actions,
  // mutations,
})

