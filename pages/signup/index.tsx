import styles from '@/pages/signup/signup.module.scss';
import Link from 'next/link';
import LogoIcon from '@/public/images/sign/mainlogo.svg';
import SignUpForm from '@/components/sign/SignUpForm';

export default function SignUp() {
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
          <SignUpForm />
          <div className={styles.text}>
            이미 가입하셨나요? <Link href="/signin">로그인하기</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
