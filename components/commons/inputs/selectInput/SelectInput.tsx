import styles from '@/components/commons/inputs/selectInput/SelectInput.module.scss';
import DropDown from '@/components/commons/dropDown/Dropdown';
import React, { useState, useRef } from 'react';
import { FieldError, useFormContext } from 'react-hook-form';
import DropDownUpIcon from '@/public/inputs/dropDownUp.svg';
import DropDownDownIcon from '@/public/inputs/dropDownDown.svg';
import { InputProps } from '@/types/inputTypes';

/**
 *
 * @param {obeject} props
 * @param {string} props.labelName
 * @param {string[]} props.options
 */

interface SelectInputProps extends InputProps {
  options: string[];
}

export default function SelectInput({ labelName, options }: SelectInputProps) {
  const {
    register,
    setValue,
    formState: { errors },
    watch,
  } = useFormContext();
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const buttonRef = useRef(null);

  const handleSelectInputClick = () => {
    setShowDropDown(!showDropDown);
  };
  const handleDropDownClick = (selectedValue: string) => {
    // console.log(selectedValue);
    setValue(labelName, selectedValue, { shouldValidate: true });
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
            className={styles.input}
            id={labelName}
            readOnly
            placeholder="선택"
            type="text"
            tabIndex={-1}
            value={watch(labelName) || ''}
            {...register(labelName, { required: '필수 선택 값 입니다' })}
          />
          {showDropDown ? (
            <DropDownUpIcon alt="arrowUpIcon" className={styles.upIcon} />
          ) : (
            <DropDownDownIcon alt="arrowDownIcon" className={styles.downIcon} />
          )}
        </button>
        {errors[labelName] && (
          <div className={styles.error}>
            {(errors[labelName] as FieldError)?.message}
          </div>
        )}
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
