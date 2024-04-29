/* eslint-disable consistent-return */
import styles from '@/pages/signin/signin.module.scss';
import Link from 'next/link';
import LogoIcon from '@/public/images/sign/mainlogo.svg';
import SignInForm from '@/components/sign/SignInForm';
import findCookieValue from '@/utils/findCookieValue';
import { GetServerSidePropsContext } from 'next';
import GithubLogin from '@/components/socialLogin/GithubLogin';

export function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies = context.req.headers.cookie;
  let userData;

  if (!cookies) {
    userData = '';
  } else {
    userData = findCookieValue(cookies, 'userData');
  }

  return {
    props: {
      userData,
    },
  };
}

export default function SignIn({ userData }: any) {
  return (
    <main className={styles.background}>
      <div className={styles.container}>
        <Link title="메인으로 이동" aria-label="the Julge logo" href="/">
          <LogoIcon className={styles.logoIcon} />
        </Link>
        <div className={styles.box}>
          <SignInForm userData={userData} />
          <GithubLogin>GitHub으로 로그인하기</GithubLogin>
          <div className={styles.text}>
            회원이 아니신가요? <Link href="/signup">회원가입하기</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
