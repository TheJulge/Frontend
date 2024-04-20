import styles from '@/components/sign/SignInForm.module.scss';
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
    watch,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      // TO DO: 1. Axios 사용 로그인 전송 2.로그인 버튼 disabled 3.성공 시 response 쿠키에 저장 4.공고리스트로 redirect
      console.log(data);
      console.log(watch());
    } catch (error) {
      // TO DO: 1. 없는 이메일일 경우 모달 띄우고 확인 누르면 redirect 회원가입 2. 비밀번호 틀린 경우 모달 띄우고 확인 누르면 꺼짐
      console.log(watch());
    } finally {
      // TO DO: 로그인 버튼 disabled 해제
      console.log(watch());
    }
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
      <button className={styles.submitButton} type="submit">
        로그인 하기
      </button>
    </form>
  );
}
