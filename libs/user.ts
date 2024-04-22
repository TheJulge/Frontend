import { API } from '@/utils/constants/API';
import { instance, authInstance } from './index';

interface UserProps {
  userId: string;
}

interface AuthProps {
  email: string;
  password: string;
}

/**
 * 로그인
 * @returns
 */
export const postSignIn = (authData: AuthProps) => {
  return instance.post(`${API.auth}`, authData);
};

/**
 * 회원가입
 * @returns
 */
export const postSignUp = () => {
  return instance.get(`${API.user}`);
};

/**
 * 내 정보 조회
 * @param {string} userId
 * @returns
 */
export const getUser = (userId: UserProps) => {
  return instance.get(`${API.user}/${userId}`);
};

/**
 * 내 정보 수정
 * @param {string} userId
 * @returns
 */
export const putUser = (userId: UserProps) => {
  return authInstance.put(`${API.user}/${userId}`);
};
