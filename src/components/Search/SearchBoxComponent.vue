<template>
    <div class="search-box-container">
      <input
        v-model="query"
        :placeholder="$t('search.placeholder')"
        class="search-input"
        @keyup.enter="performSearch"
      />
      <button class="search-button" @click="performSearch">
        <img src="@/assets/icons/search_icon.svg" alt="搜索" />
      </button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { searchProducts } from '@/api/searchService'; // 引入 API 服务
  
  export default {
    name: "SearchBoxComponent",
    setup() {
      const query = ref(''); // 搜索关键词
      const performSearch = async () => {
        if (query.value.trim() !== "") {
          try {
            const searchResults = await searchProducts(query.value);
            console.log('搜索结果:', searchResults);
            // 在此处处理搜索结果，比如导航到结果页面或者将结果展示在当前页面
          } catch (error) {
            console.error('搜索失败', error);
          }
        }
      };
  
      return {
        query,
        performSearch,
      };
    },
  };
  </script>
  
  <style scoped>
  /* 样式保持不变 */
  .search-box-container {
    display: flex;
    align-items: center;
    margin: 50px 0;
  }
  
  .search-input {
    width: 800px;
    padding: 15px 20px;
    border-radius: 30px;
    border: 1px solid #ddd;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s;
  }
  
  .search-input:focus {
    border-color: #4285f4;
  }
  
  .search-button {
    background-color: #4285f4;
    border: none;
    border-radius: 50%;
    padding: 10px;
    margin-left: -50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .search-button img {
    width: 20px;
    height: 20px;
  }
  </style>
  