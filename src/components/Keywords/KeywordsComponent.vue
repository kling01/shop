<template>
    <div class="keywords">
      <h3>{{ $t('keywords.title') }}</h3>
      <div class="keyword-list">
        <span v-for="(keyword, index) in keywords" :key="index" class="keyword">
          {{ keyword }}
        </span>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { getRelatedKeywords } from '@/api/keywordsService'; // 调用关键词相关接口
  
  export default {
    name: 'KeywordsComponent',
    setup() {
      const keywords = ref([]);
  
      const fetchKeywords = async () => {
        try {
          const response = await getRelatedKeywords(); // 调用关键词接口
          keywords.value = response.data.keywords;
        } catch (error) {
          console.error('Failed to fetch keywords', error);
        }
      };
  
      // 模拟组件加载时获取关键词
      fetchKeywords();
  
      return {
        keywords,
      };
    },
  };
  </script>
  
  <style scoped>
  .keywords {
    margin: 20px 0;
  }
  
  .keyword-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .keyword {
    background-color: #e0f7fa;
    padding: 10px;
    border-radius: 8px;
    font-size: 14px;
  }
  </style>
  