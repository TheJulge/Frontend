// 쿠키값 가져오는 함수
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export function getCookieValue(cookieName: string) {
  return cookies.get(cookieName);
}
