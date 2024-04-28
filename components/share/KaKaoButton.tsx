import styles from '@/components/share/KaKaoButton.module.scss';
import KakaoIcon from '@/public/images/share/Kakaotalk.svg';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    Kakao: any;
  }
}

interface KakaoButtonProps {
  shopName: string;
  url: string;
}

export default function KaKaoButton({ url, shopName }: KakaoButtonProps) {
  const handleClick = () => {
    if (!window.Kakao?.isInitialized()) {
      Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
    }

    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'the Julge',
        description: `${shopName}에서 남들보다 더 받고 일 하세요`,
        imageUrl:
          'https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/4-17/the-julge/6909d7a1-be9b-40f5-9319-fe2c376d3e4c-Group_1_1.png',
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: '알바하기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return (
    <button className={styles.button} type="button" onClick={handleClick}>
      <div>
        <KakaoIcon className={styles.kakaoIcon} viewBox="0 0 18 18" />
      </div>
    </button>
  );
}
