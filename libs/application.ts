import { API } from '@/utils/constants/API';
import { instance, authInstance } from './index';

interface ApplicationProps {
  shopId?: string;
  noticeId?: string;
  applicationId?: string;
  userId?: string;
  offset?: number;
  limit?: number;
}

/**
 * 특정 가게의 특정 공고에 대한 지원 목록을 조회
 * @param {string} shopId 공고 id
 * @param {string} noticeId 가게 id
 * @param {number} offset 조회 시작 기준
 * @param {number} limit 조회 개수
 * @returns
 */
export const getApplications = ({ shopId, noticeId }: ApplicationProps) => {
  return instance.get(
    `${API.shop}/${shopId}/${API.notice}/${noticeId}/${API.application}`,
  );
};

/**
 * 특정 가게의 특정 공고에 지원을 등록
 * @param {string} shopId 공고 id
 * @param {string} noticeId 가게 id
 * @returns
 */
export const postApplication = ({ shopId, noticeId }: ApplicationProps) => {
  return authInstance.post(
    `${API.shop}/${shopId}/${API.notice}/${noticeId}/${API.application}`,
  );
};

/**
 * 특정 가게의 특정 공고에 대한 지원을 승인, 거절 또는 취소
 * @param {string} shopId
 * @returns
 */
export const putApplicaiton = ({
  shopId,
  noticeId,
  applicationId,
}: ApplicationProps) => {
  return authInstance.get(
    `${API.shop}/${shopId}/${API.notice}/${noticeId}/${API.application}/${applicationId}`,
  );
};

/**
 * 특정 사용자가 제출한 지원 목록을 조회
 * @param {string} userId 조회할 사용자의 ID
 * @param {number} offset 조회 시작 기준
 * @param {number} limit 조회 개수
 * @returns
 */
export const getApplication = ({ userId }: ApplicationProps) => {
  return authInstance.get(`${API.user}/${userId}/${API.application}`);
};
