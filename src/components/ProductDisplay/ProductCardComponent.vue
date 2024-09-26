<template>
    <div class="product-card">
      <img :src="product.image" :alt="product.name" class="product-image" />
      <div class="product-details">
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">￥{{ product.price }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProductCardComponent",
    props: {
      product: {
        type: Object, // product 是一个对象，必须传递
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .product-card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
    width: 250px;
    margin: 10px;
    text-align: center;
  }
  
  .product-card:hover {
    transform: translateY(-5px); /* 悬停效果 */
  }
  
  .product-image {
    width: 100%;
    height: 150px;
    object-fit: cover; /* 保持图片的纵横比 */
  }
  
  .product-details {
    padding: 15px;
  }
  
  .product-name {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
  }
  
  .product-description {
    font-size: 14px;
    color: #555;
    margin-bottom: 10px;
  }
  
  .product-price {
    font-size: 16px;
    color: #e53935;
    font-weight: bold;
  }
  </style>
  