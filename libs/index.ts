import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 1000 * 5,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 로그인 인증이 필요한 요청 처리용 instance
export const authInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 1000 * 5,
  headers: {
    'Content-Type': 'application/json',
  },
});

// interceptors
authInstance.interceptors.request.use();
