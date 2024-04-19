import styles from './EmptyTable.module.scss';

function EmptyTable() {
  return (
    <div className={styles.container}>
      <p>아직 신청내역이 없어요.</p>
      <button className={styles.button} type="button">
        공고 보러가기
      </button>
    </div>
  );
}

export default EmptyTable;
