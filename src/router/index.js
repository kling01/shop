import { createRouter, createWebHistory } from 'vue-router';
import AuthView from '../views/AuthView.vue';
import UserRegister from '@/components/Auth/UserRegister.vue';
import APPHome from '@/views/APPHome.vue'; // 引入 Home 组件

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: AuthView,
  },
  {
    path: '/',
    redirect: '/home', // 默认重定向到 /home
  },
  {
    path: '/home',
    name: 'Home', // 为 Home 路由添加名称
    component: APPHome, // 将 Home 组件添加到路由
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