import { useState } from 'react';
import styles from './NoticeSort.module.scss';
import SortSelectInput from '../commons/inputs/sortSelectInput/SortSelectInput';
import Filter from '../commons/filter/Filter';

export default function NoticeSort() {
  const [test, setTest] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const handleFilterToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.noticeSort}>
      <SortSelectInput value={test} setValue={setTest} />
      <button
        type="button"
        className={styles.filterButton}
        onClick={handleFilterToggle}
      >
        상세 필터
      </button>
      <div className={styles.filterBox}>
        <Filter isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}
