<template>
  <div class="home">
    <!-- 搜索引擎宣传语和搜索框放入同一个表单 -->
    <form class="search-form">
      <SearchEngineSloganComponent />
      <SearchBoxComponent />
    </form>

    <!-- 商品展示模块 -->
    <div class="product-section">
      <h2>{{ $t('product.recommendations') }}</h2>
      <ProductGridComponent />
    </div>
  </div>
</template>

<script>
import SearchEngineSloganComponent from '@/components/Slogan/SearchEngineSloganComponent.vue';
import SearchBoxComponent from '@/components/Search/SearchBoxComponent.vue'; // 引入搜索框组件
import ProductGridComponent from '@/components/ProductDisplay/ProductGridComponent.vue'; // 引入商品展示模块

export default {
  name: 'AppHome', // 确保组件名称符合多词命名规则
  components: { 
    SearchEngineSloganComponent,
    SearchBoxComponent,
    ProductGridComponent,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  padding-top: 50px; /* 顶部留白 */
}

/* 搜索表单区域 */
.search-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0; /* 可调节宣传语和搜索框的间距 */
}

/* 商品展示模块区域 */
.product-section {
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  margin: 60px 0; 
}

.product-section h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}
</style>
