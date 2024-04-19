import styles from '@/pages/signin/signin.module.scss';
import Link from 'next/link';
import SignInput from '@/components/commons/inputs/signInput/SignInput';
import LogoIcon from '@/public/images/sign/mainlogo.svg';
import React, { useState } from 'react';

export default function SignIn() {
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(emailValue, passwordValue);
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <LogoIcon className={styles.logoIcon} alt="더 줄게 로고" />
        <div className={styles.box}>
          <form className={styles.signForm}>
            <SignInput
              labelName="이메일"
              inputType="email"
              value={emailValue}
              setValue={setEmailValue}
            />
            <SignInput
              labelName="비밀번호"
              inputType="password"
              value={passwordValue}
              setValue={setPasswordValue}
            />
            <button
              className={styles.submitButton}
              type="submit"
              onClick={handleSubmit}
            >
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
