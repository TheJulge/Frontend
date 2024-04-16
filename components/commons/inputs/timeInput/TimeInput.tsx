import styles from '@/components/commons/inputs/timeInput/TimeInput.module.scss';

/**
 * 숫자만 입력할 수 있는 input 입니다.
 * 시간 관련한 정보가 필요할 때 사용 가능하며, 기본 단위는 시간 입니다.
 * MoneyInput이랑 달리 최저시급을 자동적으로 맞추는 기능이 필요하지 않아 따로 분리 했습니다.
 */

export default function TimeInput() {
  return (
    <div className={styles.container}>
      <label htmlFor="time">업무 시간*</label>
      <input
        className={styles.input}
        id="time"
        type="number"
        placeholder="입력"
      />
      <div className={styles.time}>시간</div>
    </div>
  );
}
