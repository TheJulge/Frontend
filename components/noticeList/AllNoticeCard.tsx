import { CardNoticeType } from '@/types/noticeTypes';
import Card from '../commons/card/Card';
import styles from './AllNoticeCard.module.scss';

/**
 * 전체 공고의 카드 컴포넌트 입니다.
 * @param {object} props.noticeData 전체 공고 목록
 */

interface NoticeProps {
  noticeData: CardNoticeType[];
}

export default function AllNoticeCard({ noticeData }: NoticeProps) {
  return (
    <ul className={styles.cardContainer}>
      {noticeData.map((item: CardNoticeType) => {
        const notice = item.item;
        const shop = item.item.shop.item;
        return (
          <li key={notice.id} role="presentation">
            <Card
              hourlyPay={notice.hourlyPay}
              startsAt={notice.startsAt}
              workhour={notice.workhour}
              closed={notice.closed}
              shopName={shop.name}
              address={shop.address1}
              imageUrl={shop.imageUrl}
              originalHourlyPay={shop.originalHourlyPay}
              links={item.links}
            />
          </li>
        );
      })}
    </ul>
  );
}
