import { API } from '@/utils/constants/API';
import { authInstance } from './index';

interface AlertProps {
  userId: string;
  alertId?: string;
}

/**
 * 특정 사용자의 알림 목록을 조회
 * @returns
 */
export const getAlert = (userId: string, data: any) => {
  return authInstance.get(`${API.user}/${userId}/${API.alert}`, data);
};

/**
 * 특정 사용자의 알림 목록을 읽음 처리
 * @returns
 */
export const putAlert = ({ userId, alertId }: AlertProps) => {
  return authInstance.put(`${API.user}/${userId}/${API.alert}/${alertId}`);
};
