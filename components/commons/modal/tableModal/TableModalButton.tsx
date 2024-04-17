import styles from './TableModal.module.scss';

export default function TableModalButton() {
  return (
    <div className={styles.tableButton}>
      <button type="button">거절하기</button>
      <button type="button">승인하기</button>
    </div>
  );
}
