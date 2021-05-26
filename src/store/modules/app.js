import sampleService from "@services/sample";

export default {
  namespaced: true,
  state: {
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    isModal: false,
    isSticky: false,
    navbar: {
      responsiveNav: false
    }
  },
  getters: {
    GET_WINDOW_HEIGHT(state) {
      return state.windowHeight;
    },
    GET_WINDOW_WIDTH(state) {
      return state.windowWidth;
    },
    GET_THEME_COLOR(state) {
      return state.color_theme.isLight;
    },
    GET_STICKY_NAV(state) {
      return state.isSticky;
    }
  },
  mutations: {
    SET_WINDOW_HEIGHT(state, payload) {
      state.windowHeight = payload
    },
    SET_WINDOW_WIDTH(state, payload) {
      state.windowWidth = payload
    },
    SET_STICKY_NAV(state, payload) {
      state.isSticky = payload
    }
  },
  actions: { }
};
