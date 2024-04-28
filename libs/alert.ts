import { API } from '@/utils/constants/API';
import { authInstance } from './index';

/**
 * 특정 사용자의 알림 목록을 조회
 * @returns
 */
export const getAlert = (userId: string, accessToken: string) => {
  return authInstance.get(`${API.user}/${userId}${API.alert}`, {
    headers: {
      Authorization: `bearer ${accessToken}`,
    },
  });
};

/**
 * 특정 사용자의 알림 목록을 읽음 처리
 * @returns
 */
export const putAlert = (
  userId: string,
  alertId: string,
  accessToken: string,
) => {
  return authInstance.put(
    `${API.user}/${userId}${API.alert}/${alertId}`,
    null,
    {
      headers: {
        Authorization: `bearer ${accessToken}`,
      },
    },
  );
};
