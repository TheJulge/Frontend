import styles from './StatusButton.module.scss';

export function CompleteBadge() {
  return (
    <div className={styles.buttonBox}>
      <div className={`${styles.button} ${styles.completeButton}`}>
        승인 완료
      </div>
    </div>
  );
}

export function RefuseBadge() {
  return (
    <div className={styles.buttonBox}>
      <div className={`${styles.button} ${styles.refuseButton}`}>거절</div>
    </div>
  );
}

export function WaitingBadge() {
  return (
    <div className={styles.buttonBox}>
      <div className={`${styles.button} ${styles.waitingButton}`}>대기중</div>
    </div>
  );
}

export function CanceledBadge() {
  return (
    <div className={styles.buttonBox}>
      <div className={`${styles.button} ${styles.canceledButton}`}>취소</div>
    </div>
  );
}
