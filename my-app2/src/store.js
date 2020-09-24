import Vue from "vue";
import Vuex from "vuex";
import User from "./models/User";
Vue.use(Vuex);
const store = new Vuex.Store({
  strict: true,
  state: {
    user: null
  },
  getters: {
    getUser: state => () => {
      return state.user;
    }
  },
  actions: {
    async userLogin(context, params) {
      // TODO implement user login
      return Promise.reject("Not implemented");
    }
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    }
  }
});
export default store;
