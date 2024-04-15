import Link from 'next/link';
import NotiIcon from '@/public/images/notification.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './GnbUser.module.scss';

export default function GnbUser() {
  const [type, setType] = useState();
  async function apiGet() {
    try {
      const response = await axios.post(
        'https://bootcamp-api.codeit.kr/api/4-17/the-julge/token',
        {
          email: 'test1414@naver.com',
          password: 'test1234',
        },
      );
      const user = response.data;
      setType(user.item.user.item.type);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    apiGet();
  }, []);
  if (!type) return null;
  return (
    <div className={styles.headerMenu}>
      {type === 'employee' && (
        <>
          <Link href="/">내 프로필</Link>
          <Link href="/">로그아웃</Link>
          <button type="button">
            <NotiIcon />
          </button>
        </>
      )}
      {type === 'employer' && (
        <>
          <Link href="/">내 가게</Link>
          <Link href="/">로그아웃</Link>
          <button type="button">
            <NotiIcon />
          </button>
        </>
      )}
      {type !== 'employee' && type !== 'employer' && (
        <>
          <Link href="/">로그인</Link>
          <Link href="/">회원가입</Link>
        </>
      )}
    </div>
  );
}
