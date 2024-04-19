/* eslint-disable react/jsx-no-comment-textnodes */
import Link from 'next/link';
import styles from './EmptyTable.module.scss';

function EmptyTable() {
  return (
    <div className={styles.container}>
      <p>아직 신청내역이 없어요.</p>
      //공고 목록 페이지로 이동
      <button className={styles.button} type="button">
        <Link href="/">공고 보러가기</Link>
      </button>
    </div>
  );
}

export default EmptyTable;
