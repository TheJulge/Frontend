import { useState } from 'react';
import Modal from '../commons/modal/Modal';
import styles from './CalculateModal.module.scss';

interface CalculateModalProps {
  hourlyPay: number;

  workHour: number;
  showModal: boolean;
  handleClose: () => void;
}
type PayType = 'weekly' | 'monthly';

const MONTH_WEEK = 4.34;

export default function CalculateModal({
  hourlyPay,
  workHour,
  showModal,
  handleClose,
}: CalculateModalProps) {
  const [type, setType] = useState<PayType>('weekly');

  const [totalPay, setTotalPay] = useState(0);
  const [weeklyWorkHour, setWeeklyWorkHour] = useState(0);

  return (
    <Modal showModal={showModal} handleClose={handleClose}>
      <div className={styles.container}>
        <div className={styles.payType}>
          <p className={styles.hourlyPay}>
            <span>시급</span> {hourlyPay}원,
          </p>
          <div className={styles.typeRadio}>
            <div className={styles.toggle}>
              <input id="weekly" type="radio" name="pay" value="주급" checked />
              <label htmlFor="weekly">주급</label>
              <input id="monthly" type="radio" name="pay" value="월급" />
              <label htmlFor="monthly">월급</label>
            </div>
            <p>으로</p>
          </div>
        </div>
        <div className={styles.options}> </div>
        <div className={styles.calculatedPay}></div>
      </div>
    </Modal>
  );
}
