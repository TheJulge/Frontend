import styles from '@/components/share/ShareButtons.module.scss';
import UrlShareButton from './UrlShareButton';

interface ShareButtonsProps {
  url: string;
}

export default function ShareButtons({ url }: ShareButtonsProps) {
  return (
    <div className={styles.buttonContainer}>
      <UrlShareButton url={url} />
      {/* <KakaoButton />
      <FacebookButton /> */}
    </div>
  );
}
