import { API } from '@/utils/constants/API';
import { FieldValues } from 'react-hook-form';
import { instance, authInstance } from './index';

/**
 * 가게 정보 등록
 * @returns
 */
export const postShop = (data: FieldValues) => {
  return authInstance.post(`${API.shop}`, data);
};

/**
 * 가게 정보 조회
 * @param {string} shopId
 * @returns
 */
export const getShop = (shopId: string) => {
  return instance.get(`${API.shop}/${shopId}`);
};

/**
 * 가게 정보 수정
 * @param {string} shopId
 * @returns
 */
export const putShop = (shopId: string, data: FieldValues) => {
  return authInstance.put(`${API.shop}/${shopId}`, data);
};
