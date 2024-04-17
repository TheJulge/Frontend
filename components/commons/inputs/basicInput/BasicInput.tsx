import styles from '@/components/commons/inputs/basicInput/BasicInput.module.scss';
import React from 'react';

/**
 * label 이름을 지정해서 TEXT를 입력 할 수 있는 기본 input 입니다!
 * @param {labelName} props label로 사용할 input의 이름을 적어주면 됩니다.
 * @param {value} props 해당 인풋에서 사용할 state
 * @param {setValue} props 해당 인풋에서 사용할 state를 변경할 seter 함수
 */

interface BasicInputProps {
  labelName: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function BasicInput({
  labelName,
  value,
  setValue,
}: BasicInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.container}>
      <label htmlFor={labelName}>{labelName}</label>
      <input
        className={styles.input}
        id={labelName}
        value={value}
        placeholder="입력"
        type="text"
        onChange={handleChange}
      />
    </div>
  );
}
