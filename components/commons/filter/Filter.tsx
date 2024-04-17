import React, { useState } from 'react';
import styles from './Filter.module.scss';
import FilterTop from './FilterTop';
import FilterLocation from './FilterLocation';
import FilterDate from './FilterDate';
import FilterAmount from './FilterAmount';
import FilterButton from './FilterButton';

/**
 *
 * @param {Object} props
 * @param {boolean} props.isOpen 모달 보임 유무
 * @param {React.Dispatch<React.SetStateAction<boolean>>} props.setIsOpen 모달 보임 유무 결정
 */

interface Location {
  id: number;
  name: string;
}

export default function Filter({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [selectLocation, setSelectLocation] = useState<Location[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  if (!isOpen) return null;
  return (
    <div className={styles.filter}>
      <FilterTop setIsOpen={setIsOpen} />
      <FilterLocation
        selectLocation={selectLocation}
        setSelectLocation={setSelectLocation}
      />
      <FilterDate startDate={startDate} setStartDate={setStartDate} />
      <FilterAmount />
      <FilterButton
        setSelectLocation={setSelectLocation}
        setStartDate={setStartDate}
      />
    </div>
  );
}
