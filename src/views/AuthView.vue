<!-- src/views/AuthView.vue -->
<template>
  <div class="auth-view">
    <UserLogin v-if="isLogin" @toggle-view="toggleView" />
    <UserRegister v-else @toggle-view="toggleView" />
  </div>
</template>

<script>
import { ref } from 'vue';
import UserLogin from '@/components/Auth/UserLogin.vue';
import UserRegister from '@/components/Auth/UserRegister.vue';

export default {
  components: { UserLogin, UserRegister },
  setup() {
    const isLogin = ref(true); // 默认显示登录组件

    const toggleView = () => {
      isLogin.value = !isLogin.value; // 切换视图
    };

    return { isLogin, toggleView };
  },
};
</script>

<style scoped>
.auth-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 确保填满整个视口 */
  background-color: #f0f2f5;
}
</style>
