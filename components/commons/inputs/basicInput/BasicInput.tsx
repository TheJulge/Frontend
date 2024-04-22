import styles from '@/components/commons/inputs/basicInput/BasicInput.module.scss';
import { InputProps } from '@/types/inputTypes';
import React from 'react';
import { FieldError, useFormContext } from 'react-hook-form';

/**
 *
 * @param {labelName} props label로 사용할 input의 이름을 적어주면 됩니다.
 */
interface BasicInputProps extends InputProps {
  defaultValue?: string;
}

export default function BasicInput({
  labelName,
  defaultValue,
}: BasicInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.container}>
      <label htmlFor={labelName}>{labelName}</label>
      <input
        className={styles.input}
        id={labelName}
        defaultValue={defaultValue}
        placeholder="입력"
        type="text"
        {...register(labelName, { required: '필수 입력 값 입니다' })}
      />
      {errors[labelName] && (
        <div className={styles.error}>
          {(errors[labelName] as FieldError)?.message}
        </div>
      )}
    </div>
  );
}
