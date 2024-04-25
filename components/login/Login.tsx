import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface UserDataProps {
  id: number;
  login: string;
}

function Login() {
  const [isRerender, setIsRerender] = useState(false);
  const [userDate, setUserData] = useState<UserDataProps>({ id: 0, login: '' });

  const token =
    typeof window !== 'undefined' && localStorage.getItem('accessToken');

  // github으로 로그인 code 받기
  // 예) code=4bf42ada452ddda0e66d
  const loginWithGithub = () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`,
    );
  };

  const getUserData = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const userResponse = await axios.get(`/api/getUserData`, config);

    const user = userResponse.data;
    setUserData(user);
  };

  useEffect(() => {
    // url에 있는 code 가져오기
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get('code');
    console.log(codeParam);
    if (codeParam && token === null) {
      const getAccessToken = async () => {
        await fetch(`/api/getAccessToken?code=${codeParam}`, { method: 'GET' })
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log(data);
            if (data.access_token) {
              localStorage.setItem('accessToken', data.access_token);
              setIsRerender(!isRerender);
            }
          });
      };
      getAccessToken();
    }
  }, [isRerender, token]);

  return (
    <div>
      {typeof window !== 'undefined' && localStorage.getItem('accessToken') ? (
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
      )}
    </div>
  );
}

export default Login;
