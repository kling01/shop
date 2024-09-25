import { login, register } from '@/api/authService';

const state = {
  user: null,
  error: null,
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setError(state, error) {
    state.error = error;
  },
};

const actions = {
  async login({ commit }, credentials) {
    try {
      const response = await login(credentials);
      commit('setUser', response.data);
      commit('setError', null);
    } catch (error) {
      commit('setError', '登录失败，请检查您的凭据。');
    }
  },
  async register({ commit }, userData) {
    try {
      const response = await register(userData);
      commit('setUser', response.data);
      commit('setError', null);
    } catch (error) {
      commit('setError', '注册失败，请重试。');
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
