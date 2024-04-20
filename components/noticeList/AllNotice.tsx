import { useRouter } from 'next/router';
import { CardNoticeType } from '@/types/noticeTypes';
import Pagination from '@/components/commons/pagination/Pagination';
import NoticeSort from './NoticeSort';
import AllNoticeCard from './AllNoticeCard';
import styles from './AllNotice.module.scss';

interface NoticeProps {
  noticeData: CardNoticeType[];
  itemCount: number;
  totalCount: number;
}
export default function AllNotice({
  noticeData,
  totalCount,
  itemCount,
}: NoticeProps) {
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
        <AllNoticeCard noticeData={noticeData} />
        <Pagination totalCount={totalCount} itemCount={itemCount} />
      </section>
    </article>
  );
}
