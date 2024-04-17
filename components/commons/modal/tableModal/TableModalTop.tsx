import CloseIcon from '@/public/images/close.svg';
import styles from './TableModal.module.scss';

interface TableModalTopProps {
  handleClose: () => void;
}

export default function TableModalTop({ handleClose }: TableModalTopProps) {
  return (
    <div className={styles.modalTop}>
      <p>
        <strong>임동현</strong>
        <span>010-1234-1234</span>
      </p>
      <button type="button" onClick={handleClose} aria-label="닫기">
        <CloseIcon viewBox="0 0 24 24" />
      </button>
    </div>
  );
}
