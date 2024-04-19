import Link from 'next/link';
import EmailIcon from '@/public/images/footer/envelope-square.svg';
import FacebookIcon from '@/public/images/footer/facebook-square.svg';
import InstagramIcon from '@/public/images/footer/instagram.svg';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <address>
        <span>&#169;codeit - 2023</span>
      </address>
      <ul className={styles.footerLinks}>
        <li>
          <Link href="/">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/">FAQ</Link>
        </li>
      </ul>
      <ul className={styles.footerSns}>
        <li>
          <Link
            href="https://mail.google.com"
            target="_brank"
            title="메일로 이동"
          >
            <EmailIcon viewBox="0 0 25 25" />
          </Link>
        </li>
        <li>
          <Link href="/" target="_brank" title="페이스북으로 이동">
            <FacebookIcon viewBox="0 0 25 25" />
          </Link>
        </li>
        <li>
          <Link href="/" target="_brank" title="인스타그램으로 이동">
            <InstagramIcon viewBox="0 0 25 25" />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
