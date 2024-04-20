import { ItemType } from '@/types/applicationTypes';
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
  items: ItemType;
}
export default function TableModal({
  showModal,
  handleClose,
  items,
}: TableModalProps) {
  const { item } = items;
  const { user } = item;
  console.log(item, user.item);
  return (
    <Modal showModal={showModal} handleClose={handleClose}>
      <div className={styles.tableModal}>
        <div>
          <TableModalTop
            name={user.item.name!}
            phone={user.item.phone!}
            handleClose={handleClose}
          />
          <TableModalText text={user.item.bio!} />
        </div>
        <TableModalButton handleClose={handleClose} />
      </div>
    </Modal>
  );
}
