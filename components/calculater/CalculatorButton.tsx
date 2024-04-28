import { useState } from 'react';
import styles from './CalculatorButton.module.scss';
import CalculateModal from './CalculateModal';

interface CalculatorButtonProp {
  hourlyPay: number;
  workHour: number;
}
export default function CalculatorButton({
  hourlyPay,
  workHour,
}: CalculatorButtonProp) {
  const [calculateModal, setCalculateModal] = useState(false);
  const handleOpen = () => {
    setCalculateModal(true);
  };
  const handleClose = () => {
    setCalculateModal(false);
  };
  return (
    <>
      <button
        className={styles.calculatorButton}
        onClick={handleOpen}
        type="button"
      >
        월급계산기
      </button>
      {calculateModal && (
        <CalculateModal
          hourlyPay={hourlyPay}
          workHour={workHour}
          showModal={calculateModal}
          handleClose={handleClose}
        />
      )}
    </>
  );
}
