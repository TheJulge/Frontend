import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './NoticeSort.module.scss';
import SortSelectInput from '../commons/inputs/sortSelectInput/SortSelectInput';
import Filter from '../commons/filter/Filter';

export default function NoticeSort() {
  const [test, setTest] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const handleFilterToggle = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();
  const addressNum = router.query.address ? router.query.address.length : 0;
  const hourlyPayGteNum = router.query.hourlyPayGte ? 1 : 0;
  const startsAtGtNum = router.query.startsAtGte ? 1 : 0;
  const sumNum = addressNum + hourlyPayGteNum + startsAtGtNum;
  return (
    <div className={styles.noticeSort}>
      <SortSelectInput value={test} setValue={setTest} />
      <button
        type="button"
        className={styles.filterButton}
        onClick={handleFilterToggle}
      >
        상세 필터{sumNum ? ` (${sumNum})` : ''}
      </button>
      <div className={styles.filterBox}>
        <Filter isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}
