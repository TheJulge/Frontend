import CloseIcon from '@/public/images/close.svg';
import styles from './TableModal.module.scss';
/**
 * tableModal의 신청자와 전화번호가 있는 컴포넌트 입니다.
 * table에서 신청자와 전화번호 값을 받아와서 처리해야 합니다.
 * @param {function} props.handleClose 모달 닫는 함수
 */
interface TableModalTopProps {
  handleClose: () => void;
}

export default function TableModalTop({ handleClose }: TableModalTopProps) {
  return (
    <div className={styles.modalTop}>
      <p>
        <strong>신청자</strong>
        <span>010-1234-1234</span>
      </p>
      <button type="button" onClick={handleClose} aria-label="닫기">
        <CloseIcon viewBox="0 0 24 24" />
      </button>
    </div>
  );
}
