import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { accessToken } = request.cookies;

  if (!accessToken) {
    response.status(403).json({ error: 'Forbidden' });
    return;
  }

  response.setHeader(
    'Set-Cookie',
    `accessToken=${accessToken}; Path=/; HttpOnly; secure`,
  );

  response.status(200).json({ accessToken });
}
