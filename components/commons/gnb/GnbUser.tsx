import Link from 'next/link';
import NotiIcon from '@/public/images/gnb/notification.svg';
import NotiActiveIcon from '@/public/images/gnb/notification-active.svg';
import styles from './GnbUser.module.scss';

export default function GnbUser() {
  // type과 notification은 추후에 유저데이터 (전역상태) 로 바꿔줍니다
  const type = 'employee';
  const notification = false;

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
      {/* 아래 행의 employee 는 employer로 추후에 변경합니다 (지금 변경하면 ts에러) */}
      {type === 'employee' && (
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
