import styles from '@/components/commons/inputs/selectInput/SelectInput.module.scss';
import DropDown from '@/components/commons/dropDown/Dropdown';
import React, { useState, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import DropDownUpIcon from '@/public/inputs/dropDownUp.svg';
import DropDownDownIcon from '@/public/inputs/dropDownDown.svg';
import { InputProps } from '@/types/inputTypes';

/**
 * 클릭하면 드롭박스가 나오는 셀렉트 형식의 인풋입니다.
 * @param {labelName} props label로 사용할 input의 이름을 적어주면 됩니다.
 * @param {options} props 드롭박스에 들어갈 옵션을 넣어주면 됩니다.
 * @param {value} props 해당 인풋에서 사용할 State
 * @param {setValue} props 해당 인풋에서 사용할 state를 변경할 seter 함수
 */

interface SelectInputProps extends InputProps {
  options: string[];
}

export default function SelectInput({
  labelName,
  options,
  // value,
  // setValue,
}: SelectInputProps) {
  const { register, setValue } = useFormContext();
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const buttonRef = useRef(null);

  const handleSelectInputClick = () => {
    setShowDropDown(!showDropDown);
  };
  const handleDropDownClick = (selectedValue: string) => {
    // const selectedValue = (event.target as HTMLLIElement).innerText;
    setValue(labelName, selectedValue);
    setShowDropDown(!showDropDown);
  };
  const handleClose = () => {
    setShowDropDown(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.select}>
        <label htmlFor={labelName}>{labelName}</label>
        <button
          ref={buttonRef}
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
            // value={value}
            tabIndex={-1}
            {...register(labelName, { required: true })}
          />
          {showDropDown ? (
            <DropDownUpIcon alt="arrowUpIcon" className={styles.upIcon} />
          ) : (
            <DropDownDownIcon alt="arrowDownIcon" className={styles.downIcon} />
          )}
        </button>
      </div>
      {showDropDown && (
        <DropDown
          buttonRef={buttonRef}
          options={options}
          showDropDown={showDropDown}
          handleClick={handleDropDownClick}
          handleClose={handleClose}
        />
      )}
    </div>
  );
}
