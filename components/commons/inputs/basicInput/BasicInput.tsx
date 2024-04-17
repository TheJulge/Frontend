import styles from '@/components/commons/inputs/basicInput/BasicInput.module.scss';
import React from 'react';

/**
 * label 이름을 지정해서 TEXT를 입력 할 수 있는 기본 input 입니다!
 * @param {labelName} props label로 사용할 input의 이름을 적어주면 됩니다.
 */

type BasicInputProps = {
  labelName: string;
};

export default function BasicInput({ labelName }: BasicInputProps) {
  return (
    <div className={styles.container}>
      <label htmlFor={labelName}>{labelName}</label>
      <input
        className={styles.input}
        id={labelName}
        placeholder="입력"
        type="text"
      />
    </div>
  );
}
