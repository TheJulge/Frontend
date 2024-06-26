/* eslint-disable react/jsx-no-comment-textnodes */
import Link from 'next/link';
import styles from './EmptyTable.module.scss';

interface EmptyTableProps {
  text: string;
  buttonText: string;
  link: string;
}

function EmptyTable({ text, buttonText, link }: EmptyTableProps) {
  return (
    <div className={styles.container}>
      <p>{text}</p>
      <button className={styles.button} type="button">
        <Link href={link}>{buttonText}</Link>
      </button>
    </div>
  );
}

export default EmptyTable;
