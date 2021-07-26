import sampleService from "@services/sample";

export default {
  namespaced: true,
  state: {
      alert_notif: {
        message: '',
        description: ''
    },
  },
  getters: {
    GET_NOTIF(state) {
      return state.alert_notif;
    }
  },
  mutations: {
    RESET_NOTIFICATION (state) {
      state.alert_notif = {}
    },
    FLASH_ERROR (state, { msg, desc }) {
      state.alert_notif = { message: msg, description: desc, level: 'error' }
    },
    FLASH_SUCCESS (state, { msg, desc }) {
      state.alert_notif = { message: msg, description: desc,level: 'success' }
    },
  },
  actions: { }
};
