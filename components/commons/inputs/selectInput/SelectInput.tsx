import styles from '@/components/commons/inputs/selectInput/SelectInput.module.scss';
import DropDown from '@/components/commons/dropDown/Dropdown';
import React, { useState } from 'react';
import DropDownUpIcon from '@/public/inputs/dropDownUp.svg';
import DropDownDownIcon from '@/public/inputs/dropDownDown.svg';

/**
 * 클릭하면 드롭박스가 나오는 셀렉트 형식의 인풋입니다.
 * @param {labelName} props label로 사용할 input의 이름을 적어주면 됩니다.
 * @param {options} props 드롭박스에 들어갈 옵션을 넣어주면 됩니다.
 */

type SelectInputProps = {
  labelName: string;
  options: string[];
};

export default function SelectInput({ labelName, options }: SelectInputProps) {
  const [value, setValue] = useState<string>('');
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const handleSelectInputClick = () => {
    setShowDropDown(!showDropDown);
  };
  const handleDropDownClick = (event: React.MouseEvent) => {
    const selectedValue = (event.target as HTMLLIElement).innerText;
    setValue(selectedValue);
    setShowDropDown(!showDropDown);
  };

  return (
    <div className={styles.container}>
      <div className={styles.select}>
        <label htmlFor={labelName}>{labelName}</label>
        <button
          className={styles.button}
          onClick={handleSelectInputClick}
          type="button"
        >
          <input
            className={styles.input}
            id={labelName}
            readOnly
            placeholder="선택"
            type="text"
            value={value}
          />
          {showDropDown ? (
            <DropDownUpIcon alt="arrowUpIcon" className={styles.upIcon} />
          ) : (
            <DropDownDownIcon alt="arrowDownIcon" className={styles.downIcon} />
          )}
        </button>
      </div>
      {showDropDown ? (
        <DropDown options={options} handleClick={handleDropDownClick} />
      ) : null}
    </div>
  );
}
