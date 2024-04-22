import styles from '@/components/commons/inputs/basicInput/BasicInput.module.scss';
import { InputProps } from '@/types/inputTypes';
import React from 'react';
import { useFormContext } from 'react-hook-form';

/**
 *
 * @param {labelName} props label로 사용할 input의 이름을 적어주면 됩니다.
 * @param {string} error 에러 메세지
 */

export default function BasicInput({ labelName, error }: InputProps) {
  const { register } = useFormContext();

  return (
    <div className={styles.container}>
      <label htmlFor={labelName}>{labelName}</label>
      <input
        className={styles.input}
        id={labelName}
        placeholder="입력"
        type="text"
        {...register(labelName, { required: true })}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}
