import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 100
  },
  mutations: {
    // 定义 state 状态的改变函数
    increase: function(state){
      state.num += 1
    },
    decrease(state){
      state.num -= 20
    }
  },
  actions: { 
    decreaseAction: function(context){
      context.commit('decrease')
    },
    increaseAction: function(context){
      context.commit('increase')
    }
  },
  getters: {
    // 多数时候，你是在 getter 中定义的方法来获取 state 的
    getNum: function(state){
      return state.num > 20 ? state.num : 0
    }
  }
})