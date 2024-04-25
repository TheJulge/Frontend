import ErrorIcon from '@/public/images/404.svg';
import styles from '@/styles/404.module.scss';
import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div className={styles.errorPage}>
      <div aria-label="404 페이지 입니다.">
        <ErrorIcon />
      </div>
      <div>
        <strong>페이지를 찾을 수 없습니다.</strong>
        <p>
          페이지의 주소가 잘못 입력되었거나, <br /> 주소가 변경 혹은 삭제되어
          요청하신 페이지를 찾을 수 없습니다.
        </p>
        <Link href="/">메인으로 이동</Link>
      </div>
    </div>
  );
}
