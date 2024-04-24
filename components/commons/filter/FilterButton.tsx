import React from 'react';
import { useRouter } from 'next/router';
import styles from './FilterButton.module.scss';

/**
 * 초기화, 적용하기 버튼에 대한 컴포넌트 입니다.
 * @param {function} props.setSelectLocation 주소 값 결정
 * @param {function} props.setStartDate 시작일 값 결정
 * @param {function} props.setMoney 금액 값 설정
 */

interface Location {
  id: number;
  name: string;
}

interface ButtonProps {
  selectLocation: Location[];
  setSelectLocation: React.Dispatch<React.SetStateAction<Location[]>>;
  startDate: Date | undefined;
  setStartDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  money: string;
  setMoney: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface QueryProps {
  address?: Location[];
  hourlyPayGte?: string;
  startsAtGte?: string;
}

export default function FilterButton({
  selectLocation,
  setSelectLocation,
  startDate,
  setStartDate,
  money,
  setMoney,
  setIsOpen,
}: ButtonProps) {
  const router = useRouter();

  // 초기화 버튼을 누르면 위치, 시작일,금액의 값이 초기화 됩니다.
  const handleInitialization = () => {
    setSelectLocation([]);
    setStartDate(undefined);
    setMoney('');
  };

  //
  function buildQueryString(data: QueryProps) {
    const queryStringArray = Object.entries(data).map(([key, value]) => {
      if (Array.isArray(value)) {
        return value.map(item => `${key}=${item.name}`).join('&');
      }
      return value ? `${key}=${value}` : '';
    });
    return queryStringArray.join('&').replace(/&$/, '');
  }

  const handleFilter = () => {
    const filter: QueryProps = {
      address: selectLocation,
    };
    const moneys = parseInt(money.replace(/,/g, ''), 10);

    if (selectLocation.length === 0) {
      delete filter.address;
    }

    if (startDate) {
      filter.startsAtGte = startDate.toISOString();
    }

    if (money) {
      filter.hourlyPayGte = String(moneys);
    }

    if (router.query.keyword) {
      if (buildQueryString(filter)) {
        router.push(
          `?keyword=${router.query.keyword}&${buildQueryString(filter)}`,
        );
      } else {
        router.push(`?keyword=${router.query.keyword}`);
      }
    } else {
      router.push(`?${buildQueryString(filter)}`);
    }
    // router.push(
    //   buildQueryString(filter)
    //     ? `?${buildQueryString(filter)}`
    //     : buildQueryString(filter),
    // );
    setIsOpen(false);
  };
  return (
    <div className={styles.filterButton}>
      <button type="button" onClick={handleInitialization}>
        초기화
      </button>
      <button type="button" onClick={handleFilter}>
        적용하기
      </button>
    </div>
  );
}
