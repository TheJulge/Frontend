import styles from '@/components/commons/inputs/sortSelectInput/SortSelectInput.module.scss';
import DropDown from '@/components/commons/dropDown/Dropdown';
import React, { useRef, useState } from 'react';
import PolygonUpIcon from '@/public/inputs/polygonUp.svg';
import PolygonDownIcon from '@/public/inputs/polygonDown.svg';

/**
 * 클릭하면 드롭박스가 나오는 셀렉트 형식의 인풋입니다. 공고의 정렬 기준을 선택합니다.
 * @param {value} props 해당 인풋에서 사용할 State
 * @param {setValue} props 해당 인풋에서 사용할 state를 변경할 seter 함수
 */

interface SortSelectInputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const OPTIONS = ['마감임박순', '시급많은순', '시간적은순', '가나다순'];

export default function SortSelectInput({
  value,
  setValue,
}: SortSelectInputProps) {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const buttonRef = useRef(null);
  const handleSelectInputClick = () => {
    setShowDropDown(!showDropDown);
  };
  const handleDropDownClick = (event: React.MouseEvent) => {
    const selectedValue = (event.target as HTMLLIElement).innerText;
    setValue(selectedValue);
    setShowDropDown(!showDropDown);
  };
  const handleClose = () => {
    setShowDropDown(false);
  };

  return (
    <div className={styles.container}>
      <button
        ref={buttonRef}
        className={styles.button}
        onClick={handleSelectInputClick}
        type="button"
      >
        <input
          className={styles.input}
          id="sort"
          readOnly
          placeholder="마감임박순"
          type="text"
          value={value}
          tabIndex={-1}
        />
        {showDropDown ? (
          <PolygonUpIcon alt="arrowUpIcon" className={styles.upIcon} />
        ) : (
          <PolygonDownIcon alt="arrowDownIcon" className={styles.downIcon} />
        )}
      </button>
      {showDropDown && (
        <DropDown
          buttonRef={buttonRef}
          options={OPTIONS}
          showDropDown={showDropDown}
          handleClick={handleDropDownClick}
          handleClose={handleClose}
        />
      )}
    </div>
  );
}
