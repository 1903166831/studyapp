import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    courseId: '',
    userName: 'zhang123',
    phoneNum: '18951531890'
  },
  getters: {

  },
  mutations: {
    editCourId(state, courseId) {
      state.courseId = courseId
    },
    editUserName(state, userName) {
      state.userName = userName
    }
  },
  actions: {

  },
  modules: {

  }
})

export default store
