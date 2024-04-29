import CalculatorButton from '@/components/calculater/CalculatorButton';
import ShareOpenButton from '@/components/share/ShareOpenButton';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import Link from 'next/link';
import styles from './AdditionalFeat.module.scss';

interface FeatType {
  shopName: string;
  shopAddress: string;
  hourlyPay: number;
  workhour: number;
}

export default function AdditionalFeat({
  shopName,
  shopAddress,
  hourlyPay,
  workhour,
}: FeatType) {
  return (
    <ul className={styles.AdditionalFeatCon}>
      <li>
        <ShareOpenButton shopName={shopName} />
      </li>
      <li>
        <Link
          href={`https://map.kakao.com/link/search/${shopAddress}`}
          target="_blank"
          title={`${shopAddress} 지도 새창열림`}
        >
          <MapOutlinedIcon />
        </Link>
      </li>
      <li>
        <CalculatorButton hourlyPay={hourlyPay} workHour={workhour} />
      </li>
    </ul>
  );
}
