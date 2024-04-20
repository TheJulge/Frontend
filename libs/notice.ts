import { API } from '@/utils/constants/API';
import { instance, authInstance } from './index';

interface NoticeProps {
  shopId: string;
  noticeId?: string;
}

/**
 * 공고 조회
 * @returns
 */
export const getNotices = () => {
  return instance.get(`${API.notice}`);
};

/**
 * 공고 조회
 * @param {string} address
 * @returns
 */
export const getCustomNotices = (address: string) => {
  return instance.get(`${API.notice}?address=${address}`);
};

/**
 * 가게의 공고 목록 조회
 * @param {string} shopId
 * @returns
 */
export const getShopNotices = (shopId: NoticeProps) => {
  return instance.get(`${API.shop}/${shopId}/${API.notice}`);
};

/**
 * 가게 공고 등록
 * @param {string} shopId
 * @returns
 */
export const postShopNotice = (shopId: NoticeProps) => {
  return authInstance.get(`${API.shop}/${shopId}/${API.notice}`);
};

/**
 * 가게의 특정 공고 조회
 * @param {string} shopId
 * @param {string} noticeId
 * @returns
 */
export const getShopNotice = ({ shopId, noticeId }: NoticeProps) => {
  return instance.get(`${API.shop}/${shopId}/${API.notice}/${noticeId}`);
};

/**
 * 가게의 특정 공고 수정
 * @param {string} shopId
 * @param {string} noticeId
 * @returns
 */
export const putShopNotice = ({ shopId, noticeId }: NoticeProps) => {
  return authInstance.put(`${API.shop}/${shopId}/${API.notice}/${noticeId}`);
};
