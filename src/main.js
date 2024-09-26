// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import zh from './locales/zh.json';
// src/main.js
import '@/assets/styles/global.css';

const i18n = createI18n({
  locale: store.state.language.currentLanguage, // 默认语言
  fallbackLocale: 'en',
  messages: { en, zh },
});

const app = createApp(App);
app.use(router);
app.use(store);
app.use(i18n);
app.mount('#app');
