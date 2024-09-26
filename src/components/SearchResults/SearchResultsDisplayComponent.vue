<template>
    <div class="search-results-display">
      <!-- 关键词部分 -->
      <KeywordsComponent />
  
      <!-- 轮播图部分 -->
      <ProductCarouselComponent />
  
      <!-- 类商品推荐部分 -->
      <SimilarProductComponent />
    </div>
  </template>
  
  <script>
  import KeywordsComponent from '@/components/Keywords/KeywordsComponent.vue';
  import ProductCarouselComponent from '@/components/Recommendation/ProductCarouselComponent.vue';
  import SimilarProductComponent from '@/components/Recommendation/SimilarProductComponent.vue';
  
  export default {
    name: 'SearchResultsDisplayComponent',
    components: {
      KeywordsComponent,
      ProductCarouselComponent,
      SimilarProductComponent,
    },
  };
  </script>
  
  <style scoped>
  .search-results-display {
    margin: 40px 0;
  }
  </style>
  