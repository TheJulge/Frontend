import styles from '@/components/share/ShareButtons.module.scss';
import { FacebookShareButton } from 'react-share';
import FacebookShareIcon from '@/public/images/share/Facebook.svg';
import UrlShareButton from '@/components/share/UrlShareButton';
import KaKaoButton from '@/components/share/KaKaoButton';

interface ShareButtonsProps {
  url: string;
}

export default function ShareButtons({ url }: ShareButtonsProps) {
  return (
    <div className={styles.buttonContainer}>
      <UrlShareButton url={url} />
      <KaKaoButton url={url} />
      <FacebookShareButton url={url}>
        <button className={styles.facebookButton} type="button">
          <FacebookShareIcon className={styles.facebookIcon} />
        </button>
      </FacebookShareButton>
    </div>
  );
}
