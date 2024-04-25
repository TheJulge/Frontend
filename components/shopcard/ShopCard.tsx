import { useRef, useEffect, useState } from 'react';
import ClockIcon from '@/public/images/profilecard/clockIcon.svg';
import PinIcon from '@/public/images/profilecard/pointer.svg';
import { formatNoticeTime } from '@/utils/noticeDataFormetters';
import { NoticeBaseType } from '@/types/noticeTypes';
import { useRouter } from 'next/router';
import PayIncrease from '../commons/card/payIncrease/PayIncrease';
import styles from './ShopCard.module.scss';

interface CardPropsType {
  data: NoticeBaseType;
  url: string;
  address: string;
  originalHourlyPay: number;
}

// eslint-disable-next-line react/function-component-definition
const ShopCard = ({ data, url, address, originalHourlyPay }: CardPropsType) => {
  const divRef = useRef<HTMLDivElement>(null);
  const {
    hourlyPay: pay,
    description,
    startsAt,
    workhour: workHours,
    closed,
    id,
  } = data;
  const date = formatNoticeTime(startsAt, workHours);
  const router = useRouter();

  const [imageStyle, setImageStyle] = useState({}); // 이미지 스타일 상태

  const onChangeHeight = () => {
    const height = divRef.current ? divRef.current.clientHeight + 48 : 0;
    setImageStyle({ height: `${height}px` });
  };

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 1024) {
      setImageStyle({});
    } else {
      onChangeHeight();
    }
  };
  useEffect(() => {
    onChangeHeight();
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
    return () => null;
  }, [divRef.current?.clientHeight]);

  return (
    <div className={styles.container}>
      <div className={styles.imageBox} style={imageStyle}>
        <img src={url} alt="가게이미지" />
      </div>
      <div className={styles.noticeBox}>
        <div className={styles.notice} ref={divRef}>
          <div>
            <p className={styles.title}>시급</p>
            <div className={styles.pay}>
              <PayIncrease
                hourlyPay={Number(pay)}
                originalHourlyPay={originalHourlyPay}
                closed={closed}
              />
            </div>
          </div>
          <div className={styles.text}>
            <ClockIcon />
            <p>{date}</p>
          </div>
          <div className={styles.text}>
            <PinIcon />
            <p>{address}</p>
          </div>
          <p className={styles.description}>{description}</p>
        </div>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            router.push({
              pathname: `/shops/${id}/notices`,
              query: { id: router.query.id, noticeId: router.query.noticeId },
            });
          }}
        >
          공고 편집하기
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
