import Image from 'next/image';
import { CardNoticeType } from '@/types/noticeTypes';
import styles from './Card.module.scss';
import ClockIcon from '@/public/images/clockIcon.svg';
import LocationIcon from '@/public/images/locationIcon.svg';

/**
 * @param {Object} props
 * @param {Object} props.noticeInfo "/notices" GET 리스폰스의 "items" 배열속성의 낱개 데이터
 */

interface CardProp {
  noticeInfo: CardNoticeType;
}

export default function Card({ noticeInfo }: CardProp) {
  const noticeData = noticeInfo.item;
  const shopData = noticeInfo.item.shop.item;
  return (
    <div className={styles.cardContainer}>
      <Image
        src={noticeInfo.item.shop.item.imageUrl}
        alt={noticeInfo.item.shop.item.name}
        fill
      />

      <div className={styles.contents}>
        <div className={styles.notice}>
          <p className={styles.shopName}>{shopData.name}</p>
          <div className={styles.time}>
            <ClockIcon />
            <span>시간~시간</span>
          </div>
          <div className={styles.location}>
            <LocationIcon />
            <span>{shopData.address1}</span>
          </div>
        </div>
        <div className={styles.payInfo}>
          <span className={styles.pay}>{noticeData.hourlyPay}</span>
        </div>
      </div>
    </div>
  );
}
