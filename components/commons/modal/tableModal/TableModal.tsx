import Modal from '../Modal';
import TableModalTop from './TableModalTop';
import TableModalText from './TableModalText';
import TableModalButton from './TableModalButton';
import styles from './TableModal.module.scss';

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
        <TableModalTop handleClose={handleClose} />
        <TableModalText />
        <TableModalButton />
      </div>
      {/* 신청자, 소개, 전화번호, 상태, 닫기 버튼 */}
    </Modal>
  );
}
