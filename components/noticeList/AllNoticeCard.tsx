import { CardNoticeType } from '@/types/noticeTypes';
import { getCookieValue } from '@/utils/getCookie';
import Link from 'next/link';
import Card from '../commons/card/Card';
import styles from './AllNoticeCard.module.scss';

interface NoticeProps {
  noticeData: CardNoticeType[];
}

export default function AllNoticeCard({ noticeData }: NoticeProps) {
  const userId = getCookieValue('userId');
  const handleLink = () => {
    if (!userId) alert('로그인이 필요한 서비스 입니다.');
  };
  return (
    <ul className={styles.cardContainer}>
      {noticeData.map((items: CardNoticeType) => {
        const urlCutOff = items.item.shop.href.indexOf('/shops');
        const result = items.item.shop.href.slice(urlCutOff);
        return (
          <li key={items.item.id} role="presentation">
            <Link
              onClick={handleLink}
              href={
                userId ? `${result}/notices/${items.item.id}/alba` : `/signin`
              }
            >
              <Card noticeInfo={items} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
