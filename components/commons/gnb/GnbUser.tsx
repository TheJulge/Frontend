import { getCookieValue } from '@/utils/getCookie';
import { useEffect, useState } from 'react';
import { getUser } from '@/libs/user';
import Link from 'next/link';
import NotiIcon from '@/public/images/gnb/notification.svg';
import NotiActiveIcon from '@/public/images/gnb/notification-active.svg';
import styles from './GnbUser.module.scss';
import SignOutButton from './SignOutButton';

export default function GnbUser() {
  const [mount, setMount] = useState(false);
  const [shopId, setShopId] = useState();
  const type = getCookieValue('type');
  const userId = getCookieValue('userId');

  const notification = false;
  const getUserData = async () => {
    const response = await getUser(userId);
    const getData = response.data.item.shop.item.id;
    setShopId(getData);
  };
  useEffect(() => {
    if (type === 'employer') {
      getUserData();
    }
    setMount(true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    mount && (
      <div className={styles.headerMenu}>
        {type === 'employee' && (
          <>
            <Link href={`/users/${userId}`}>내 프로필</Link>
            <SignOutButton />
            <button type="button" className={styles.notification}>
              {notification ? (
                <NotiActiveIcon viewBox="0 0 24 24" />
              ) : (
                <NotiIcon viewBox="0 0 24 24" />
              )}
            </button>
          </>
        )}
        {type === 'employer' && (
          <>
            <Link href={`/shops/${shopId}`}>내 가게</Link>
            <SignOutButton />
            <button type="button" className={styles.notification}>
              {notification ? (
                <NotiActiveIcon viewBox="0 0 24 24" />
              ) : (
                <NotiIcon viewBox="0 0 24 24" />
              )}
            </button>
          </>
        )}
        {type !== 'employee' && type !== 'employer' && (
          <>
            <Link href="/signin">로그인</Link>
            <Link href="/signup">회원가입</Link>
          </>
        )}
      </div>
    )
  );
}
