import styles from '@/components/commons/inputs/selectInput/SelectInput.module.scss';
import DropDown from '@/components/commons/dropDown/Dropdown';
import React, { useState, useRef } from 'react';
import DropDownUpIcon from '@/public/images/inputs/dropDownUp.svg';
import DropDownDownIcon from '@/public/images/inputs/dropDownDown.svg';
import { Control, useController } from 'react-hook-form';

/**
 * @param {object} props
 * @param {string} props.labelName
 * @param {string[]} props.options
 * @param {string} props.name 폼에서 사용할 인풋 이름
 * @param {Control} props.control 커스텀 제어 컴포넌트를 비제어 컴포넌트인 부모 폼에서 조작하기 위한 control 속성
 */

interface SelectInputProps {
  labelName: string;
  options: string[];
  name: string;
  control: Control;
}

export default function SelectInput({
  labelName,
  options,
  name,
  control,
}: SelectInputProps) {
  const { field } = useController({
    name,
    control,
    rules: { required: true },
  });

  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const buttonRef = useRef(null);

  const handleSelectInputClick = () => {
    setShowDropDown(!showDropDown);
  };
  const handleDropDownClick = (event: React.MouseEvent) => {
    field.onChange((event.target as HTMLLIElement).innerText);
    setShowDropDown(false);
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
            id={labelName}
            className={styles.input}
            readOnly
            placeholder="선택"
            type="text"
            tabIndex={-1}
            value={field.value || ''}
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
