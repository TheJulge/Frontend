import styles from '@/components/commons/inputs/timeInput/TimeInput.module.scss';
import React, { useState } from 'react';

export default function TimeInput() {
  return (
    <label className={styles.timeInputLabel} htmlFor="time">
      <span>업무 시간*</span>
      <input id="time" type="number" placeholder="입력" />
      <div className={styles.time}>시간</div>
    </label>
  );
}
