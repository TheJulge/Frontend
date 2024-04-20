import styles from './TableModal.module.scss';

/**
 * tableModal의 텍스트  컴포넌트 입니다.
 * table의 소개 값을 받아와서 처리해야 합니다.
 */

interface TextProps {
  text: string;
}
export default function TableModalText({ text }: TextProps) {
  return (
    <div className={styles.tableModalText}>
      <p>{text}</p>
    </div>
  );
}
