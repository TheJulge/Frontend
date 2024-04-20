import { CardNoticeType } from '@/types/noticeTypes';
import { useRouter } from 'next/router';
import Card from '../commons/card/Card';
import styles from './AllNoticeCard.module.scss';

interface NoticeProps {
  noticeData: CardNoticeType[];
}

export default function AllNoticeCard({ noticeData }: NoticeProps) {
  const q = useRouter();
  console.log(q.query);
  return (
    <ul className={styles.cardContainer}>
      {noticeData.map((items: CardNoticeType) => {
        return (
          <li key={items.item.id}>
            <Card noticeInfo={items} />
          </li>
        );
      })}
    </ul>
  );
}
