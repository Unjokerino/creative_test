const state = () => ({
    all: [],
})

// getters
const getters = {
    favoriteList: (state) => {
       return state.all
    },
}

// actions
const actions = {
    addApartmentToFavorites({ state, commit }, id_apartment) {
        const apartment = state.all.find(id => id === id_apartment)
        if (!apartment) {
            commit('pushToFavoriteApartments', { id_apartment })
        }else{
            commit('removeFromFavoriteApartments', { id_apartment })
        }
    }
}

// mutations
const mutations = {
    pushToFavoriteApartments(state, {id_apartment}){
        state.all.push(id_apartment)
    },
    removeFromFavoriteApartments(state, {id_apartment}){
        state.all = state.all.filter(id => id != id_apartment)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
