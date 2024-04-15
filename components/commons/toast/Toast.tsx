import styles from './Toast.module.scss';

interface ToastProp {
  type: string;
}

export default function Toast({ type }: ToastProp) {
  return <div className={styles.toast}>{type}</div>;
}
