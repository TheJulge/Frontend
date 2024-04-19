import Image from 'next/image';
import styles from './NoticeDetailsCard.module.scss';
import { NoticeBaseType } from '@/types/noticeTypes';

interface NoticeDetailsCardProp {
  noticeDetails: NoticeBaseType;
}

export default function NoticeDetailsCard({
  noticeDetails,
}: NoticeDetailsCardProp) {
  return <div className={styles.container}></div>;
}
