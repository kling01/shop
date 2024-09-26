<template>
    <div class="needs-analysis">
      <h3>{{ $t('needs_analysis.title') }}</h3>
      <p>{{ $t('needs_analysis.prompt') }}</p>
      <button @click="analyzeNeeds">{{ $t('needs_analysis.buttonText') }}</button>
      <div v-if="analysisResult" class="analysis-result">
        <p>{{ analysisResult }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { analyzeUserNeeds } from '@/api/needsAnalysisService'; // 引入 GPT API
  
  export default {
    name: 'NeedsAnalysisComponent',
    setup() {
      const analysisResult = ref(null);
  
      const analyzeNeeds = async () => {
        try {
          const response = await analyzeUserNeeds(); // 调用需求分析接口
          analysisResult.value = response.data.analysis;
        } catch (error) {
          console.error('Failed to analyze needs', error);
        }
      };
  
      return {
        analysisResult,
        analyzeNeeds,
      };
    },
  };
  </script>
  
  <style scoped>
  .needs-analysis {
    margin: 20px 0;
  }
  
  .analysis-result {
    background-color: #f0f4f8;
    padding: 15px;
    border-radius: 8px;
    margin-top: 15px;
  }
  </style>
  