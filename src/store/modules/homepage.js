import { getTestDataApi } from '@/http/api/test.api'
const state = {
  shoppingData: []
}

const getters = {
  shoppingData: state => {
    return state.shoppingData
  }
}

const mutations = {
  SET_SHOPPING_DATA (state, data) {
    state.shoppingData = data
  }
}

const actions = {
  setShoppingData ({ commit }, data) {
    getTestDataApi().then(result => {
      commit('SET_SHOPPING_DATA', result.data)
    }, err => {
      console.log(err)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
