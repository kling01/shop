import axios from 'axios';

const API_BASE_URL = 'https://example.com/api'; // 替换为你实际的 API 地址

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data; // 返回产品列表
  } catch (error) {
    console.error('获取产品失败:', error);
    throw error;
  }
};
