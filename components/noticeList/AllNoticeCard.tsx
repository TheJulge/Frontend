import { CardNoticeType } from '@/types/noticeTypes';
import { getCookieValue } from '@/utils/getCookie';
import Link from 'next/link';
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
  const userId = getCookieValue('userId');
  const handleLink = () => {
    if (!userId) alert('로그인이 필요한 서비스 입니다.');
  };
  return (
    <ul className={styles.cardContainer}>
      {noticeData.map((items: CardNoticeType) => {
        const noticeId = items.item.id;
        const shopId = items.item.shop.item.id;
        return (
          <li key={items.item.id} role="presentation">
            <Link
              onClick={handleLink}
              href={
                userId ? `/shops/${shopId}/notices/${noticeId}/alba` : `/signin`
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
