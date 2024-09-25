import { createStore } from 'vuex';
import auth from './modules/auth';
import language from './modules/language';

const store = createStore({
  modules: {
    auth,
    language,
  },
});

export default store;
