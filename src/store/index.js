import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    courseId: '',
    userName: 'zhang123',
    phoneNum: '18951531890',
    city: '',
    nowTemp: []
  },
  getters: {

  },
  mutations: {
    editCourId(state, courseId) {
      state.courseId = courseId
    },
    editUserName(state, userName) {
      state.userName = userName
    },
    editCity(state, city) {
      state.city = city
    },
    addNowTemp(state, nowTemp) {
      state.nowTemp = nowTemp
    }
  },
  actions: {
    asyncEditCity(context) {
      return new Promise(resolve => {
        new BMap.LocalCity().get(res => {
          const city = res.name.substr(0, res.name.length - 1)
          context.commit('editCity', city)
          resolve(city)
        })
      })
    },
    asyncAddData(context, nowTemp) {
      return new Promise(resolve => {
        context.commit('addNowTemp', nowTemp)
      })
    }
  },
  modules: {

  }
})

export default store
