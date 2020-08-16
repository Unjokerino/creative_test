import Vue from 'vue'
import Vuex from 'vuex'
import apartments from './modules/apartments'
import favorites from './modules/favorites'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    apartments,
    favorites
  },
  strict: true,
})