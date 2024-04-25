import { API } from '@/utils/constants/API';
import { instance, authInstance } from './index';

// interface UserProps {
//   userId: string;
// }

interface AuthProps {
  email: string;
  password: string;
}

interface CreateAuthProps {
  email: string;
  password: string;
  type: 'employee' | 'employer';
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
export const postSignUp = (createAuthData: CreateAuthProps) => {
  return instance.post(`${API.user}`, createAuthData);
};

/**
 * 내 정보 조회
 * @param {string} userId
 * @returns
 */
export const getUser = (userId: string) => {
  return instance.get(`${API.user}/${userId}`);
};

/**
 * 내 정보 수정
 * @param {string} userId
 * @returns
 */
export const putUser = (userId: string) => {
  return authInstance.put(`${API.user}/${userId}`);
};
