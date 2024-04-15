import Link from 'next/link';
import NotiIcon from '@/public/images/notification.svg';
import NotiActiveIcon from '@/public/images/notification-active.svg';
import styles from './GnbUser.module.scss';

export default function GnbUser() {
  let type = 'employee';
  let notification = false;
  return (
    <div className={styles.headerMenu}>
      {type === 'employee' && (
        <>
          <Link href="/">내 프로필</Link>
          <Link href="/">로그아웃</Link>
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
          <Link href="/">내 가게</Link>
          <Link href="/">로그아웃</Link>
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
          <Link href="/">로그인</Link>
          <Link href="/">회원가입</Link>
        </>
      )}
    </div>
  );
}
