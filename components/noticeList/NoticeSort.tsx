import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './NoticeSort.module.scss';
import SortSelectInput from '../commons/inputs/sortSelectInput/SortSelectInput';
import Filter from '../commons/filter/Filter';

export default function NoticeSort() {
  const [sortValue, setSortValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const handleFilterToggle = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();
  let addressNum = 0;

  // address 쿼리가 배열이라면 address 값의 개수만큼 값을 저장
  // address 쿼리가 배열이 아니라면 1의 값을 저장
  if (router.query.address) {
    if (Array.isArray(router.query.address)) {
      addressNum = router.query.address.length;
    } else {
      addressNum = 1;
    }
  }

  // 각 시급과 시작일의 쿼리 값이 있다면 1의 값 추가
  // 모든 쿼리 값을 더한 값을 저장
  const hourlyPayGteNum = router.query.hourlyPayGte ? 1 : 0;
  const startsAtGtNum = router.query.startsAtGte ? 1 : 0;
  const sumNum = addressNum + hourlyPayGteNum + startsAtGtNum;
  return (
    <div className={styles.noticeSort}>
      <SortSelectInput value={sortValue} setValue={setSortValue} />
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
