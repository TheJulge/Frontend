import { useEffect, useState } from 'react';
import Modal from '../commons/modal/Modal';
import { formatWage } from '@/utils/noticeDataFormetters';
import styles from './CalculateModal.module.scss';

interface CalculateModalProps {
  hourlyPay: number;

  workHour: number;
  showModal: boolean;
  handleClose: () => void;
}
type PayType = '주' | '월';

const MONTH_WEEK = 4.34;
const WEEK = 7;

export default function CalculateModal({
  hourlyPay,
  workHour,
  showModal,
  handleClose,
}: CalculateModalProps) {
  const [weeklyPay, setWeeklyPay] = useState('');
  const [monthlyPay, setMonthlyPay] = useState('');

  const [type, setType] = useState<PayType>('주');
  const [weeklyWorkDay, setWeeklyWorkDay] = useState(5);
  const [overtime, setOvertime] = useState(0);
  const [taxPercent, setTaxPercent] = useState<0 | 3.3 | 9.32>(0);
  const [additionalPay, setAdditionalPay] = useState<0 | 1>(0);

  useEffect(() => {
    const weeklyWorkHour = weeklyWorkDay * workHour;

    const extraPay =
      weeklyWorkHour > 15
        ? Math.floor((weeklyWorkHour / 5) * hourlyPay * additionalPay)
        : 0;
    const overtimePay = Math.floor(overtime * hourlyPay * 1.5);

    const weeklyTotalPay = Math.floor(
      (weeklyWorkHour * hourlyPay + extraPay + overtimePay) *
        ((100 - taxPercent) / 100),
    );
    if (type === '주') {
      setWeeklyPay(formatWage(weeklyTotalPay));
    }
    if (type === '월') {
      setMonthlyPay(formatWage(Math.floor(weeklyTotalPay * MONTH_WEEK)));
    }
  }, [type, weeklyWorkDay, taxPercent, overtime, additionalPay]);

  const handleWorkDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let days = parseInt(e.target.value);
    if (days > WEEK) {
      days = WEEK;
    }
    if (days < 1) {
      days = 1;
    }
    setWeeklyWorkDay(days);
  };

  return (
    <Modal showModal={showModal} handleClose={handleClose}>
      <div className={styles.container}>
        <div className={styles.payType}>
          <p className={styles.hourlyPay}>
            <span>시급</span> {hourlyPay}원을
          </p>
          <div className={styles.typeRadio}>
            <div className={styles.toggle}>
              <input
                id="weekly"
                type="radio"
                name="pay"
                value="주급"
                checked
                onClick={() => {
                  setType('주');
                }}
              />
              <label htmlFor="weekly">주급</label>
              <input
                id="monthly"
                type="radio"
                name="pay"
                value="월급"
                onClick={() => {
                  setType('월');
                }}
              />
              <label htmlFor="monthly">월급</label>
            </div>
            <p>으로</p>
          </div>
        </div>
        <div className={styles.options}>
          <p className={styles.workHour}>
            하루에 <span>{workHour}</span> 시간
          </p>
          <div className={styles.workDay}>
            <span>일주일에</span>
            <input
              type="number"
              min="1"
              max={WEEK}
              value={weeklyWorkDay}
              onChange={handleWorkDayChange}
            />
            <span>일 근무</span>
          </div>
          <div className={styles.overtime}>
            <span>{type} 연장 근무</span>
            <input
              type="number"
              min="0"
              value={overtime}
              onChange={e => setOvertime(parseInt(e.target.value))}
            />
            <span>시간</span>
          </div>
          <div className={styles.tax}>
            <p>세금</p>
            <div className={styles.taxToggle}>
              <input
                id="no-tax"
                type="radio"
                name="tax"
                value="미포함"
                checked
                onClick={() => {
                  setTaxPercent(0);
                }}
              />
              <label htmlFor="no-tax">미포함</label>
              <input
                id="basic-tax"
                type="radio"
                name="tax"
                value="4대보험"
                onClick={() => {
                  setTaxPercent(9.32);
                }}
              />
              <label htmlFor="basic-tax">4대보험</label>
              <input
                id="income-tax"
                type="radio"
                name="tax"
                value="소득세"
                onClick={() => {
                  setTaxPercent(9.32);
                }}
              />
              <label htmlFor="income-tax">소득세</label>
            </div>
          </div>
          <div className={styles.additionalPay}>
            <p>주휴수당</p>
            <div className={styles.additionalPayToggle}>
              <input
                id="no-include"
                type="radio"
                name="additionalPay"
                value="미포함"
                checked
                onClick={() => {
                  setAdditionalPay(0);
                }}
              />
              <label htmlFor="no-include">미포함</label>
              <input
                id="include"
                type="radio"
                name="additionalPay"
                value="포함"
                onClick={() => {
                  setAdditionalPay(1);
                }}
              />
              <label htmlFor="include">포함</label>
            </div>
          </div>
        </div>
        <div className={styles.calculatedPay}>
          <p>계산된 {type}급은</p>
          <p>
            총 <span>{type === '주' ? weeklyPay : monthlyPay} </span>입니다
          </p>
        </div>
      </div>
    </Modal>
  );
}
