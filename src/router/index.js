import { createRouter, createWebHistory } from 'vue-router';
import AuthView from '../views/AuthView.vue';
import UserRegister from '@/components/Auth/UserRegister.vue';
const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: AuthView,
  },
  {
    path: '/',
    redirect: '/auth', // 默认重定向到 /auth
  },
  {
    path: '/register',
    component: UserRegister,
  },
  // 其他路由可以在这里添加
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
