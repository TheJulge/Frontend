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
  const searchKeyword = router.query.keyword;
  return (
    <article className={styles.allNotice}>
      <section>
        <div className={styles.allNoticeTop}>
          {searchKeyword ? (
            <h2>
              <strong>{searchKeyword}</strong>에 대한 공고 목록
            </h2>
          ) : (
            <h2>전체 공고</h2>
          )}
          <NoticeSort />
        </div>
        {noticeData.length === 0 ? (
          <div className={styles.noNotice}>등록된 게시물이 없습니다.</div>
        ) : (
          <>
            <AllNoticeCard noticeData={noticeData} />
            <Pagination totalCount={totalCount} itemCount={itemCount} />
          </>
        )}
      </section>
    </article>
  );
}
