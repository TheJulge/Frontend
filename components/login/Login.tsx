import React from 'react';
import { useRouter } from 'next/router';

function Login() {
  const router = useRouter();
  const { query } = router;
  const error = query.error as string;

  const loginWithGithub = async () => {
    const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || '';
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=user`;
  };

  return (
    <div>
      {/* {typeof window !== 'undefined' && localStorage.getItem('accessToken') ? (
        <div>
          <p>accessToken이 있습니다</p>
          <button
            type="button"
            onClick={() => {
              // eslint-disable-next-line no-unused-expressions
              typeof window !== 'undefined' &&
                localStorage.removeItem('accessToken');
              setIsRerender(!isRerender);
            }}
          >
            Log out
          </button>
          <div>
            <p>Github User Data</p>
            <button type="button" onClick={getUserData}>
              Get Data
            </button>
            <div>
              <p>ID: {userDate.login}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>로그인 해주세요</p>
          <button type="button" onClick={loginWithGithub}>
            login
          </button>
        </div>
      )} */}
      <div>
        <p>로그인 해주세요</p>
        <button type="button" onClick={loginWithGithub}>
          login
        </button>
      </div>
    </div>
  );
}

export default Login;
