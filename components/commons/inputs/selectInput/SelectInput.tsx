import styles from '@/components/commons/inputs/selectInput/SelectInput.module.scss';
import DropDown from '@/components/commons/dropDown/Dropdown';
import React, { useState } from 'react';
import DropDownUpIcon from '@/public/inputs/dropDownUp.svg';
import DropDownDownIcon from '@/public/inputs/dropDownDown.svg';

type SelectInputProps = {
  labelName: string;
};

export default function SelectInput({ labelName }: SelectInputProps) {
  const options = [
    '한식',
    '중식',
    '양식',
    '일식',
    '분식',
    '간식',
    '카페',
    '편의점',
    '기타',
  ];
  const [value, setValue] = useState<string>('');
  const [isOpenig, setIsOpening] = useState<boolean>(false);
  const handleSelectInputClick = () => {
    setIsOpening(!isOpenig);
  };
  const handleDropDownClick = (event: React.MouseEvent) => {
    const selectedValue = (event.target as HTMLLIElement).innerText;
    setValue(selectedValue);
    setIsOpening(!isOpenig);
  };

  return (
    <div className={styles.container}>
      <label className={styles.selectInputLabel} htmlFor={labelName}>
        <span>{labelName}</span>
        <button onClick={handleSelectInputClick} type="button">
          <input
            id={labelName}
            readOnly
            placeholder="선택"
            type="text"
            value={value}
          />
          {isOpenig ? (
            <DropDownUpIcon className={styles.upIcon} />
          ) : (
            <DropDownDownIcon className={styles.downIcon} />
          )}
        </button>
      </label>
      {isOpenig ? (
        <DropDown options={options} handleClick={handleDropDownClick} />
      ) : null}
    </div>
  );
}
