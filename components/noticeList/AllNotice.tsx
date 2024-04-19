import { CardNoticeType } from '@/types/noticeTypes';
import { useRouter } from 'next/router';
import styles from './AllNotice.module.scss';
import Card from '../commons/card/Card';
import NoticeSort from './NoticeSort';

export default function AllNotice({ noticeData }: any) {
  const router = useRouter();
  const keyword = router.query.searchKeyword;
  return (
    <article className={styles.allNotice}>
      <section>
        <div className={styles.allNoticeTop}>
          {keyword ? (
            <h2>
              <strong>{keyword}</strong>에 대한 공고 목록
            </h2>
          ) : (
            <h2>전체 공고</h2>
          )}
          <NoticeSort />
        </div>
        <ul className={styles.cardContainer}>
          {noticeData.map((items: CardNoticeType) => {
            return (
              <li key={items.item.id}>
                <Card noticeInfo={items} />
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
}
