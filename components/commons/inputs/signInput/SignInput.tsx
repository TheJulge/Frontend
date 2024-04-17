import styles from '@/components/commons/inputs/signInput/SignInput.module.scss';
import React, { useState } from 'react';

/**
 * 로그인 / 회원가입용 공통 인풋
 * @param {labelName} props label로 사용할 input의 이름
 * @param {inputType} props 사용할 input의 종류 선택
 * @param {value} props 해당 input에서 사용할 State
 * @param {setValue} props 해당 input에서 사용할 state를 변경할 seter 함수
 * @param {anotherValue} props 비밀번호 확인 input에서 정규식 체크를 위한 비밀번호 값
 */

interface SignInputProps {
  labelName: string;
  inputType: 'email' | 'password' | 'passwordCheck';
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  anotherValue?: string;
}

const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function SignInput({
  labelName,
  inputType,
  value,
  setValue,
  anotherValue,
}: SignInputProps) {
  const [isValidation, setIsValidation] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleFocusOut = () => {
    if (inputType === 'email') {
      setIsValidation(emailRegex.test(value));
    }

    if (inputType === 'password') {
      setIsValidation(value.length >= 8);
    }

    if (inputType === 'passwordCheck') {
      setIsValidation(anotherValue === value);
    }
  };

  return (
    <div className={styles.container}>
      <label htmlFor={labelName}>{labelName}</label>
      <input
        className={!isValidation ? styles.errorInput : styles.input}
        id={labelName}
        value={value}
        placeholder="입력"
        type={inputType === 'email' ? 'email' : 'password'}
        onChange={handleChange}
        onBlur={handleFocusOut}
      />
      {inputType === 'email' && !isValidation && (
        <div className={styles.errorMessage}>
          이메일 형식으로 작성해 주세요.
        </div>
      )}
      {inputType === 'password' && !isValidation && (
        <div className={styles.errorMessage}>8자 이상 작성해 주세요.</div>
      )}
      {inputType === 'passwordCheck' && !isValidation && (
        <div className={styles.errorMessage}>비밀번호가 일치하지 않습니다.</div>
      )}
    </div>
  );
}

SignInput.defaultProps = {
  anotherValue: '',
};
