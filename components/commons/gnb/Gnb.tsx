import LogoIcon from '@/public/images/logo.svg';
import Link from 'next/link';
import styles from './Gnb.module.scss';
import SearchHeader from './SearchHeader.tsx';
// import HeaderUser from "./headerUser";

export default function Gnb() {
  return (
    <header>
      <div className={styles.headerContainer}>
        <Link href="/">
          <LogoIcon />
        </Link>
        <SearchHeader />
        {/* <HeaderUser /> */}
      </div>
    </header>
  );
}
