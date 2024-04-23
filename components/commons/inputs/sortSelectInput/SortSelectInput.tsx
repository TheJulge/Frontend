import styles from '@/components/commons/inputs/sortSelectInput/SortSelectInput.module.scss';
import DropDown from '@/components/commons/dropDown/Dropdown';
import React, { useRef, useState } from 'react';
import PolygonUpIcon from '@/public/images/inputs/polygonUp.svg';
import PolygonDownIcon from '@/public/images/inputs/polygonDown.svg';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const handleSelectInputClick = () => {
    setShowDropDown(!showDropDown);
  };
  const optionQuery = (option: string) => {
    switch (option) {
      case '마감임박순':
        return 'time';
      case '시급많은순':
        return 'pay';
      case '시간적은순':
        return 'hour';
      case '가나다순':
        return 'shop';
      default:
        return undefined;
    }
  };
  const handleDropDownClick = (event: React.MouseEvent) => {
    const selectedValue = (event.target as HTMLLIElement).innerText;
    setValue(selectedValue);
    setShowDropDown(!showDropDown);

    const currentUrl = router.asPath; // 현재 URL 가져오기
    const sortQuery = optionQuery(selectedValue);

    let newUrl: string;

    // router.query.sort가 존재하는 경우 기존의 sort를 변경, 없는 경우 새로 추가
    if (router.query.sort) {
      newUrl = currentUrl.replace(/sort=[^&]*/, `sort=${sortQuery}`);
    } else {
      newUrl = `${currentUrl}${currentUrl.includes('?') ? '&' : '?'}sort=${sortQuery}`;
    }

    router.push(newUrl);
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
          <PolygonUpIcon aria-label="arrowUpIcon" className={styles.upIcon} />
        ) : (
          <PolygonDownIcon
            aria-label="arrowDownIcon"
            className={styles.downIcon}
          />
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
