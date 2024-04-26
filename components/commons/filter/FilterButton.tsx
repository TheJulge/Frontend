import React from 'react';
import { useRouter } from 'next/router';
import styles from './FilterButton.module.scss';

/**
 * 초기화, 적용하기 버튼에 대한 컴포넌트 입니다.
 * @param {function} props.setSelectLocation 주소 값 결정
 * @param {function} props.setStartDate 시작일 값 결정
 * @param {function} props.setMoney 금액 값 설정
 */

interface ButtonProps {
  selectLocation: string[];
  setSelectLocation: React.Dispatch<React.SetStateAction<string[]>>;
  startDate: Date | undefined;
  setStartDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  money: string;
  setMoney: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface QueryProps {
  address?: string[];
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

  function buildQueryString(data: QueryProps) {
    // 1. data의 key와 value를 인자로 map 함수를 실행합니다.
    // 2. value가 배열이라면 value에 map 함수를 실행하고, key값과 각 value를 쿼리 주소로 만듭니다.
    // ㄴ ex) address = ["서울시 강남구", "서울시 마포구"]   =>   address=서울시 강남구&address=서울시 마포구
    // 3. value가 배열이 아니라면 key와 value를 쿼리 주소로 만듭니다.
    // 4. 배열로 만들어진 queryStringArray의 각 요소에 &를 넣어서 문자열로 만들어줍니다.
    const queryStringArray = Object.entries(data).map(([key, value]) => {
      if (Array.isArray(value)) {
        return value.map(item => `${key}=${item}`).join('&');
      }
      return value ? `${key}=${value}` : '';
    });
    return queryStringArray.join('&');
  }

  const handleFilter = () => {
    const filter: QueryProps = {
      address: selectLocation,
    };

    if (selectLocation.length === 0) {
      delete filter.address;
    }

    if (startDate) {
      // 원래 코드 filter.startsAtGte = startDate.toISOString();
      // 한국 표준시는 협정 세계시보다 9시간 빠르기 때문에 UTC를 기준으로 ISO로 변환하면 하루가 줄어듭니다.
      // 그래서 UTC 기준으로 날짜 객체를 변환하고 ISO로 변환합니다.
      filter.startsAtGte = new Date(
        Date.UTC(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate(),
        ),
      ).toISOString();
    }

    if (money) {
      filter.hourlyPayGte = money.replace(/,/g, '');
    }

    if (router.query.keyword) {
      if (buildQueryString(filter)) {
        router.push(
          `?keyword=${router.query.keyword}&${buildQueryString(filter)}`,
        );
      } else {
        router.push(`?keyword=${router.query.keyword}`);
      }
    } else if (!router.query.keyword) {
      if (buildQueryString(filter)) {
        router.push(`?${buildQueryString(filter)}`);
      } else {
        router.push(`/`);
      }
    }
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
