import { API } from '@/utils/constants/API';
import { authInstance } from './index';

/**
 * Presigned URL을 생성
 * @returns
 */
export const getPresignedUrl = async (imageName: FormData) => {
  const res = await authInstance.post(`${API.images}`, imageName);
  return res.data.item.url;
};
