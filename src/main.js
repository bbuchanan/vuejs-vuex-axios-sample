// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    projects: []
  },
  actions: {
    loadProjectList: function({commit}) {
      axios.get('https://api.github.com/users/bbuchanan/repos').then((response) => {
        commit('setProjectList', {list: response.data})
      }, (err) => {
        console.log(err)
      })
    }
  },
  mutations: {
    setProjectList: (state, {list}) => {
      state.projects = list
    }
  },
  getters: {
    openProjects: state => {
      return state.projects.filter(p => !project.completed)
    },
    projects: state => state.projects
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store: store
})
