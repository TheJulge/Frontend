import { API } from '@/utils/constants/API';
import { authInstance } from './index';

/**
 * Presigned URL을 생성
 * @returns
 */
export const postImage = () => {
  authInstance.post(`${API.images}`);
};
