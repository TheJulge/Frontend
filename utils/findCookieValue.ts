/**
 * 쿠키는 통으로 하나인 문자열 이라 키 값을 기준으로 잘라서 사용하는 쿠키 커터
 * @param cookies
 * @param key
 */

export default function findCookieValue(cookies: string, key: string): string {
  const cookieList: string[] = cookies.split('; ');
  const cookieMap: { [key: string]: string } = {};
  cookieList.forEach(cookie => {
    const [cookieKey, cookieValue] = cookie.split('=');
    cookieMap[cookieKey] = cookieValue;
  });
  return cookieMap[key] || '';
}
