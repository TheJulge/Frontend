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

// NEXT API 처리용 instance
const nextInstance = axios.create({
  baseURL: process.env.DEVELOP_BASE_URL,
  timeout: 1000 * 5,
  headers: {
    'Content-Type': 'application/json',
  },
});

// interceptors
authInstance.interceptors.request.use(
  async config => {
    // Server Side 에서도 쿠키 접근 가능하게 '/cookies' 엔드포인트를 미들웨어로 사용해서 쿠키값을 받아옴
    const response = await nextInstance.get('/api/cookies');
    const { accessToken } = response.data;

    const newConfig = { ...config };
    newConfig.headers.Authorization = `Bearer ${accessToken}`;

    return newConfig;
  },
  error => {
    return Promise.reject(error);
  },
);
