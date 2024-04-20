import Image from 'next/image';
import styles from './NoticeDetailsCard.module.scss';
import { NoticeBaseType } from '@/types/noticeTypes';
import PayIncrease from '../../card/payIncrease/PayIncrease';

interface NoticeDetailsCardProp {
  noticeDetails: NoticeBaseType;
}

export default function NoticeDetailsCard({
  noticeDetails,
}: NoticeDetailsCardProp) {
  const shopDetails = noticeDetails.shop.item;
  return (
    <div className={styles.container}>
      <div className={styles.cardImg}>
        <Image src={shopDetails.imageUrl} alt="shop image" layout="fill" />
      </div>
      <div className={styles.contents}>
        <div className={styles.information}>
          <div className={styles.pay}>
            <p>시급</p>
            <PayIncrease
              hourlyPay={noticeDetails.hourlyPay}
              originalHourlyPay={shopDetails.originalHourlyPay}
            />
          </div>
        </div>
        <button className={styles.button} type="button">
          신청하기
        </button>
      </div>
    </div>
  );
}
