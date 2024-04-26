import { API } from '@/utils/constants/API';
import { FieldValues } from 'react-hook-form';
import { instance, authInstance } from './index';

interface ShopProps {
  shopId: string;
}

/**
 * 가게 정보 등록
 * @returns
 */
// interface NoticeData {
//   name: string;
//   category: string;
//   address1: string;
//   address2: string;
//   description?: string;
//   imageUrl?: string;
//   originalHourlyPay: number;
// }
export const postShop = (data: FieldValues) => {
  return authInstance.post(`${API.shop}`, data);
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
