import styles from '@/components/commons/inputs/basicInput/BasicInput.module.scss';
import React from 'react';

type BasicInputProps = {
  labelName: string;
};

export default function BasicInput({ labelName }: BasicInputProps) {
  return (
    <label className={styles.basicInputLabel} htmlFor={labelName}>
      <span>{labelName}</span>
      <input id={labelName} placeholder="입력" type="text" />
    </label>
  );
}
