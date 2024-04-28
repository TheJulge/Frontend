import { instance } from '@/libs';
import { API } from '@/utils/constants/API';
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

  console.log('userProfile', userProfile);

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
  console.log('emailProfile', emailProfile);
  const userEmail = emailProfile.length > 0 ? emailProfile[0]?.email : '';
  const userData = {
    email: userEmail,
    password: userProfile.id,
  };
  console.log('USERDATA = ', userData);

  let loginState = 'unAuthorization';
  let token = null;

  // 1. 위 정보로 토큰을 보내서 로그인된 회원인지 체크
  try {
    await instance(`${API.auth}`, {
      method: 'POST',
      data: userData,
    });
    loginState = 'authorization';
  } catch (e) {
    loginState = 'emailCheck';
  }

  if (loginState === 'emailCheck') {
    try {
      await instance(`${API.user}`, {
        method: 'POST',
        data: { ...userData, type: 'employee' },
      });
      loginState = 'newUserAndLogin';
    } catch (e) {
      loginState = 'emailDuplicate';
    }
  }

  if (loginState === 'emailDuplicate') {
    res.redirect('/signin?error=email_duplicate');
  }
  if (loginState === 'newUserAndLogin') {
    await instance(`${API.auth}`, {
      method: 'POST',
      data: userData,
    });
    loginState = 'authorization';
  }
  if (loginState === 'authorization') {
    // 쿠키에 코드잇api로 받아온 토큰 저장시키고, 기존의 로그인 후 처리
    res.redirect('/');
  }

  console.log('loginCheck', loginState);

  // 로그인되면 로그인 로직 실행
  // 이메일로 로그인한 회원이 이 로직을 실행시 비밀번호가 틀린다고 나오면
  // 메일 체크는 회원가입으로 체크
  // 그냥 일반 메일로 로그인했다고 모달ㅇr 알랏창으로 말해주고, 로그인창으로 다시 보냄

  // 필요한 사용자 정보를 세션 쿠키에 저장하거나 다른 방법으로 처리
  // 회원가입이 되어있는지

  // 사용자 대시보드로 리다이렉션
  res.redirect('/');
}
