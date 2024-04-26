import { API } from '@/utils/constants/API';
import { authInstance, instance } from './index';

/**
 * Presigned URL을 생성
 * @returns
 */
export const getPresignedUrl = async (imageName: FormData) => {
  const res = await authInstance.post(`${API.images}`, imageName);
  return res.data.item.url;
};

/**
 * Presigned URL을 S3에 업로드
 * @returns
 */
export const uploadImageToS3 = async (file: File, imageName: FormData) => {
  const presignedUrl = await getPresignedUrl(imageName);
  const res = await instance.put(presignedUrl, file);
  return res;
};
