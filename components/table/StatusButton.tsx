import styles from './StatusButton.module.scss';

interface StatusButtonProps {
  status: 'pending' | 'accepted' | 'rejected' | 'canceled';
}

export function CompleteButton() {
  return (
    <div className={styles.buttonBox}>
      <div className={`${styles.button} ${styles.completeButton}`}>
        승인 완료
      </div>
    </div>
  );
}

export function RefuseButton() {
  return (
    <div className={styles.buttonBox}>
      <div className={`${styles.button} ${styles.refuseButton}`}>거절</div>
    </div>
  );
}

export function WaitingButton() {
  return (
    <div className={styles.buttonBox}>
      <div className={`${styles.button} ${styles.waitingButton}`}>대기중</div>
    </div>
  );
}

export function PendingButton() {
  return (
    <div className={styles.actionButtonBox}>
      <button
        type="button"
        className={`${styles.actionButton} ${styles.refuse}`}
      >
        거절하기
      </button>
      <button
        type="button"
        className={`${styles.actionButton} ${styles.accept}`}
      >
        승인하기
      </button>
    </div>
  );
}

export function StatusButton({ status }: StatusButtonProps) {
  switch (status) {
    case 'accepted':
      return <CompleteButton />;
    case 'pending':
      return <WaitingButton />;
    case 'rejected':
      return <RefuseButton />;
    case 'canceled':
      return <PendingButton />;
    default:
      return <div>오류</div>;
  }
}
