import styles from '@/components/sign/SignUpForm.module.scss';
import useSignUp from '@/hooks/useSignUp';
import CheckedIcon from '@/public/images/sign/checked.svg';
import { SIGN_ERROR_MESSAGE, SIGN_REGEX } from '@/utils/constants/SIGN';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Inputs {
  email: string;
  password: string;
  passwordCheck: string;
  type: 'employee' | 'employer';
}

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      passwordCheck: '',
      type: 'employee',
    },
  });
  const { status, successModal, errorModal, signUp } = useSignUp();

  const onSubmit: SubmitHandler<Inputs> = data => {
    const createAuthData = {
      email: data.email,
      password: data.password,
      type: data.type,
    };
    signUp(createAuthData);
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
          {...register('password', {
            required: true,
            minLength: 8,
            maxLength: 20,
          })}
        />
        {errors.password && (
          <div className={styles.errorMessage}>
            {SIGN_ERROR_MESSAGE.password}
          </div>
        )}
      </div>

      <div className={styles.container}>
        <label htmlFor="passwordCheck">비밀번호 확인</label>
        <input
          className={errors.passwordCheck ? styles.errorInput : styles.input}
          id="passwordCheck"
          placeholder="입력"
          type="password"
          {...register('passwordCheck', {
            required: true,
            validate: {
              matchPassword: value => {
                const { password } = getValues();
                return value === password;
              },
            },
          })}
        />
        {errors.passwordCheck && (
          <div className={styles.errorMessage}>
            {SIGN_ERROR_MESSAGE.passwordCheck}
          </div>
        )}
      </div>

      <div className={styles.radioContainer}>
        <div>회원 유형</div>
        <div className={styles.radioBox}>
          <label
            className={
              watch('type') === 'employee'
                ? styles.checkedRadioLabel
                : styles.radioLabel
            }
            htmlFor="employee"
          >
            <CheckedIcon
              aria-label="checked icon"
              className={styles.checkedIcon}
            />
            <input
              className={
                watch('type') === 'employee'
                  ? styles.checkedRadio
                  : styles.radio
              }
              id="employee"
              type="radio"
              value="employee"
              {...register('type', { required: true })}
            />
            <span className={styles.span}>알바생</span>
          </label>

          <label
            className={
              watch('type') === 'employer'
                ? styles.checkedRadioLabel
                : styles.radioLabel
            }
            htmlFor="employer"
          >
            <CheckedIcon
              aria-label="checked icon"
              className={styles.checkedIcon}
            />
            <input
              className={
                watch('type') === 'employer'
                  ? styles.checkedRadio
                  : styles.radio
              }
              id="employer"
              type="radio"
              value="employer"
              {...register('type', { required: true })}
            />
            <span className={styles.span}>사장님</span>
          </label>
        </div>
      </div>

      <button
        disabled={status === 'fetching'}
        className={styles.submitButton}
        type="submit"
      >
        가입하기
      </button>

      {successModal}
      {errorModal}
    </form>
  );
}
