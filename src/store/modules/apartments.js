import api from '../../api/apartments'

// initial state
const state = () => ({
  all: []
})

const actions = {
  getAllApartments ({ commit }) {
    api.getApartments(apartments => {
      const response = apartments.response
      commit('setApartments', response)
    })
  }
}

const mutations = {
  setApartments (state, apartments) {
    state.all = apartments
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}