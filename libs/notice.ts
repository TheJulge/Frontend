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
 * 맞춤 공고 조회
 * @param {string} address
 * @returns
 */
export const getCustomNotices = (address: string) => {
  return instance.get(`${API.notice}?address=${address}&limit=6`);
};

/**
 * 맞춤 공고 조회
 * @param {string} pay
 * @returns
 */
export const getPayNotices = (pay: string) => {
  return instance.get(`${API.notice}?sort=${pay}&limit=6`);
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
interface PostShopNoticeProps {
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description?: string;
}
export const postShopNotice = (
  shopId: NoticeProps,
  data: PostShopNoticeProps,
) => {
  return authInstance.post(`${API.shop}/${shopId}/${API.notice}`, data);
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
