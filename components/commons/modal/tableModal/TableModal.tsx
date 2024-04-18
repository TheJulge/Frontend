import Modal from '../Modal';
import TableModalTop from './TableModalTop';
import TableModalText from './TableModalText';
import TableModalButton from './TableModalButton';
import styles from './TableModal.module.scss';

/**
 * tableModal 컴포넌트 입니다.
 * @param {boolean} props.showModal 모달 상태 값
 * @param {function} props.handleClose 모달 닫는 함수
 */
interface TableModalProps {
  showModal: boolean;
  handleClose: () => void;
}
export default function TableModal({
  showModal,
  handleClose,
}: TableModalProps) {
  return (
    <Modal showModal={showModal} handleClose={handleClose}>
      <div className={styles.tableModal}>
        <div>
          <TableModalTop handleClose={handleClose} />
          <TableModalText />
        </div>
        <TableModalButton handleClose={handleClose} />
      </div>
    </Modal>
  );
}
