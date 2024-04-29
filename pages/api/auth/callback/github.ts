import { postSignIn } from '@/libs/user';
import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line consistent-return
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { code } = req.query;

  // 토큰을 요청합니다.
  const tokenApi = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || '',
      client_secret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET || '',
      code,
    }),
  });

  const tokenResponse = await tokenApi.json();
  const accessToken = tokenResponse.access_token;
  if (!accessToken) {
    return res.status(401).json({ error: '인증이 완료되지않습니다.' });
  }

  // 사용자 정보를 가져오기.
  const userResponse = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `token ${accessToken}`,
      Accept: 'application/json',
    },
  });

  const userProfile = await userResponse.json();
  if (!userProfile) {
    return res.status(401).json({ error: '유저 정보를 못 받아왔습니다.' });
  }

  const emailResponse = await fetch('https://api.github.com/user/emails', {
    headers: {
      Authorization: `token ${accessToken}`,
      Accept: 'application/json',
    },
  });

  const emailProfile = await emailResponse.json();
  if (!emailProfile) {
    return res.status(401).json({ error: '이메일이 없습니다.' });
  }

  const userEmail = emailProfile.length > 0 ? emailProfile[0]?.email : '';
  const userData = {
    // email: userEmail,
    // password: userProfile.id,
    email: 'qwer1234@qwer.com',
    password: 'qwer1234',
  };
  const createUserData = {
    // email: userEmail,
    // password: userProfile.id,
    email: 'qwerqwer@qwer.com',
    password: 'qwerqwer',
    type: 'employee',
  };

  const login = await postSignIn(userData);

  if (login.status === 200) {
    res.setHeader('Set-Cookie', `userData=${JSON.stringify(userData)}; Path=/`);
    res.writeHead(302, { Location: '/signin' });
    res.end();
  }

  if (login.status !== 200) {
    res.setHeader(
      'Set-Cookie',
      `userData=${JSON.stringify(createUserData)}; Path=/`,
    );

    res.writeHead(302, { Location: '/signup' });
    res.end();
  }
}
