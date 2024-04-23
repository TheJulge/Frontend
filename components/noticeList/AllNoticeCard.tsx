import { CardNoticeType } from '@/types/noticeTypes';
import Link from 'next/link';
import Card from '../commons/card/Card';
import styles from './AllNoticeCard.module.scss';

interface NoticeProps {
  noticeData: CardNoticeType[];
}

export default function AllNoticeCard({ noticeData }: NoticeProps) {
  return (
    <ul className={styles.cardContainer}>
      {noticeData.map((items: CardNoticeType) => {
        return (
          <li key={items.item.id}>
            <Link href={items.item.shop.href}>
              <Card noticeInfo={items} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
