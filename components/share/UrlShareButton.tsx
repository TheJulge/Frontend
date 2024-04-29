import styles from '@/components/share/UrlShareButton.module.scss';
import { useState } from 'react';
import LinkIcon from '@/public/images/share/Link.svg';
import Toast from '../commons/toast/Toast';

interface UrlShareButtonProps {
  url: string;
}

export default function UrlShareButton({ url }: UrlShareButtonProps) {
  const [copyUrlStatus, setCopyUrlStatus] = useState('idle');

  const handleButtonClick = async (copyUrl: string) => {
    setCopyUrlStatus('fetching');
    try {
      await navigator.clipboard.writeText(copyUrl);
      setCopyUrlStatus('success');
      setTimeout(() => {
        setCopyUrlStatus('idle');
      }, 3000);
    } catch (error) {
      setCopyUrlStatus('error');
      setTimeout(() => {
        setCopyUrlStatus('idle');
      }, 3000);
    }
  };

  return (
    <>
      <button
        className={styles.button}
        type="button"
        disabled={copyUrlStatus === 'fetching'}
        onClick={() => handleButtonClick(url)}
      >
        <LinkIcon className={styles.linkIcon} />
      </button>
      {copyUrlStatus === 'success' && (
        <div className={styles.toast}>
          <Toast type="URL이 복사되었습니다" />
        </div>
      )}
      {copyUrlStatus === 'error' && (
        <div className={styles.toast}>
          <Toast type="URL 복사에 실패했습니다" />
        </div>
      )}
    </>
  );
}
