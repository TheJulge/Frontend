import styles from '@/components/commons/inputs/sortSelectInput/SortSelectInput.module.scss';
import DropDown from '../../dropDown/Dropdown';
import { useState } from 'react';
import PolygonUpIcon from '@/public/inputs/polygonUp.svg';
import PolygonDownIcon from '@/public/inputs/polygonDown.svg';

export default function SortSelectInput() {
  const OPTIONS = ['마감임박순', '시급많은순', '시간적은순', '가나다순'];
  const [value, setValue] = useState<string>('');
  const [isOpenig, setIsOpening] = useState<boolean>(false);
  const handleSelectInputClick = (event: React.MouseEvent) => {
    setIsOpening(!isOpenig);
  };
  const handleDropDownClick = (event: React.MouseEvent) => {
    const selectedValue = (event.target as HTMLLIElement).innerText;
    setValue(selectedValue);
    setIsOpening(!isOpenig);
  };

  return (
    <div className={styles.container}>
      <button onClick={handleSelectInputClick} type="button">
        <input
          id="sort"
          readOnly
          placeholder="마감임박순"
          type="text"
          value={value}
        />
        {isOpenig ? (
          <PolygonUpIcon className={styles.upIcon} />
        ) : (
          <PolygonDownIcon className={styles.downIcon} />
        )}
      </button>
      {isOpenig ? (
        <DropDown options={OPTIONS} handleClick={handleDropDownClick} />
      ) : null}
    </div>
  );
}
