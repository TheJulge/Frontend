import { API } from '@/utils/constants/API';
import { instance, authInstance } from './index';

interface ShopProps {
  shopId: string;
}

/**
 * 가게 정보 등록
 * @returns
 */
export const postShop = () => {
  return authInstance.post(`${API.shop}`);
};

/**
 * 가게 정보 조회
 * @param {string} shopId
 * @returns
 */
export const getShop = (shopId: ShopProps) => {
  return instance.get(`${API.shop}/${shopId}`);
};

/**
 * 가게 정보 수정
 * @param {string} shopId
 * @returns
 */
export const putShop = (shopId: ShopProps) => {
  return authInstance.put(`${API.shop}/${shopId}`);
};
