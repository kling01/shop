const state = {
    currentLanguage: 'zh',
  };
  
  const mutations = {
    setLanguage(state, language) {
      state.currentLanguage = language;
    },
  };
  
  const actions = {
    changeLanguage({ commit }, language) {
      commit('setLanguage', language);
    },
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };
  