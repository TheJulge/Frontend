import {
  WaitingBadge,
  CompleteBadge,
  RefuseBadge,
} from '@/components/table/StatusBadge';

import styles from './StatusButton.module.scss';

type TypestateChangeFunction = (
  status: 'pending' | 'accepted' | 'rejected' | 'canceled',
  id: string,
) => void;

interface StatusButtonProps {
  id: string;
  onStatusChange?: TypestateChangeFunction;
  status: 'pending' | 'accepted' | 'rejected' | 'canceled';
  type: string;
}

export function PendingButton({
  onStatusChange,
  id,
}: {
  id: string;
  onStatusChange?: TypestateChangeFunction;
}) {
  return (
    <div className={styles.actionButtonBox}>
      <button
        type="button"
        className={`${styles.actionButton} ${styles.refuse}`}
        onClick={() => onStatusChange && onStatusChange('rejected', id)}
      >
        거절하기
      </button>
      <button
        type="button"
        className={`${styles.actionButton} ${styles.accept}`}
        onClick={() => onStatusChange && onStatusChange('accepted', id)}
      >
        승인하기
      </button>
    </div>
  );
}

export function StatusButton({
  status,
  onStatusChange,
  id,
  type,
}: StatusButtonProps) {
  switch (status) {
    case 'accepted':
      return <CompleteBadge />;
    case 'pending':
      // 사장이면 승인/거절이 떠야하고, 알바생이면 대기중이 떠야
      //  로그인한 회원이 사장인지, 알바생인지 zustand 전역변수로 저장해서 분기로 나눠야함
      return type === 'employer' ? (
        <PendingButton onStatusChange={onStatusChange} id={id} />
      ) : (
        <WaitingBadge />
      );
    case 'rejected':
      return <RefuseBadge />;

    default:
      return <div>오류</div>;
  }
}
