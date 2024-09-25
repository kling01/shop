\<!-- src/components/Auth/UserRegister.vue -->
<template>
  <div class="auth-container">
    <form @submit.prevent="handleRegister" class="auth-form">
      <h2>{{ $t('register.title') }}</h2>
      <input v-model="username" :placeholder="$t('register.username')" type="text" required />
      <input v-model="email" :placeholder="$t('register.email')" type="email" required />
      <input v-model="password" :placeholder="$t('register.password')" type="password" required />
      <button type="submit" class="auth-button">{{ $t('register.registerButton') }}</button>
      <p v-if="error" class="error">{{ $t('register.error') }}</p>
      <p class="toggle-view" @click="toggleView">{{ $t('register.toggle') }}</p>
    </form>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'; // 引入 vue-router

export default {
  name: 'UserRegister',
  setup() { // 移除 _, { emit }
    const store = useStore();
    const username = ref('');
    const email = ref('');
    const password = ref('');
    const error = computed(() => store.state.auth.error);
    const router = useRouter();

    const handleRegister = async () => {
      await store.dispatch('auth/register', { username: username.value, email: email.value, password: password.value });
    };

    const toggleView = () => {
      // 使用 Vue Router 进行视图切换，或者其他逻辑
      // 例如：emit('toggle-view'); 如果需要发射事件
      // 这里假设在模板中直接调用了 toggleView
      // 如果不需要在 setup 中发射事件，可以保留此方法
      router.push('/auth'); // 确保路由设置正确
    };

    return { username, email, password, error, handleRegister, toggleView };
  },
};
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #f0f2f5;
  padding: 1rem; /* 为小屏幕增加内边距 */
}

.auth-form {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 40px 30px; /* 增加内边距 */
  border-radius: 10px; /* 更大的圆角 */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* 更明显的阴影 */
  width: 100%;
  max-width: 400px;
  transition: transform 0.3s ease, opacity 0.3s ease; /* 添加过渡效果 */
  opacity: 0;
  animation: fadeIn 0.5s forwards; /* 淡入动画 */
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.auth-form:hover {
  transform: translateY(-5px); /* 可选：微妙的悬停效果 */
}

h2 {
  text-align: center;
  margin-bottom: 25px;
  font-size: 2rem;
  color: #333333;
}

input {
  width: 100%;
  padding: 12px;
  margin: 12px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

.auth-button {
  padding: 12px;
  background-color: #007bff; /* 更醒目的颜色 */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 10px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.auth-button:hover {
  background-color: #0056b3;
  transform: scale(1.02);
}

.error {
  color: #dc3545;
  text-align: center;
  margin-top: 10px;
  font-size: 0.9rem;
}

.toggle-view {
  text-align: center;
  cursor: pointer;
  color: #007bff;
  margin-top: 15px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.toggle-view:hover {
  color: #0056b3;
}

@media (max-width: 768px) {
  .auth-form {
    padding: 20px 15px;
  }

  h2 {
    font-size: 1.5rem;
  }

  .auth-button {
    font-size: 0.9rem;
  }
}
</style>
