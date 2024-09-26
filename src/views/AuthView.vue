<!-- src/views/AuthView.vue -->
<template>
  <div class="auth-view">
    <div class="background"></div>
    <div class="content">
      <UserLogin v-if="isLogin" @toggle-view="toggleView" />
      <UserRegister v-else @toggle-view="toggleView" />
    </div>
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 确保填满整个视口 */
  overflow: hidden;
}

.content {
  position: relative;
  z-index: 1; /* 确保内容在虚化背景之上 */
  background: rgba(255, 255, 255, 0.8); /* 半透明白色背景 */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* 添加阴影 */
}
</style>
