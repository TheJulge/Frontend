import { CardNoticeType } from '@/types/noticeTypes';
import styles from './Card.module.scss';

/**
 * @param {Object} props
 * @param {Object} props.noticeInfo "/notices" GET 리스폰스의 "items" 배열속성의 낱개 데이터
 */

interface CardProp {
  noticeInfo: CardNoticeType;
}

export default function Card({ noticeInfo }: CardProp) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.image}></div>
      <div className={styles.contents}>
        <div className={styles.shopInfo}></div>
        <div className={styles.payInfo}></div>
      </div>
    </div>
  );
}
