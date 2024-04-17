import React, { useState } from 'react';
import styles from './Filter.module.scss';
import FilterTop from './FilterTop';
import FilterLocation from './FilterLocation';
import FilterDate from './FilterDate';
import FilterAmount from './FilterAmount';
import FilterButton from './FilterButton';

/**
 * @param {boolean} props.isOpen 모달 보임 유무
 * @param {function} props.setIsOpen 모달 보임 유무 결정
 */

interface Location {
  id: number;
  name: string;
}

interface FilterProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Filter({ isOpen, setIsOpen }: FilterProps) {
  const [selectLocation, setSelectLocation] = useState<Location[]>([]);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [money, setMoney] = useState<string>('');

  // isOpen이 true면 filter가 나옵니다.
  // selectLocation, startDate, money는 위치, 시작일, 금액의 값입니다.
  if (!isOpen) return null;
  return (
    <div className={styles.filter}>
      <FilterTop setIsOpen={setIsOpen} />
      <FilterLocation
        selectLocation={selectLocation}
        setSelectLocation={setSelectLocation}
      />
      <FilterDate startDate={startDate} setStartDate={setStartDate} />
      <FilterAmount money={money} setMoney={setMoney} />
      <FilterButton
        setSelectLocation={setSelectLocation}
        setStartDate={setStartDate}
        setMoney={setMoney}
      />
    </div>
  );
}
