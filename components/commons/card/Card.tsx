import Image from 'next/image';
import { CardNoticeType } from '@/types/noticeTypes';
import styles from './Card.module.scss';
import ClockIcon from '@/public/images/clockIcon.svg';
import LocationIcon from '@/public/images/locationIcon.svg';
import Link from 'next/link';
import formatNoticeTime from '@/utils/timeFormatter';

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
  const link = noticeData.shop.href;
  return (
    <Link className={styles.cardContainer} href={link}>
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
            <span>
              {formatNoticeTime(noticeData.startsAt, noticeData.workhour)}
            </span>
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
    </Link>
  );
}
