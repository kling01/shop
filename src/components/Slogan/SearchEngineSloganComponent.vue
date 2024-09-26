<template>
    <div class="slogan-container">
      <h1 class="slogan-title">
        <span v-html="animatedText"></span> <!-- 动态显示宣传语 -->
      </h1>
    </div>
  </template>
  
  <script>
  import { ref, watch } from 'vue'; // 添加 watch 监听
  import { useI18n } from 'vue-i18n';
  
  export default {
    name: 'SearchEngineSloganComponent',
    setup() {
      const { t, locale } = useI18n(); // 获取 i18n 的 t 和 locale
      const text = ref(t('slogan.text')); // 获取当前语言的宣传语
      const animatedText = ref(''); // 用于动态展示字符
      const currentIndex = ref(0); // 当前展示到的字符索引
  
      // 打字效果函数
      const typeWriterEffect = () => {
        if (currentIndex.value < text.value.length) {
          animatedText.value += text.value.charAt(currentIndex.value);
          currentIndex.value++;
          setTimeout(typeWriterEffect, 100); // 递归调用，逐字显示
        }
      };
  
      // 初始化打字机效果
      const startTypingEffect = () => {
        animatedText.value = ''; // 清空之前内容
        currentIndex.value = 0;
        text.value = t('slogan.text'); // 更新为当前语言的宣传语
        typeWriterEffect(); // 开始打字动画
      };
  
      // 当组件挂载时启动动画
      startTypingEffect();
  
      // 监听语言切换
      watch(locale, () => {
        startTypingEffect(); // 当语言变化时重新启动动画
      });
  
      return {
        animatedText,
      };
    },
  };
  </script>
  
  <style scoped>
  .slogan-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px; /* 容器高度 */
    margin-top: 50px; /* 顶部留白 */
  }
  
  .slogan-title {
    font-size: 3rem; /* 字体大小 */
    font-weight: bold;
    color: #4285f4; /* 文字颜色 */
    background: -webkit-linear-gradient(#000000, #000000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    margin: 0;
    animation: fadeIn 3s ease-in-out; /* 淡入动画 */
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  </style>
  