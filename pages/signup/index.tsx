import styles from '@/pages/signup/signup.module.scss';
import Link from 'next/link';
import LogoIcon from '@/public/images/sign/mainlogo.svg';
import SignUpForm from '@/components/sign/SignUpForm';
import { GetServerSidePropsContext } from 'next';
import findCookieValue from '@/utils/findCookieValue';
import Login from '@/components/login/Login';

// export function getServerSideProps(context: GetServerSidePropsContext) {
//   const cookies = context.req.headers.cookie;
//   let createUserData = {};

//   if (!cookies) {
//     createUserData = '';
//   } else {
//     createUserData = findCookieValue(cookies, 'createUserData');
//   }

//   return {
//     props: {
//       createUserData,
//     },
//   };
// }

export default function SignUp({ createUserData }: any) {
  return (
    <main className={styles.background}>
      <div className={styles.container}>
        <Link title="메인으로 이동" aria-label="the Julge logo" href="/">
          <LogoIcon className={styles.logoIcon} />
        </Link>
        <div className={styles.box}>
          <SignUpForm createUserData={createUserData} />
          <div className={styles.text}>
            이미 가입하셨나요? <Link href="/signin">로그인하기</Link>
          </div>
          <Login />
        </div>
      </div>
    </main>
  );
}
