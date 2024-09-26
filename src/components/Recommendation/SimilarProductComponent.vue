<template>
    <div class="similar-products">
      <h3>{{ $t('similar_products.title') }}</h3>
      <div class="product-grid">
        <ProductCardComponent
          v-for="(product, index) in similarProducts"
          :key="index"
          :product="product"
        />
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { getSimilarProducts } from '@/api/productService'; // 调用商品推荐接口
  import ProductCardComponent from '@/components/ProductDisplay/ProductCardComponent.vue';
  
  export default {
    name: 'SimilarProductComponent',
    components: {
      ProductCardComponent,
    },
    setup() {
      const similarProducts = ref([]);
  
      const fetchSimilarProducts = async () => {
        try {
          const response = await getSimilarProducts(); // 调用类似商品推荐接口
          similarProducts.value = response.data.products;
        } catch (error) {
          console.error('Failed to fetch similar products', error);
        }
      };
  
      // 模拟组件加载时获取类似商品推荐
      fetchSimilarProducts();
  
      return {
        similarProducts,
      };
    },
  };
  </script>
  
  <style scoped>
  .similar-products {
    margin: 20px 0;
  }
  
  .product-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .product-grid .product-card {
    flex: 1 1 calc(33% - 20px);
    max-width: calc(33% - 20px);
  }
  </style>
  