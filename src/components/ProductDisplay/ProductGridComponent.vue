<template>
    <div class="product-grid">
      <ProductCardComponent
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import ProductCardComponent from './ProductCardComponent.vue';
  // import { fetchProducts } from '@/api/productService'; // 当 API 准备好时取消注释
  
  export default {
    name: "ProductGridComponent",
    components: {
      ProductCardComponent,
    },
    setup() {
      const products = ref([]);
  
      // 使用静态测试数据
      const testProducts = [
        {
          name: "智能手机",
          description: "现代化设计，功能齐全。",
          price: 4999,
          image: require('@/assets/images/product1.jpg'),
        },
        {
          name: "笔记本电脑",
          description: "高性能，便携设计。",
          price: 7999,
          image: require('@/assets/images/product2.jpg'),
        },
        {
          name: "无线耳机",
          description: "降噪功能，超长电池。",
          price: 999,
          image: require('@/assets/images/product3.jpg'),
        },
        {
          name: "智能手表",
          description: "外观时尚，多功能。",
          price: 1999,
          image: require('@/assets/images/product4.jpg'),
        },
        {
          name: "智能手机",
          description: "现代化设计，功能齐全。",
          price: 4999,
          image: require('@/assets/images/product1.jpg'),
        },
        {
          name: "笔记本电脑",
          description: "高性能，便携设计。",
          price: 7999,
          image: require('@/assets/images/product2.jpg'),
        },
        {
          name: "无线耳机",
          description: "降噪功能，超长电池。",
          price: 999,
          image: require('@/assets/images/product3.jpg'),
        },
        {
          name: "智能手表",
          description: "外观时尚，多功能。",
          price: 1999,
          image: require('@/assets/images/product4.jpg'),
        },
        {
          name: "智能手机",
          description: "现代化设计，功能齐全。",
          price: 4999,
          image: require('@/assets/images/product1.jpg'),
        },
        {
          name: "笔记本电脑",
          description: "高性能，便携设计。",
          price: 7999,
          image: require('@/assets/images/product2.jpg'),
        },
        {
          name: "无线耳机",
          description: "降噪功能，超长电池。",
          price: 999,
          image: require('@/assets/images/product3.jpg'),
        },
        {
          name: "智能手表",
          description: "外观时尚，多功能。",
          price: 1999,
          image: require('@/assets/images/product4.jpg'),
        }, {
          name: "智能手机",
          description: "现代化设计，功能齐全。",
          price: 4999,
          image: require('@/assets/images/product1.jpg'),
        },
        {
          name: "笔记本电脑",
          description: "高性能，便携设计。",
          price: 7999,
          image: require('@/assets/images/product2.jpg'),
        },
        {
          name: "无线耳机",
          description: "降噪功能，超长电池。",
          price: 999,
          image: require('@/assets/images/product3.jpg'),
        },
        {
          name: "智能手表",
          description: "外观时尚，多功能。",
          price: 1999,
          image: require('@/assets/images/product4.jpg'),
        }, {
          name: "智能手机",
          description: "现代化设计，功能齐全。",
          price: 4999,
          image: require('@/assets/images/product1.jpg'),
        },
        {
          name: "笔记本电脑",
          description: "高性能，便携设计。",
          price: 7999,
          image: require('@/assets/images/product2.jpg'),
        },
        {
          name: "无线耳机",
          description: "降噪功能，超长电池。",
          price: 999,
          image: require('@/assets/images/product3.jpg'),
        },
        {
          name: "智能手表",
          description: "外观时尚，多功能。",
          price: 1999,
          image: require('@/assets/images/product4.jpg'),
        },
      ];
  
      // 在组件挂载时加载测试数据
      onMounted(() => {
        products.value = testProducts;
        // 当 API 可用时使用以下代码
        // fetchProducts()
        //   .then(response => {
        //     products.value = response;
        //   })
        //   .catch(error => {
        //     console.error('获取产品失败', error);
        //   });
      });
  
      return {
        products,
      };
    },
  };
  </script>
  
  <style scoped>
  .product-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  </style>
  