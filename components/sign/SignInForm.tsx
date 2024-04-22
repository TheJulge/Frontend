import styles from '@/components/sign/SignInForm.module.scss';
import useSignIn from '@/hooks/useSignIn';
import { SIGN_ERROR_MESSAGE, SIGN_REGEX } from '@/utils/constants/SIGN';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Inputs {
  email: string;
  password: string;
}

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onBlur' });
  const { status, errorModal, signIn } = useSignIn();

  const onSubmit: SubmitHandler<Inputs> = data => {
    signIn(data);
  };

  return (
    <form
      className={styles.signForm}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className={styles.container}>
        <label htmlFor="email">이메일</label>
        <input
          className={errors.email ? styles.errorInput : styles.input}
          id="email"
          placeholder="입력"
          type="email"
          {...register('email', { required: true, pattern: SIGN_REGEX.email })}
        />
        {errors.email && (
          <div className={styles.errorMessage}>{SIGN_ERROR_MESSAGE.email}</div>
        )}
      </div>

      <div className={styles.container}>
        <label htmlFor="password">비밀번호</label>
        <input
          className={errors.password ? styles.errorInput : styles.input}
          id="password"
          placeholder="입력"
          type="password"
          {...register('password', { required: true, minLength: 8 })}
        />
        {errors.password && (
          <div className={styles.errorMessage}>
            {SIGN_ERROR_MESSAGE.password}
          </div>
        )}
      </div>

      <button
        disabled={status === 'fetching'}
        className={styles.submitButton}
        type="submit"
      >
        로그인 하기
      </button>

      {errorModal}
    </form>
  );
}
