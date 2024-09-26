<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="left-section">
        <div class="logo">LOGO</div> <!-- Logo 区域 -->
        <div class="nav-links">
          <router-link class="nav-link" to="/">{{ $t('navbar.home') }}</router-link>
          <router-link class="nav-link" to="/products">{{ $t('navbar.products') }}</router-link>
          <router-link class="nav-link" to="/about">{{ $t('navbar.about') }}</router-link>
          <router-link class="nav-link" to="/contact">{{ $t('navbar.contact') }}</router-link>
        </div>
      </div>
      <div class="right-section">
        <div class="language-selector">
          <select v-model="selectedLanguage" @change="handleLanguageChange">
            <option value="zh">中文</option>
            <option value="en">English</option>
          </select>
        </div>
        <div class="nav-links">
          <router-link class="nav-link" to="/auth">{{ $t('navbar.login') }}</router-link>
        </div>
        <div class="user-info">
          <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar" /> <!-- 用户头像占位符 -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      selectedLanguage: 'zh', // 默认选择语言
    };
  },
  methods: {
    handleLanguageChange() {
      this.$i18n.locale = this.selectedLanguage;
    },
  },
};
</script>

<style scoped>
/* 使用全局字体 */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

.navbar {
  display: flex;
  justify-content: center; /* 居中容器 */
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1c1c1e; /* 更现代的深色背景 */
  color: white;
  font-family: 'Roboto', sans-serif; /* 使用更现代的字体 */
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.left-section {
  display: flex;
  align-items: center;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700; /* 粗体 LOGO */
  color: #ffffff; /* LOGO 颜色 */
}

.nav-links {
  display: flex;
  margin-left: 2rem; /* 增加 margin 将导航链接与 logo 分开 */
}

.nav-link {
  margin: 0 1rem;
  color: #e0e0e0; /* 较浅的文字颜色 */
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease; /* 悬停时平滑过渡 */
}

.nav-link:hover {
  color: #00aaff; /* 悬停时改变颜色 */
}

.right-section {
  display: flex;
  align-items: center;
}

.language-selector {
  margin-right: 1rem;
}

.language-selector select {
  padding: 0.5rem;
  background-color: #333;
  color: white;
  border: 1px solid #444;
  border-radius: 5px;
  outline: none;
  transition: background-color 0.3s ease; /* 平滑的颜色变化 */
}

.language-selector select:hover {
  background-color: #444; /* 悬停时变亮 */
}

.user-info {
  margin-left: 1rem;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* 为头像添加阴影 */
  transition: transform 0.3s ease; /* 为头像添加缩放动画 */
}

.user-avatar:hover {
  transform: scale(1.1); /* 悬停时头像变大 */
}

@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    margin-left: 0;
  }

  .nav-link {
    margin: 0.5rem 0;
  }

  .navbar-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .right-section {
    margin-top: 1rem;
    width: 100%;
    justify-content: space-between;
  }

  .language-selector {
    margin-right: 0;
  }

  .user-info {
    margin-left: 0;
  }
}
</style>
