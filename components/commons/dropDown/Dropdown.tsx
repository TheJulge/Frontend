import styles from '@/components/commons/dropDown/Dropdown.module.scss';
import useCloseDropDown from '@/hooks/useCloseDropDown';
import React, { MouseEventHandler, useRef } from 'react';

/**
 * SelectInput, SortSelectInput과 함께 사용합니다.
 * @param {options} props SelectInput, SortSelectInput에서 드롭다운에서 사용할 옵션들을 받아옵니다.
 * @param {handleClick} props 버튼을 클릭시 버튼에 해당하는 값으로 SelectInput, SortSelectInput의 state를 변경시키는 함수입니다.
 * @param {React.RefObject} buttonRef 모달을 여는 버튼에 대한 참조 객체
 */

interface DropDownProps {
  showDropDown: boolean;
  options: string[];
  buttonRef: React.RefObject<HTMLElement>;
  handleClick: (option: string) => void;
  handleClose: () => void;
}

export default function DropDown({
  showDropDown,
  options,
  handleClick,
  handleClose,
  buttonRef,
}: DropDownProps) {
  const dropDownRef = useRef<HTMLDivElement>(null);
  useCloseDropDown(showDropDown, handleClose, dropDownRef, buttonRef);

  return (
    <div ref={dropDownRef}>
      <ul className={styles.optionList}>
        {options &&
          options.map(option => {
            return (
              <li className={styles.optionItem} key={option}>
                <button
                  className={styles.optionButton}
                  onClick={() => handleClick(option)}
                  type="button"
                >
                  {option}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
