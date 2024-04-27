import Image from 'next/image';
import LocationIcon from '@/public/images/card/locationIcon.svg';
import styles from './ShopDetailsCard.module.scss';
import Link from 'next/link';

interface ShopDetailsCardProps {
  shopId: string;
  shopData: any;
}
export default function ShopDetailsCard({
  shopId,
  shopData,
}: ShopDetailsCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.cardImg}>
        <Image src={shopData.item.imageUrl} alt="shop image" fill />
      </div>
      <div className={styles.contents}>
        <div className={styles.information}>
          <div className={styles.title}>
            <p>식당</p>
            <span>{shopData.item.name}</span>
          </div>
          <div className={styles.location}>
            <LocationIcon />
            <p>{shopData.item.address1}</p>
          </div>
          <p className={styles.description}>{shopData.item.description}</p>
        </div>
        <div className={styles.links}>
          <Link className={styles.editLink} href={`/shops`}>
            편집하기
          </Link>
          <Link
            className={styles.noticeEnterLink}
            href={`/shops/${shopId}/notices`}
          >
            공고 등록하기
          </Link>
        </div>
      </div>
    </div>
  );
}
