import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    card_visability: false,
    candidat: {
      id: NaN,
      firstName: '',
      lastName: '',
      jobTitle: '',
      photoUrl: ''
    }
  },
  mutations: {
    SET_CARD_VISABILITY(state, visability) {
      if (visability === true) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
      state.card_visability = visability
    },
    SET_CANDIDAT(state, candidat) {
      state.candidat = candidat
    }
  },
  actions: {
  },
  modules: {
  }
})
