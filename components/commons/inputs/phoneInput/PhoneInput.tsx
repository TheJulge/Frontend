import styles from '@/components/commons/inputs/phoneInput/PhoneInput.module.scss';
import React from 'react';
import { useController } from 'react-hook-form';

/**
 * @param {labelName} 라벨로 사용할 이름 기입
 * @param {name} 리액트 훅 폼에서 전송할 이름 기입
 */

interface PhoneInputProps {
  labelName: string;
  name: string;
  control: any;
}

const formatPhoneNumber = (inputValue: string) => {
  const formattedValue = inputValue
    .replace(/\D/g, '')
    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);

  return formattedValue;
};

export default function PhoneInput({
  labelName,
  name,
  control,
}: PhoneInputProps) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required: { value: true, message: '필수 입력 값 입니다' },
      minLength: {
        value: 13,
        message: '연락처는 11자리 숫자로 입력해주세요',
      },
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = formatPhoneNumber(event.target.value);
    field.onChange(phoneNumber);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="phone">{labelName}</label>
      <input
        id="phone"
        className={styles.input}
        placeholder="입력"
        type="text"
        maxLength={13}
        onChange={handleChange}
        onBlur={field.onBlur}
        value={field.value}
        name={field.name}
      />
      {error && <div className={styles.error}>{error?.message}</div>}
    </div>
  );
}
