<template>
  <div class="auth-container">
    <form @submit.prevent="handleLogin" class="auth-form">
      <h2>{{ $t('login.title') }}</h2>
      <input v-model="email" :placeholder="$t('login.email')" type="email" required />
      <input v-model="password" :placeholder="$t('login.password')" type="password" required />
      <button type="submit" class="auth-button">{{ $t('login.loginButton') }}</button>
      <p v-if="error" class="error">{{ $t('login.error') }}</p>
      <p class="toggle-view" @click="goToRegister">{{ $t('login.toggle') }}</p>
    </form>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'; // 引入 vue-router

export default {
  name: 'UserLogin',
  setup() {
    const store = useStore();
    const router = useRouter(); // 获取路由实例
    const email = ref('');
    const password = ref('');
    const error = computed(() => store.state.auth.error);
    
    const handleLogin = async () => {
      await store.dispatch('auth/login', { email: email.value, password: password.value });
    };

    const goToRegister = () => {
      // 跳转到注册页面
      router.push('/register'); // 确保路由设置正确
    };

    return { email, password, error, handleLogin, goToRegister };
  },
};
</script>

<style scoped>
.auth-container {
    width: 400px; 
    max-width: 100%; 
    padding: 20px; 
    margin: auto; 
    border-radius: 8px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
}

.auth-form {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 40px 30px; 
  border-radius: 10px; 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
  width: 100%;
  max-width: 400px;
  transition: transform 0.3s ease, opacity 0.3s ease; 
  opacity: 0;
  animation: fadeIn 0.5s forwards; 
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.auth-form:hover {
  transform: translateY(-5px); 
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
  background-color: #28a745; 
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 10px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.auth-button:hover {
  background-color: #218838;
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
