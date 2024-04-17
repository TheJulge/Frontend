import Image from 'next/image';
import classNames from 'classnames';
import { CardNoticeType } from '@/types/noticeTypes';
import styles from './Card.module.scss';
import ClockIcon from '@/public/images/card/clockIcon.svg';
import LocationIcon from '@/public/images/card/locationIcon.svg';
import { formatNoticeTime } from '@/utils/noticeDataFormetters';
import PayIncrease from './payIncrease/PayIncrease';

/**
 * @param {Object} props
 * @param {Object} props.noticeInfo "/notices" GET 리스폰스의 "items" 배열속성의 낱개 데이터
 */

interface CardProp {
  noticeInfo: CardNoticeType;
}

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
          <p className={styles.shopName}>{shopData.name}</p>
          <div className={styles.time}>
            <ClockIcon />
            <div>
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
        />
      </div>
    </div>
  );
}
