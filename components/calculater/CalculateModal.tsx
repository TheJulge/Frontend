import Modal from '../commons/modal/Modal';
import styles from './CalculateModal.module.scss';

interface CalculateModalProps {
  hourlyPay: number;
  showModal: boolean;
  handleClose: () => void;
}
export default function CalculateModal({
  hourlyPay,
  showModal,
  handleClose,
}: CalculateModalProps) {
  return (
    <Modal showModal={showModal} handleClose={handleClose}>
      <div className={styles.container}></div>
    </Modal>
  );
}
