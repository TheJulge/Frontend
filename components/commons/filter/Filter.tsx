import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FilterTop from './FilterTop';
import FilterLocation from './FilterLocation';
import FilterDate from './FilterDate';
import FilterAmount from './FilterAmount';
import FilterButton from './FilterButton';
import styles from './Filter.module.scss';

/**
 * filter 컴포넌트 입니다.
 * @param {boolean} props.isOpen 모달 보임 유무
 * @param {function} props.setIsOpen 모달 보임 유무 결정
 */

interface OpenProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Filter({ isOpen, setIsOpen }: OpenProps) {
  const router = useRouter();
  const [selectLocation, setSelectLocation] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [money, setMoney] = useState<string>('');

  // 리셋 조건
  const resetCondition =
    router.asPath === '/' ||
    (Object.keys(router.query).length === 1 &&
      router.query.keyword !== undefined);

  useEffect(() => {
    // 쿼리에서 위치 값 받아오고 값 저장
    if (Array.isArray(router.query.address)) {
      setSelectLocation(router.query.address);
    }

    // 쿼리에서 시작일 값을 받아오고 값 저장
    if (router.query.startsAtGte) {
      const startsAtGteValue = router.query.startsAtGte;
      const startsAtGteDate = Array.isArray(startsAtGteValue)
        ? new Date(startsAtGteValue[0])
        : new Date(startsAtGteValue);
      if (!Number.isNaN(startsAtGteDate.getTime())) {
        setStartDate(startsAtGteDate);
      }
    }

    // 쿼리에서 money 값 받아오고 값 저장
    if (router.query.hourlyPayGte) {
      setMoney(
        String(router.query.hourlyPayGte).replace(/\B(?=(\d{3})+(?!\d))/g, ','),
      );
    }

    // 필터 리셋 조건을 확인하고 리셋
    if (resetCondition) {
      setSelectLocation([]);
      setStartDate(undefined);
      setMoney('');
    }
  }, [router]);

  // isOpen이 true면 filter가 나옵니다.
  // selectLocation, startDate, money는 위치, 시작일, 금액의 값입니다.
  if (!isOpen) return null;
  return (
    <div className={styles.filter}>
      <div className={styles.gapBox}>
        <FilterTop setIsOpen={setIsOpen} />
        <FilterLocation
          selectLocation={selectLocation}
          setSelectLocation={setSelectLocation}
        />
      </div>
      <FilterDate startDate={startDate} setStartDate={setStartDate} />
      <div className={styles.gapContainer}>
        <FilterAmount money={money} setMoney={setMoney} />
        <FilterButton
          selectLocation={selectLocation}
          setSelectLocation={setSelectLocation}
          startDate={startDate}
          setStartDate={setStartDate}
          money={money}
          setMoney={setMoney}
          setIsOpen={setIsOpen}
        />
      </div>
    </div>
  );
}
