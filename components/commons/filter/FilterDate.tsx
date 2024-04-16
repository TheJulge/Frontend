import styles from './FilterDate.module.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function FilterDate() {
  return (
    <div className={styles.filterDate}>
      <h6>시작일</h6>
    </div>
  );
}
