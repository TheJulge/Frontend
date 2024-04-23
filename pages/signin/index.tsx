import styles from '@/pages/signin/signin.module.scss';
import Link from 'next/link';
import LogoIcon from '@/public/images/sign/mainlogo.svg';
import SignInForm from '@/components/sign/SignInForm';

export default function SignIn() {
  return (
    <main className={styles.background}>
      <div className={styles.container}>
        <Link
          title="공고리스트로 이동"
          aria-label="the julge logo"
          href="/noticeList"
        >
          <LogoIcon className={styles.logoIcon} />
        </Link>
        <div className={styles.box}>
          <SignInForm />
          <div className={styles.text}>
            회원이 아니신가요?<Link href="/signup">회원가입하기</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
