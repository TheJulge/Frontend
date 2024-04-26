import Image from 'next/image';
import classNames from 'classnames';
import { formatNoticeTime } from '@/utils/noticeDataFormetters';
import { CardNoticeType } from '@/types/noticeTypes';
import ClockIcon from '@/public/images/card/clockIcon.svg';
import LocationIcon from '@/public/images/card/locationIcon.svg';
import PayIncrease from './payIncrease/PayIncrease';
import styles from './Card.module.scss';

interface CardProp {
  noticeInfo: CardNoticeType;
}
/**
 * 각각의 공고를 표시하는 Card 컴포넌트
 * 페이지에서 "/notices"로 요청한 데이터에서 "items" 배열의 각각 요소들을 map해서 사용
 * @param {object} noticeInfo  "items"의 각각 요소 객체
 */

export default function Card({ noticeInfo }: CardProp) {
  const noticeData = noticeInfo.item;
  const shopData = noticeData.shop.item;
  const [startDate, workHour] = formatNoticeTime(
    noticeData.startsAt,
    noticeData.workhour,
  );
  return (
    <div
      className={classNames(styles.cardContainer, {
        [styles.closed]: noticeData.closed,
      })}
    >
      <div className={styles.cardImg}>
        {noticeData.closed && (
          <div className={styles.closedMessage}>마감 완료</div>
        )}
        <Image
          src={noticeInfo.item.shop.item.imageUrl}
          alt={noticeInfo.item.shop.item.name}
          layout="fill"
        />
      </div>

      <div className={styles.contents}>
        <div className={styles.notice}>
          <span className={styles.shopName}>{shopData.name}</span>
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
            <LocationIcon />
            <span>{shopData.address1}</span>
          </div>
        </div>
        <PayIncrease
          hourlyPay={noticeData.hourlyPay}
          originalHourlyPay={shopData.originalHourlyPay}
          closed={noticeData.closed}
        />
      </div>
    </div>
  );
}
