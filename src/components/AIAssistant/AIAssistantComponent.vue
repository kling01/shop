<template>
    <div class="ai-assistant">
      <h2>{{ $t('ai_assistant.title') }}</h2>
      <div class="assistant-dialogue">
        <p>{{ $t('ai_assistant.prompt') }}</p>
        <button @click="requestRecommendation">{{ $t('ai_assistant.buttonText') }}</button>
      </div>
      <div v-if="recommendations.length" class="assistant-recommendations">
        <div v-for="(product, index) in recommendations" :key="index" class="product-item">
          <img :src="product.image" alt="Product Image" />
          <p>{{ product.name }}</p>
          <p>{{ $t('ai_assistant.price', { price: product.price }) }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { getAIRecommendations } from '@/api/aiAssistantService'; // 引入 API
  
  export default {
    name: 'AIAssistantComponent',
    setup() {
      const recommendations = ref([]);
  
      const requestRecommendation = async () => {
        try {
          const response = await getAIRecommendations(); // 调用 AI 接口
          recommendations.value = response.data.products; // 更新推荐内容
        } catch (error) {
          console.error('Failed to get recommendations', error);
        }
      };
  
      return {
        recommendations,
        requestRecommendation,
      };
    },
  };
  </script>
  
  <style scoped>
  .ai-assistant {
    background-color: #eaf3ff;
    padding: 20px;
    border-radius: 10px;
  }
  
  .assistant-dialogue {
    margin-bottom: 20px;
  }
  
  .assistant-recommendations {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .product-item {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .product-item img {
    width: 60px;
    height: 60px;
    border-radius: 8px;
  }
  </style>
  