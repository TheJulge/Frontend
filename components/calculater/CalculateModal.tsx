import React, { useEffect, useState } from 'react';
import CloseIcon from '@/public/images/close.svg';
import { formatWage } from '@/utils/noticeDataFormetters';
import styles from './CalculateModal.module.scss';
import Modal from '../commons/modal/Modal';

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
        ? Math.floor(
            (Math.min(weeklyWorkHour, 40) / 5) * hourlyPay * additionalPay,
          )
        : 0;
    const overtimePay = Math.floor(overtime * hourlyPay * 1.5);

    if (type === '주') {
      const weeklyTotalPay = Math.floor(
        (weeklyWorkHour * hourlyPay + extraPay + overtimePay) *
          ((100 - taxPercent) / 100),
      );
      setWeeklyPay(formatWage(weeklyTotalPay));
    }
    if (type === '월') {
      const weeklyTotalPay = Math.floor(weeklyWorkHour * hourlyPay + extraPay);
      setMonthlyPay(
        formatWage(
          Math.floor(
            (weeklyTotalPay * MONTH_WEEK + overtimePay) *
              ((100 - taxPercent) / 100),
          ),
        ),
      );
    }
  }, [type, weeklyWorkDay, taxPercent, overtime, additionalPay]);

  const handleWorkDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let days = parseInt(e.target.value, 10);
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
        <div className={styles.containerTop}>
          <h3>급여 계산기</h3>
          <button type="button" onClick={handleClose}>
            <CloseIcon />
          </button>
        </div>
        <div>
          <div className={styles.payType}>
            <p className={styles.hourlyPay}>
              <span>시급</span> {hourlyPay}원
            </p>
            <div className={styles.typeRadio}>
              <span>지급 방법</span>
              <div className={styles.toggle}>
                <input
                  id="weekly"
                  type="radio"
                  name="pay"
                  value="주급"
                  defaultChecked
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
            </div>
          </div>
          <div className={styles.options}>
            <p className={styles.workHour}>
              일일 근무시간 <span>{workHour}시간</span>
            </p>
            <div className={styles.workDay}>
              <span>일주 근무일수</span>
              <div className={styles.workCon}>
                <input
                  type="number"
                  min="1"
                  max={WEEK}
                  value={weeklyWorkDay}
                  onChange={handleWorkDayChange}
                />
                <span>일</span>
              </div>
            </div>
            <div className={styles.overtime}>
              <span>{type} 연장 근무시간</span>
              <div className={styles.workCon}>
                <input
                  type="number"
                  min="0"
                  value={overtime}
                  onChange={e => setOvertime(parseInt(e.target.value, 10))}
                />
                <span>시간</span>
              </div>
            </div>
            <div className={styles.tax}>
              <p>세금</p>
              <div className={styles.taxToggle}>
                <input
                  defaultChecked
                  id="no-tax"
                  type="radio"
                  name="tax"
                  value="미포함"
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
                    setTaxPercent(3.3);
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
                  value="주휴수당포함"
                  defaultChecked
                  onClick={() => {
                    setAdditionalPay(0);
                  }}
                />
                <label htmlFor="no-include">미포함</label>
                <input
                  id="include"
                  type="radio"
                  name="additionalPay"
                  value="주휴수당미포함"
                  onClick={() => {
                    setAdditionalPay(1);
                  }}
                />
                <label htmlFor="include">포함</label>
              </div>
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
