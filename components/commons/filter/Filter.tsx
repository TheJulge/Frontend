import React from 'react';
import styles from './Filter.module.scss';
import FilterTop from './FilterTop';
import FilterLocation from './FilterLocation';
import FilterDate from './FilterDate';
import FilterAmount from './FilterAmount';
import FilterButton from './FilterButton';

export default function Filter({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  if (!isOpen) return null;
  return (
    <div className={styles.filter}>
      <FilterTop setIsOpen={setIsOpen} />
      <FilterLocation />
      <FilterDate />
      <FilterAmount />
      <FilterButton />
    </div>
  );
}
