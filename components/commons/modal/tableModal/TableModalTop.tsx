import CloseIcon from '@/public/images/close.svg';
import styles from './TableModal.module.scss';

/**
 * tableModal의 신청자와 전화번호가 있는 컴포넌트 입니다.
 * @param {function} props.handleClose 모달 닫는 함수
 * @param {string} props.name 신청자 이름 값
 * @param {string} props.phone 신청자 전화번호 값
 */
interface TableModalTopProps {
  handleClose: () => void;
  name: string;
  phone: string;
}

export default function TableModalTop({
  handleClose,
  name,
  phone,
}: TableModalTopProps) {
  const phoneHyphen = phone
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
    .replace(/(-{1,2})$/g, '');
  return (
    <div className={styles.modalTop}>
      <p>
        <strong>{name}</strong>
        <span>{phoneHyphen}</span>
      </p>
      <button type="button" onClick={handleClose} aria-label="닫기">
        <CloseIcon viewBox="0 0 24 24" />
      </button>
    </div>
  );
}
