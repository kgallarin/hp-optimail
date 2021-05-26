import sampleService from "@services/sample";

export default {
  namespaced: true,
  state: {
    blog_data: null
  },
  getters: {
    GET_BLOG_DATA(state) {
      return state.blog_data;
    }
  },
  mutations: {
    SET_BLOG_DATA(state, payload) {
      state.blog_data = payload
    }
  },
  actions: { }
};
