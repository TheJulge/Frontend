import styles from './TableModal.module.scss';
/**
 * tableModal의 버튼 컴포넌트 입니다.
 * table의 상태 값을 받아와서
 * 거절하기를 눌렀을 때는 '거절' 뱃지가 나오게,
 * 승인하기를 눌렀을 때는 '승인 완료' 뱃지가 나오게 처리해야 합니다.
 * @param {function} props.handleClose 모달 닫는 함수
 */
interface ModalButtonProps {
  handleClose: () => void;
}
export default function TableModalButton({ handleClose }: ModalButtonProps) {
  const handleRefuse = () => {
    handleClose();
  };
  const handleApproval = () => {
    console.log('yes');
  };
  return (
    <div className={styles.tableButton}>
      <button type="button" onClick={handleRefuse}>
        거절하기
      </button>
      <button type="button" onClick={handleApproval}>
        승인하기
      </button>
    </div>
  );
}
