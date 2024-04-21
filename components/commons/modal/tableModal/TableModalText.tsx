import styles from './TableModal.module.scss';

/**
 * tableModal의 텍스트  컴포넌트 입니다.
 * 신청자 소개 텍스트 값을 받아와서 처리합니다.
 * @param {string} props.text 신청자 소개 텍스트 값
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
