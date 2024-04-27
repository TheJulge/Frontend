import styles from '@/components/share/KaKaoButton.module.scss';
import KakaoIcon from '@/public/images/share/Kakaotalk.svg';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    Kakao: any;
  }
}

interface KakaoButtonProps {
  url: string;
}

export default function KaKaoButton({ url }: KakaoButtonProps) {
  const handleClick = () => {
    if (!window.Kakao?.isInitialized()) {
      Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
    }

    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'The Julge',
        description: '남들보다 더 받고 일 하세요',
        imageUrl:
          'https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/4-17/the-julge/91af383d-3909-4706-8e37-8d652c2a99a3-logo1.png',
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
      <KakaoIcon className={styles.kakaoIcon} />
    </button>
  );
}
