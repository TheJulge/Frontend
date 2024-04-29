import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { formatNoticeTime } from '@/utils/noticeDataFormetters';
import ClockIcon from '@/public/images/card/clockIcon.svg';
import LocationIcon from '@/public/images/card/locationIcon.svg';
import PayIncrease from './payIncrease/PayIncrease';
import styles from './Card.module.scss';
// import { ShopBaseType } from '@/types/shopTypes';
// import { getCookieValue } from '@/utils/getCookie';

interface CardProp {
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  closed: boolean;
  shopName: string;
  address: string;
  imageUrl: string;
  originalHourlyPay: number;
  shopId: string;
  noticeId: string;
  type?: string;
}
/**
 * 각각의 공고를 표시하는 Card 컴포넌트
 * 페이지에서 "/notices"로 요청한 데이터에서 "items" 배열의 각각 요소들을 map해서 사용
 * @param {object} noticeInfo  "items"의 각각 요소 객체
 */

export default function Card({
  hourlyPay,
  startsAt,
  workhour,
  closed,
  shopName,
  address,
  imageUrl,
  originalHourlyPay,
  shopId,
  noticeId,
  type = 'alba',
}: CardProp) {
  const [startDate, workHour] = formatNoticeTime(startsAt, workhour);
  return (
    <Link
      className={classNames(styles.cardContainer, {
        [styles.closed]: closed,
      })}
      href={`/shops/${shopId}/notices/${noticeId}/${type}`}
    >
      <div className={styles.cardImg}>
        {closed && <div className={styles.closedMessage}>마감 완료</div>}
        <Image src={imageUrl} alt={shopName} layout="fill" />
      </div>

      <div className={styles.contents}>
        <div className={styles.notice}>
          <span className={styles.shopName}>{shopName}</span>
          <div className={styles.time}>
            <div className={styles.iconBox}>
              <ClockIcon viewBox="0 0 20 20" />
            </div>
            <div className={styles.timeText}>
              <span className={styles.data}>{startDate}</span>
              <span className={styles.hour}>{workHour}</span>
            </div>
          </div>
          <div className={styles.location}>
            <div className={styles.iconBox}>
              <LocationIcon viewBox="0 0 20 20" />
            </div>
            <span>{address}</span>
          </div>
        </div>
        <PayIncrease
          hourlyPay={hourlyPay}
          originalHourlyPay={originalHourlyPay}
          closed={closed}
        />
      </div>
    </Link>
  );
}
