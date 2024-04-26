import styles from '@/components/commons/inputs/basicInput/BasicInput.module.scss';
import { InputProps } from '@/types/inputTypes';
import React from 'react';
import { FieldError, useFormContext } from 'react-hook-form';

/**
 *
 * @param {labelName} props label로 사용할 input의 이름을 적어주면 됩니다.
 */
interface BasicInputProps extends InputProps {
  type?: string;
}

export default function BasicInput({ labelName, id, type }: BasicInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.container}>
      <label htmlFor={id}>{labelName}</label>
      {type === 'textarea' ? (
        <textarea
          className={styles.textArea}
          id={id}
          placeholder="입력"
          {...register(id, {
            required: false,
          })}
        />
      ) : (
        <input
          className={styles.input}
          id={id}
          placeholder="입력"
          type="text"
          {...register(id, {
            required: '필수 입력 값 입니다',
          })}
        />
      )}
      {errors[id] && (
        <div className={styles.error}>
          {(errors[id] as FieldError)?.message}
        </div>
      )}
    </div>
  );
}
