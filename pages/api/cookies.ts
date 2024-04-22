import { NextApiRequest, NextApiResponse } from 'next';

// cookie handler
export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { method, cookies } = request;
  const { accessToken } = cookies;

  // GET 요청일때는 쿠키값을 반환
  if (method === 'GET') {
    if (!accessToken) {
      response.status(403).json({ error: 'Forbidden' });
      return;
    }

    response.setHeader(
      'Set-Cookie',
      `accessToken=${accessToken}; Path=/; HttpOnly; secure`,
    );

    response.status(200).json({ accessToken });
  } // DELETE 요청일때는 accessToken과 userId를 지워 logout
  else if (method === 'DELETE') {
    const cookieKeys = Object.keys(cookies);
    const deleteCookieStrings = cookieKeys.map(
      cookieKey =>
        `${cookieKey}=; Path=/; HttpOnly; secure; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT`,
    );

    response.setHeader('Set-Cookie', deleteCookieStrings);

    response.status(200).json({ message: 'Logout 되었습니다.' });
  } // 그 외 메서드 요청은 405 에러처리
  else {
    response.status(405).json({ error: 'Method Not Allowed' });
  }
}
