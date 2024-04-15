import LogoIcon from '@/public/images/logo.svg';
import Link from 'next/link';
import styles from './Gnb.module.scss';
import GnbSearch from './GnbSearch.tsx';
import GnbUser from './GnbUser.tsx';

export default function Gnb() {
  return (
    <header>
      <div className={styles.headerContainer}>
        <Link className={styles.logo} href="/">
          <LogoIcon viewBox="0 0 112 40" />
        </Link>
        <GnbSearch />
        <GnbUser />
      </div>
    </header>
  );
}
