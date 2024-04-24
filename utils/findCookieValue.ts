export default function findCookieValue(cookies: string, key: string): string {
  const cookieList: string[] = cookies.split('; ');
  const cookieMap: { [key: string]: string } = {};
  cookieList.forEach(cookie => {
    const [cookieKey, cookieValue] = cookie.split('=');
    cookieMap[cookieKey] = cookieValue;
  });
  return cookieMap[key] || '';
}
