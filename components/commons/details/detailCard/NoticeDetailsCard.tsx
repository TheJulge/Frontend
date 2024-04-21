import Image from 'next/image';
import ClockIcon from '@/public/images/card/clockIcon.svg';
import LocationIcon from '@/public/images/card/locationIcon.svg';
import { formatNoticeTime } from '@/utils/noticeDataFormetters';
import { NoticeBaseType } from '@/types/noticeTypes';
import PayIncrease from '../../card/payIncrease/PayIncrease';
import styles from './NoticeDetailsCard.module.scss';

interface NoticeDetailsCardProp {
  noticeDetails: NoticeBaseType;
}

export default function NoticeDetailsCard({
  noticeDetails,
}: NoticeDetailsCardProp) {
  const shopDetails = noticeDetails.shop.item;
  const [startDate, workHour] = formatNoticeTime(
    noticeDetails.startsAt,
    noticeDetails.workhour,
  );
  return (
    <div className={styles.container}>
      <div className={styles.cardImg}>
        <Image src={shopDetails.imageUrl} alt="shop image" fill />
      </div>
      <div className={styles.contents}>
        <div className={styles.information}>
          <div className={styles.pay}>
            <p>시급</p>
            <PayIncrease
              hourlyPay={noticeDetails.hourlyPay}
              originalHourlyPay={shopDetails.originalHourlyPay}
              closed={false}
            />
          </div>
          <div className={styles.time}>
            <ClockIcon />
            <p>
              {startDate}
              {workHour}
            </p>
          </div>
          <div className={styles.location}>
            <LocationIcon />
            <p>{shopDetails.address1}</p>
          </div>
          <div className={styles.description}>{shopDetails.description}</div>
        </div>
        <button className={styles.button} type="button">
          신청하기
        </button>
      </div>
    </div>
  );
}
