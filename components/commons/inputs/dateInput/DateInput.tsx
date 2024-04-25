import React from 'react';
import { Control, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import { format } from 'date-fns';
import styles from './DateInput.module.scss';
import 'react-datepicker/dist/react-datepicker.css';

/**
 * filter 시작일에 대한 컴포넌트 입니다.
 * @param {Object} props.startDate 시작일 값
 * @param {function} props.setStartDate 시작일 값 결정
 */
interface DateInputProps {
  control: Control;
}

export default function DateInput({ control }: DateInputProps) {
  const formatDate = (date: Date): string => {
    return format(date, "yyyy-MM-dd'T'HH:mm:ssxxx");
  };

  return (
    <div className={styles.startDate}>
      <label htmlFor="calendar">시작 일시*</label>
      <Controller
        control={control}
        name="startsAt"
        render={({ field }) => (
          <DatePicker
            className={styles.calendar}
            id="startsAt"
            selected={field.value}
            onChange={date => field.onChange(date)}
            dateFormat="yyyy-MM-dd HH:mm"
            timeInputLabel="시간:"
            timeIntervals={15}
            showTimeSelect
            locale={ko}
            placeholderText="입력"
          />
        )}
      />
    </div>
  );
}
