/* eslint-disable react/jsx-no-comment-textnodes */
import Link from 'next/link';
import styles from './EmptyTable.module.scss';

interface EmptyTableProps {
  text: string;
  buttonText: string;
}

function EmptyTable({ text, buttonText }: EmptyTableProps) {
  return (
    <div className={styles.container}>
      <p>{text}</p>
      //공고 목록 페이지로 이동
      <button className={styles.button} type="button">
        <Link href="/">{buttonText}</Link>
      </button>
    </div>
  );
}

export default EmptyTable;
