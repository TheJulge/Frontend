import { useState } from 'react';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
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
        aria-label="월급 계산기 열기"
      >
        <CalculateOutlinedIcon />
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
