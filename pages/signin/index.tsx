import styles from '@/pages/signin/signin.module.scss';
import Link from 'next/link';
import SignInput from '@/components/commons/inputs/signInput/SignInput';
import LogoIcon from '@/public/images/sign/mainlogo.svg';

export default function SignIn() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <LogoIcon className={styles.logoIcon} alt="더 줄게 로고" />
        <div className={styles.box}>
          <form className={styles.signForm}>
            <SignInput labelName="이메일" inputType="email" />
            <SignInput labelName="비밀번호" inputType="password" />
            <button className={styles.submitButton} type="submit">
              로그인 하기
            </button>
          </form>
          <div className={styles.text}>
            회원이 아니신가요? <Link href="/signUp">회원가입하기</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
