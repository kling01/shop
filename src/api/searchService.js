import axios from 'axios';

const API_BASE_URL = 'https://example.com/api'; // 替换为你实际的 API 地址

export const searchProducts = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search`, {
      params: { q: query }, // 传递搜索关键词作为查询参数
    });
    return response.data; // 返回搜索结果
  } catch (error) {
    console.error('搜索失败:', error);
    throw error;
  }
};
